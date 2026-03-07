# malucart.github.io

My personal website — a space to myself.

I'm building up my skills in JavaScript, React, Vite, and ESLint, and this is where I document that journey. You'll find projects I've been working on and a blog where I share what I'm learning along the way.

## Stack

- React
- Vite
- ESLint

## Development

```bash
npm install
npm run dev
```

## Deployment

Built with Vite and deployed to GitHub Pages via the `gh-pages` branch.

```bash
npm run build
git worktree add --orphan -b gh-pages /tmp/gh-pages-deploy
cp -r dist/. /tmp/gh-pages-deploy/
git -C /tmp/gh-pages-deploy add .
git -C /tmp/gh-pages-deploy commit -m "Deploy to GitHub Pages"
git -C /tmp/gh-pages-deploy push origin gh-pages
git worktree remove /tmp/gh-pages-deploy
```
