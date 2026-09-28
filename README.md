# codefornepal.github.io

A device-agnostic, low-bandwidth-friendly website for Code for Nepal
([codefornepal.org](https://codefornepal.org)).

Built with **React 19 + Vite + TypeScript + React Router**. Blog posts are
authored as Markdown in `content/posts/` and rendered to HTML at build time.
(Previously Jekyll, then Next.js.)

## Admin page to easily publish blogs

You need to be a blog publisher to access the following:

https://codefornepal.org/admin

The admin panel (Decap CMS) is configured in `public/admin/config.yml` and
commits Markdown files to `content/posts/` on the `master` branch.

## Design Guidelines

These are our brand color schemes.

```
Red: #E00015
Blue: #00ADEF
White: #FFFFFF
Light gray: #FCFBFB
```

## Installation and Setup

Requires **Node 20+** and **Yarn 1.x**.

```console
$ git clone https://github.com/<yourusername>/codefornepal.github.io.git
$ cd codefornepal.github.io/
$ git remote add upstream https://github.com/CodeforNepal/codefornepal.github.io.git
$ yarn install
```

### Develop

```console
$ yarn dev
```

Go to -> http://localhost:5173/

### Build

```console
$ yarn build      # -> ./out  (static site: HTML, JS/CSS, feed.xml, sitemap.xml, 404.html)
$ yarn preview    # serve ./out locally
```

### Typecheck

```console
$ yarn typecheck
```


## Keep Fork Updated

```console
$ git fetch upstream
$ git merge upstream/master
$ git push origin master
```
