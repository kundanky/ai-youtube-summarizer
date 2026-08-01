import { b as maybeRenderHead, c as renderComponent, g as renderTemplate } from "./server_BygG88gc.mjs";
import { t as createComponent } from "./astro-component_DIBu_Rjc.mjs";
import { t as renderScript } from "./global_zEN8GZ1j.mjs";
import "./compiler_I56Hg_PD.mjs";
//#region src/components/ThemeToggle.astro
var $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<button id="theme-toggle" class="p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors duration-200" aria-label="Toggle theme"><!-- Icon: Light mode (sun) --><span class="hidden dark:inline">☀️</span><!-- Icon: Dark mode (moon) --><span class="dark:hidden">🌙</span></button>${renderScript($$result, "/root/Projects/youtube-summary-ai/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/Projects/youtube-summary-ai/src/components/ThemeToggle.astro", void 0);
//#endregion
//#region src/components/Header.astro
var $$Header = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<header class="py-4 px-6 flex items-center justify-between"><a href="/" class="font-bold text-xl">Keplix AI</a><div class="flex items-center gap-4"><nav class="flex gap-4"><a href="/about" class="text-sm">About</a></nav>${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})}</div></header>`;
}, "/root/Projects/youtube-summary-ai/src/components/Header.astro", void 0);
//#endregion
export { $$Header as t };
