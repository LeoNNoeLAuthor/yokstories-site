import fs from "node:fs";
import path from "node:path";

const pages = ["index.html","about/index.html","bilingual/index.html","books/index.html","luma/index.html","resources/index.html","yok/index.html"];
const routes = ["books","yok","bilingual","luma","resources","about"];

for (const file of pages) {
  const nested = file.includes("/");
  const prefix = nested ? "../" : "./";
  let html = fs.readFileSync(file,"utf8");
  for (const route of routes) html = html.replaceAll(`href="${prefix}${route}/"`,`href="${prefix}${route}/index.html"`);
  html = html.replaceAll(`href="${prefix}"`,`href="${prefix}index.html"`);
  const resourcesLink = `href="${prefix}resources/index.html">Free resources</a>`;
  const calendarLink = `${resourcesLink}<a href="${prefix}calendar/index.html">Release calendar</a>`;
  html = html.replaceAll(resourcesLink, calendarLink);
  fs.writeFileSync(file,html);
}

let home = fs.readFileSync("index.html","utf8");
const teaser = `<section class="calendar-tease shell"><div><p class="kicker">Publication schedule</p><h2>Follow every new release.</h2><p>See the complete Yok, Bilingual Yok, and Blue Dreams Forest schedule from August through October 2026.</p></div><a class="button outline" href="./calendar/index.html">View the release calendar</a></section>`;
home = home.replace('<section class="newsletter">',`${teaser}<section class="newsletter">`);
fs.writeFileSync("index.html",home);

const source = fs.readFileSync("about/index.html","utf8");
const header = source.match(/<header class="site-header">[\s\S]*?<\/header>/)[0];
const footer = source.match(/<footer>[\s\S]*?<\/footer>/)[0];
const months = [
  ["August 2026",[["05","Luma 1","luma"],["08","Yok 7","yok"],["15","Yok 8","yok"],["17","Luma 2","luma"],["22","Yok 9","yok"],["24","Bilingual 1","bilingual"],["29","Yok 10","yok"],["31","Bilingual 2","bilingual"]]],
  ["September 2026",[["02","Luma 3","luma"],["07","Bilingual 3","bilingual"],["14","Bilingual 4","bilingual"],["16","Luma 4","luma"],["21","Bilingual 5","bilingual"],["28","Bilingual 6","bilingual"],["30","Luma 5","luma"]]],
  ["October 2026",[["14","Luma 6","luma"]]]
];
const monthHtml = months.map(([month,events])=>`<article class="release-month"><h2>${month}</h2><div class="release-events">${events.map(([day,name,type])=>`<div class="release-event ${type}"><strong>${day}</strong><span>${name}</span></div>`).join("")}</div></article>`).join("");
const main = `<main><section class="page-hero cream"><div><p class="kicker">August–October 2026</p><h1>Release calendar.</h1><p>Every planned release across A Yok Story, A Bilingual Yok Story, and Luma’s Blue Dreams Forest.</p></div><img src="../public/covers/bilingual/yok-bilingual-01-cover.webp" alt="Cover of Yok Says Hello"></section><section class="content-section shell"><div class="calendar-legend"><span class="yok">Yok</span><span class="bilingual">Bilingual Yok</span><span class="luma">Blue Dreams Forest</span></div><div class="release-months">${monthHtml}</div><p class="calendar-note">Dates are planned publication dates. Amazon processing may vary by marketplace.</p></section></main>`;
const calendar = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Release Calendar | LéoN NoèL</title><meta name="description" content="Publication schedule for Yok, Bilingual Yok, and Blue Dreams Forest books."><link rel="canonical" href="https://leonnoelauthor.github.io/yokstories-site/calendar/"><meta property="og:title" content="Release Calendar | LéoN NoèL"><meta property="og:image" content="https://leonnoelauthor.github.io/yokstories-site/public/og.png"><link rel="icon" href="../public/favicon.svg"><link rel="stylesheet" href="../styles.css"></head><body>${header}${main}${footer}</body></html>`;
fs.mkdirSync("calendar",{recursive:true});
fs.writeFileSync("calendar/index.html",calendar);

let sitemap = fs.readFileSync("sitemap.xml","utf8");
sitemap = sitemap.replace("</urlset>","  <url><loc>https://leonnoelauthor.github.io/yokstories-site/calendar/</loc></url>\n</urlset>");
fs.writeFileSync("sitemap.xml",sitemap);
