---
layout: none
---
{%- comment -%}
Overrides the theme's search index. Minimal Mistakes only indexes collection
documents, and this site's content lives in _pages, so the stock store comes
out empty and search silently returns nothing. This version indexes every page
that has a title.
{%- endcomment -%}
var store = [
{%- assign indexed = site.pages | where_exp: "p", "p.title" -%}
{%- for p in indexed -%}
  {
    "title": {{ p.title | jsonify }},
    "excerpt": {% if site.search_full_content == true %}{{ p.content | newline_to_br | replace:"<br />", " " | strip_html | replace: "**", "" | replace: "###", "" | replace: "##", "" | replace: "# ", "" | replace: "*", "" | normalize_whitespace | jsonify }}{% else %}{{ p.content | newline_to_br | replace:"<br />", " " | strip_html | replace: "**", "" | replace: "###", "" | replace: "##", "" | replace: "# ", "" | replace: "*", "" | normalize_whitespace | truncatewords: 50 | jsonify }}{% endif %},
    "categories": {{ p.categories | jsonify }},
    "tags": {{ p.tags | jsonify }},
    "url": {{ p.url | relative_url | jsonify }},
    "teaser": {{ p.header.teaser | default: null | jsonify }}
  }{%- unless forloop.last -%},{%- endunless -%}
{%- endfor -%}]
