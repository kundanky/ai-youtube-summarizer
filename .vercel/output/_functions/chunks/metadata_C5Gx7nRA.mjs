import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
//#region src/pages/api/metadata.ts
var metadata_exports = /* @__PURE__ */ __exportAll({
	POST: () => POST,
	prerender: () => false
});
var POST = async (context) => {
	try {
		const { url } = await context.request.json();
		if (!url) return new Response(JSON.stringify({ error: "Missing URL" }), { status: 400 });
		const response = await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`);
		if (!response.ok) return new Response(JSON.stringify({ error: "Failed to fetch metadata" }), { status: 404 });
		const data = await response.json();
		return new Response(JSON.stringify(data), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
	}
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/metadata@_@ts
var page = () => metadata_exports;
//#endregion
export { page };
