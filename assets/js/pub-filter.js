/* Year and keyword filtering for the publications list.
 *
 * Progressive enhancement: the page is a complete, readable list without this
 * file. The markup carries data-year and data-tags on each <li class="pub">,
 * and the filter form ships with `hidden` set — this script is what reveals it.
 *
 * Hiding an entry also removes it from the CSS counter that numbers the list,
 * so a filtered view numbers itself 1..n with no help from here.
 */
(function () {
  'use strict';

  var form = document.getElementById('pub-filter');
  if (!form) { return; }

  var yearSel = document.getElementById('pub-filter-year');
  var tagSel = document.getElementById('pub-filter-tag');
  var clearBtn = document.getElementById('pub-filter-clear');
  var countEl = document.getElementById('pub-filter-count');
  var items = [].slice.call(document.querySelectorAll('.pub-list .pub'));
  if (!items.length) { return; }

  // each <ol class="pub-list"> with the heading that introduces it, so a
  // section whose every entry is filtered out takes its heading with it
  var sections = [].slice.call(document.querySelectorAll('.pub-list')).map(function (list) {
    var head = list.previousElementSibling;
    while (head && !/^H[1-6]$/.test(head.tagName)) { head = head.previousElementSibling; }
    return { list: list, head: head };
  });

  function apply(push) {
    var year = yearSel.value;
    var tag = tagSel.value;
    var shown = 0;

    items.forEach(function (li) {
      var okYear = !year || li.getAttribute('data-year') === year;
      var tags = (li.getAttribute('data-tags') || '').split('|');
      var okTag = !tag || tags.indexOf(tag) !== -1;
      var ok = okYear && okTag;
      li.classList.toggle('is-filtered-out', !ok);
      if (ok) { shown++; }
    });

    sections.forEach(function (s) {
      var any = [].slice.call(s.list.querySelectorAll('.pub')).some(function (li) {
        return !li.classList.contains('is-filtered-out');
      });
      s.list.classList.toggle('is-filtered-out', !any);
      if (s.head) { s.head.classList.toggle('is-filtered-out', !any); }
    });

    var filtering = year || tag;
    countEl.textContent = filtering
      ? 'Showing ' + shown + ' of ' + items.length + ' publications'
      : items.length + ' publications';
    clearBtn.disabled = !filtering;

    if (push !== false && window.history && window.history.replaceState) {
      var q = [];
      if (year) { q.push('year=' + encodeURIComponent(year)); }
      if (tag) { q.push('tag=' + encodeURIComponent(tag)); }
      window.history.replaceState(null, '',
        window.location.pathname + (q.length ? '?' + q.join('&') : ''));
    }
  }

  function setIfPresent(select, value) {
    if (!value) { return; }
    for (var i = 0; i < select.options.length; i++) {
      if (select.options[i].value === value) { select.value = value; return; }
    }
  }

  // a filtered view is linkable: ?year=2024&tag=Dubins%20paths
  var params = new URLSearchParams(window.location.search);
  setIfPresent(yearSel, params.get('year'));
  setIfPresent(tagSel, params.get('tag'));

  yearSel.addEventListener('change', function () { apply(); });
  tagSel.addEventListener('change', function () { apply(); });
  clearBtn.addEventListener('click', function () {
    yearSel.value = '';
    tagSel.value = '';
    apply();
  });

  // the keyword chips already name the vocabulary — let them drive the filter
  // rather than making the reader find the same word in the dropdown
  document.querySelectorAll('.pub-tag').forEach(function (chip) {
    chip.classList.add('is-clickable');
    chip.setAttribute('role', 'button');
    chip.setAttribute('tabindex', '0');
    chip.title = 'Show only publications tagged "' + chip.textContent + '"';
    function pick() {
      tagSel.value = (tagSel.value === chip.textContent) ? '' : chip.textContent;
      apply();
      form.scrollIntoView({ block: 'nearest' });
    }
    chip.addEventListener('click', pick);
    chip.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(); }
    });
  });

  // ------------------------------------------------------------------
  // How much of each entry to show. Separate from the filters above: those
  // choose *which* papers are listed and belong in the URL so a filtered view
  // can be linked; these are a reading preference, so they persist per browser
  // instead of cluttering the link.
  // ------------------------------------------------------------------
  var VIEW_KEY = 'arsl-pub-view';
  var views = [
    { id: 'pub-show-figures',   cls: 'hide-figures' },
    { id: 'pub-show-summaries', cls: 'hide-summaries' },
    { id: 'pub-show-tags',      cls: 'hide-tags' }
  ];
  var lists = [].slice.call(document.querySelectorAll('.pub-list'));

  function readStored() {
    try {
      return JSON.parse(window.localStorage.getItem(VIEW_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function applyViews(save) {
    var state = {};
    views.forEach(function (v) {
      var box = document.getElementById(v.id);
      if (!box) { return; }
      state[v.id] = box.checked;
      lists.forEach(function (list) {
        list.classList.toggle(v.cls, !box.checked);
      });
    });
    if (save) {
      try {
        window.localStorage.setItem(VIEW_KEY, JSON.stringify(state));
      } catch (e) { /* private browsing: the choice just does not persist */ }
    }
  }

  var stored = readStored();
  views.forEach(function (v) {
    var box = document.getElementById(v.id);
    if (!box) { return; }
    if (typeof stored[v.id] === 'boolean') { box.checked = stored[v.id]; }
    box.addEventListener('change', function () { applyViews(true); });
  });
  applyViews(false);

  form.hidden = false;
  apply(false);
})();
