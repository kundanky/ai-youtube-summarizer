import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { P as createAstro, c as renderComponent, g as renderTemplate } from "./server_BygG88gc.mjs";
import { t as createComponent } from "./astro-component_DIBu_Rjc.mjs";
import "./compiler_I56Hg_PD.mjs";
import { t as $$BlogPost } from "./BlogPost_BkgEQDDn.mjs";
import { n as renderEntry, t as getCollection } from "./_astro_content_DfuaEC86.mjs";
//#region src/pages/blog/[...slug].astro
var ____slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Component,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://example.com");
async function getStaticPaths() {
	return (await getCollection("blog")).map((post) => ({
		params: { slug: post.id },
		props: post
	}));
}
var $$Component = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Component;
	const post = Astro.props;
	const { Content } = await renderEntry(post);
	return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Content", Content, {})}` })}`;
}, "/root/Projects/youtube-summary-ai/src/pages/blog/[...slug].astro", void 0);
var $$file = "/root/Projects/youtube-summary-ai/src/pages/blog/[...slug].astro";
var $$url = "/blog/[...slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/[...slug]@_@astro
var page = () => ____slug__exports;
//#endregion
export { page };
