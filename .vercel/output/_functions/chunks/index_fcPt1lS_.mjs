import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as addAttribute, c as renderComponent, g as renderTemplate, x as renderHead } from "./server_BygG88gc.mjs";
import { t as createComponent } from "./astro-component_DIBu_Rjc.mjs";
import "./compiler_I56Hg_PD.mjs";
import { r as $$Image } from "./_astro_assets_D552zQPw.mjs";
import { n as $$Footer, r as $$BaseHead, t as $$FormattedDate } from "./FormattedDate_IgR0lc6J.mjs";
import { n as SITE_TITLE, t as SITE_DESCRIPTION } from "./consts_kQkbns8j.mjs";
import { t as $$Header } from "./Header_CuwoJpLR.mjs";
import { t as getCollection } from "./_astro_content_DfuaEC86.mjs";
//#region src/pages/blog/index.astro
var blog_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const posts = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
	return renderTemplate`<html lang="en" data-astro-cid-x255k2k2><head>${renderComponent($$result, "BaseHead", $$BaseHead, {
		"title": SITE_TITLE,
		"description": SITE_DESCRIPTION,
		"data-astro-cid-x255k2k2": true
	})}${renderHead($$result)}</head><body data-astro-cid-x255k2k2>${renderComponent($$result, "Header", $$Header, { "data-astro-cid-x255k2k2": true })}<main data-astro-cid-x255k2k2><section data-astro-cid-x255k2k2><ul data-astro-cid-x255k2k2>${posts.map((post) => renderTemplate`<li data-astro-cid-x255k2k2><a${addAttribute(`/blog/${post.id}/`, "href")} data-astro-cid-x255k2k2>${post.data.heroImage && renderTemplate`${renderComponent($$result, "Image", $$Image, {
		"width": 720,
		"height": 360,
		"src": post.data.heroImage,
		"alt": "",
		"data-astro-cid-x255k2k2": true
	})}`}<h4 class="title" data-astro-cid-x255k2k2>${post.data.title}</h4><p class="date" data-astro-cid-x255k2k2>${renderComponent($$result, "FormattedDate", $$FormattedDate, {
		"date": post.data.pubDate,
		"data-astro-cid-x255k2k2": true
	})}</p></a></li>`)}</ul></section></main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-x255k2k2": true })}</body></html>`;
}, "/root/Projects/youtube-summary-ai/src/pages/blog/index.astro", void 0);
var $$file = "/root/Projects/youtube-summary-ai/src/pages/blog/index.astro";
var $$url = "/blog";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/index@_@astro
var page = () => blog_exports;
//#endregion
export { page };
