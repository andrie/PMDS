

# Product management for data scientists

This is a `reveal.js` presentation, rendered using `quarto` and
`motion-canvas`, used for my talks at LondonR and SatRdays, in London,
during April 2024.

## Preview

You can preview the slides at https://andrie.quarto.pub/pmds-londonr/

## Outline

As a Data Scientist you build data products all the time. You may even
have worked with a Product Manager to create analyses and dashboards for
decision making.

But are you applying the skills of product management in your data
science role?

In this talk Andrie provides an overview of Product Management (PM), and
what he’s learnt over two decades of managing products, ranging from
hardware (Psion PDAs) to software (Microsoft R Open, Posit Workbench)
and hosted services (MRAN).

Every product manager must consider the new product adoption life cycle,
managing the stages from finding the first innovators, managing growth
and ultimately the end-of-life process.

During this process you must manage your product so that it’s usable
(customers want it), feasible (you can build it) and valuable (you can
do this sustainably). Many frameworks exist to think about discovering
what customers want, the jobs they must get done, forming a value
proposition, managing a product roadmap, working with dev teams to build
it, and working with marketing and sales to create a compelling sales
pitch.

As a data scientist, you can benefit from product management knowledge
by thinking of your app as a product. You must convince your users
(internal customers) to use this app (at the cost of changing their
workflow).

I will leave you with a map to get started with classic resources,
including Geoffrey Moore, Marty Cagan, Teresa Torres, April Dunford and
Lenny’s Podcast.

## Makefile

The `Makefile` contains the following targets:

| target  | description                   |
|---------|-------------------------------|
| anim    | `npm run build`               |
| serve   | `npm run serve`               |
| quarto  | `quarto render paddling.qmd`  |
| publish | `quarto publish paddling.qmd` |
