import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { b as maybeRenderHead, c as renderComponent, g as renderTemplate } from "./server_BygG88gc.mjs";
import { t as createComponent } from "./astro-component_DIBu_Rjc.mjs";
import { t as renderScript } from "./global_zEN8GZ1j.mjs";
import "./compiler_I56Hg_PD.mjs";
import { t as $$Header } from "./Header_CuwoJpLR.mjs";
import { t as $$Layout } from "./Layout_C0A4z-jt.mjs";
//#region src/components/Hero.astro
var $$Hero = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="py-6 sm:py-8 text-center"><h1 class="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-2 sm:mb-3">Summarize<span class="text-zinc-300 dark:text-zinc-700 font-medium ml-px">.</span> Learn<span class="text-zinc-300 dark:text-zinc-700 font-medium ml-px">.</span> Understand<span class="text-zinc-300 dark:text-zinc-700 font-medium ml-px">.</span></h1><p class="text-zinc-500 dark:text-zinc-400 text-sm sm:text-lg max-w-lg mx-auto">Turn videos, audio and text into clear insights in seconds.</p></section>`;
}, "/root/Projects/youtube-summary-ai/src/components/Hero.astro", void 0);
//#endregion
//#region src/components/TabSwitcher.astro
var $$TabSwitcher = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="relative flex w-full bg-zinc-100 dark:bg-zinc-800 rounded-[--radius-input] p-1 h-12" id="tab-switcher"><div id="tab-indicator" class="absolute h-[calc(100%-8px)] top-1 left-1 w-[calc(33.33%-8px)] bg-white dark:bg-zinc-700 rounded-[calc(var(--radius-input)-4px)] shadow-sm transition-all duration-200 ease-out"></div><button data-tab="link" class="relative flex-1 text-sm font-medium z-10 transition-colors hover:text-primary-500">Link</button><button data-tab="audio" class="relative flex-1 text-sm font-medium z-10 transition-colors hover:text-primary-500">Audio</button><button data-tab="text" class="relative flex-1 text-sm font-medium z-10 transition-colors hover:text-primary-500">Text</button></div>${renderScript($$result, "/root/Projects/youtube-summary-ai/src/components/TabSwitcher.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/Projects/youtube-summary-ai/src/components/TabSwitcher.astro", void 0);
//#endregion
//#region src/components/Source.astro
var $$Source = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="relative w-full" id="source-dropdown"><button id="source-button" class="w-full flex items-center justify-between px-4 py-3 rounded-[--radius-input] border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 hover:border-primary-500/50 outline-none transition-all duration-200 text-sm" aria-haspopup="listbox" aria-expanded="false"><span id="selected-source">Loading...</span><svg class="w-4 h-4 text-zinc-500 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button><ul id="source-list" class="absolute z-50 w-full mt-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-[--radius-input] shadow-lg hidden animate-in fade-in zoom-in-95 duration-150" role="listbox"><!-- Dynamic items --></ul></div>${renderScript($$result, "/root/Projects/youtube-summary-ai/src/components/Source.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/Projects/youtube-summary-ai/src/components/Source.astro", void 0);
//#endregion
//#region src/components/UrlCard.astro
var $$UrlCard = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="space-y-4"><!-- Input Section --><div id="input-container" class="space-y-4"><input id="content-input" type="url" placeholder="Paste link here..." autocomplete="off" spellcheck="false" class="input-field"><div id="upload-zone" class="hidden border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-[--radius-input] p-8 text-center hover:border-primary-500/50 transition-colors cursor-pointer group"><div class="text-3xl mb-2 group-hover:scale-110 transition-transform">📁</div><p class="text-sm text-zinc-500">Click to upload or drag and drop</p><p class="text-[10px] text-zinc-400 mt-1 uppercase tracking-widest">Supports MP3, WAV, PDF</p><input type="file" class="hidden" id="file-input"></div><p id="content-error" class="hidden text-sm text-red-500"></p><button id="generate-button" disabled class="btn-primary flex items-center justify-center gap-2"><span class="spinner hidden w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span><span id="button-text">Generate Summary</span></button></div><!-- Coming Soon Overlay --><div id="coming-soon-container" class="hidden py-12 text-center space-y-3 animate-in fade-in zoom-in-95 duration-300"><div class="text-4xl">🚀</div><h3 class="font-bold text-lg" id="coming-soon-title">Coming Soon</h3><p class="text-zinc-500 text-sm max-w-[280px] mx-auto">We're working hard to bring this feature to Keplix AI. Stay tuned!</p></div><div id="content-preview" class="hidden card p-2 mt-6 transition-all duration-300"><img id="preview-thumb" src="" alt="" class="aspect-video w-full object-cover rounded-[calc(var(--radius-input)-4px)]"><div id="preview-skeleton" class="hidden aspect-video w-full animate-pulse bg-zinc-200 dark:bg-zinc-800 rounded-[calc(var(--radius-input)-4px)]"></div><div class="p-3"><h3 id="preview-title" class="font-medium text-sm leading-snug text-zinc-900 dark:text-zinc-100"></h3><p id="preview-author" class="mt-1 text-xs text-zinc-500 dark:text-zinc-400"></p></div></div></section>${renderScript($$result, "/root/Projects/youtube-summary-ai/src/components/UrlCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/Projects/youtube-summary-ai/src/components/UrlCard.astro", void 0);
//#endregion
//#region src/components/SummaryCard.astro
var $$SummaryCard = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="mt-6"><div class="rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden"><div class="flex items-center justify-between px-5 py-4 border-b border-white/10"><div class="flex items-center gap-2"><div class="w-2 h-2 rounded-full bg-white"></div><span class="text-xs uppercase tracking-[0.18em] text-zinc-500">AI Summary</span></div><div class="flex gap-2"><button id="copy-btn" class="rounded-xl border border-white/10 px-3 py-2 text-xs text-zinc-400 hover:bg-white/5 transition">Copy</button><button id="download-btn" class="rounded-xl border border-white/10 px-3 py-2 text-xs text-zinc-400 hover:bg-white/5 transition">Download</button></div></div><div class="p-6"><div id="summary-box" class="min-h-[180px]"><p id="summary-content" class="text-zinc-300 leading-8 whitespace-pre-wrap">Your AI summary will appear here. Paste a YouTube link above and press Generate Summary.</p></div></div></div></section>`;
}, "/root/Projects/youtube-summary-ai/src/components/SummaryCard.astro", void 0);
//#endregion
//#region src/components/EmptyState.astro
var $$EmptyState = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="hidden flex-col items-center justify-center py-6 text-center text-zinc-500 dark:text-zinc-400" id="empty-state"><div class="text-3xl mb-2">✨</div><p class="text-sm">Paste a link to generate your first AI summary.</p></div>`;
}, "/root/Projects/youtube-summary-ai/src/components/EmptyState.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="min-h-screen flex flex-col">${renderComponent($$result, "Header", $$Header, {})}<main class="flex-grow px-4 py-6 sm:py-10"><div class="w-full max-w-2xl mx-auto animate-in fade-in duration-500">${renderComponent($$result, "Hero", $$Hero, {})}<!-- Main Unified Application Card --><div class="card p-0 overflow-hidden"><div class="p-4 border-b border-zinc-200 dark:border-zinc-800">${renderComponent($$result, "TabSwitcher", $$TabSwitcher, {})}</div><div class="p-6 space-y-5">${renderComponent($$result, "Source", $$Source, {})}${renderComponent($$result, "UrlCard", $$UrlCard, {})}</div><!-- Summary Area (Unified) --><div class="px-6 pb-6">${renderComponent($$result, "EmptyState", $$EmptyState, {})}${renderComponent($$result, "SummaryCard", $$SummaryCard, {})}</div></div></div></main><footer class="text-center py-6 text-xs text-zinc-500 dark:text-zinc-600"><div class="space-x-4 mb-2"><a href="/privacy" class="hover:text-primary-500">Privacy</a><a href="/terms" class="hover:text-primary-500">Terms</a><a href="/contact" class="hover:text-primary-500">Contact</a></div><p>© ${(/* @__PURE__ */ new Date()).getFullYear()} Keplix AI</p></footer></div>` })}`;
}, "/root/Projects/youtube-summary-ai/src/pages/index.astro", void 0);
var $$file = "/root/Projects/youtube-summary-ai/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
