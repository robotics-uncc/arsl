# ARSL website (Jekyll → GitHub Pages)

Static rebuild of `arsl.charlotte.edu`, with the UNC Charlotte theme removed.

## Structure

```
_config.yml              site metadata; URL settings need filling in (see below)
_layouts/default.html    the only layout — header, nav, title band, footer
assets/css/style.css     the whole theme, ~450 lines, no build step, no dependencies
assets/images/           photos, ≤1600 px
assets/thumbs/           640 px JPEG thumbnails used by the gallery grid
assets/files/            PDFs (CV)
*.md                     one file per page; nav is built from `nav_order` front matter
.github/workflows/       builds and deploys on push to main
```

Nav is generated from front matter — add a page by dropping in a `.md` with
`title`, `permalink`, and `nav_order`. No nav file to edit.

## Deploying

Configured for the **organization site** of `github.com/robotics-uncc`, which
means the repo must be named exactly `robotics-uncc.github.io` and will serve at
`https://robotics-uncc.github.io/`.

1. Create the repo `robotics-uncc.github.io` under the `robotics-uncc` org, **public**, empty.
2. Push this directory to `main`.
3. Repo Settings → Pages → Source → **GitHub Actions**. The workflow in
   `.github/workflows/pages.yml` does the rest on every push.

Using a different repo name instead means a project site at
`https://robotics-uncc.github.io/<repo>/` — set `baseurl: "/<repo>"` in
`_config.yml` if you go that way. For a custom domain, set `url` to it, add a
`CNAME` file containing the bare domain, and point DNS at GitHub.

## Local development

```bash
sudo apt install ruby-full build-essential zlib1g-dev   # one time
bundle install
bundle exec jekyll serve      # http://127.0.0.1:4000
```

## Regenerating pages from the archive

The `.md` pages were generated from `../content/` by `../tools/make_pages.py`.
Re-running it **overwrites** them, so once you start hand-editing pages here,
stop running it.
