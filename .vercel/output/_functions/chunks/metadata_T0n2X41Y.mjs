import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
//#region src/pages/api/metadata.ts
var metadata_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var POST = async ({ request }) => {
	try {
		const { url } = await request.json();
		if (!url) return new Response(JSON.stringify({ error: "Missing URL" }), { status: 400 });
		const response = await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`);
		if (!response.ok) return new Response(JSON.stringify({ error: "Couldn't find that video. Check the link and try again." }), { status: 404 });
		const data = await response.json();
		return new Response(JSON.stringify({
			title: data.title ?? "Untitled video",
			author: data.author_name ?? "",
			thumbnail: data.thumbnail_url
		}), { status: 200 });
	} catch (e) {
		return new Response(JSON.stringify({ error: "Server error fetching metadata" }), { status: 500 });
	}
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/metadata@_@ts
var page = () => metadata_exports;
//#endregion
export { page };
