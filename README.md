
# Posit goes paddling

This is a `reveal.js` presentation, rendered using `quarto` and
`motion-canvas`, used for my lightning talk at Posit Workweek, 2024.

## Live preview

This project contains a quarto website, defined in `quarto.qmd`.

You can preview the rendered version of this site at
<https://andrie.quarto.pub/goes-paddling/>

## Folder structure

The folder structure of this project is as follows:

``` bash
.
├── README.md
|
| # Creating the quarto doc
├── _quarto.yml
├── paddling.qmd
├── src
│   ├── motion-canvas-url.js # fixes the url once deployed
|
| # Creating the animations
├── animations
|   ├── src
|   |   ├── project.ts
|   |   ├── scenes
|   |   |   ├── example.ts
|   ├── vite.config.ts
├── public
|   |   # rendered animation JS files go here
|   |   # these files must be included in quarto doc
|   |   ├── project.js
|
| # Creating the motion-canvas dependencies
├── motion-canvas-ts.html # Inject the mc dependencies
├── src
│   ├── main.ts # imports motion-canvas
├── dist
|   ├── # compiled motion canvas files go here
|   ├── *.html # this can be ignored
|   ├── *.js   # the js file must be included in the quarto doc
├── package.json
├── vite.config.ts
```

## Makefile

The `Makefile` contains the following targets:

| target  | description                   |
|---------|-------------------------------|
| anim    | `npm run build`               |
| serve   | `npm run serve`               |
| quarto  | `quarto render paddling.qmd`  |
| publish | `quarto publish paddling.qmd` |
