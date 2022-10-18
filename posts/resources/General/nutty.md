---
title: "We nutty"
date: "2020-01-03"
authors: "Andrew Chen"
imgSrc: "https://wallpaperwoo.com/uploads/pictures/wallpapers/original/107580_707804102a2693e22615e0c5e3686e05.jpg"
blurb: "Are you interested in organizing program-wide events, reaching out to industry professionals, o..."
priority: 2
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.