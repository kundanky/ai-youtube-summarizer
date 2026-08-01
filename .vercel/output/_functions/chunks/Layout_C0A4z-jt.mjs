import { P as createAstro, S as addAttribute, g as renderTemplate, p as renderSlot, x as renderHead } from "./server_BygG88gc.mjs";
import { t as createComponent } from "./astro-component_DIBu_Rjc.mjs";
import "./global_zEN8GZ1j.mjs";
import "./compiler_I56Hg_PD.mjs";
//#region src/layouts/Layout.astro
createAstro("https://example.com");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro.generator, "content")}><title>Keplix AI</title><script>
            // 1. Source of truth for initial theme application
            function getInitialTheme() {
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme) return savedTheme;
                return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            }
            
            if (getInitialTheme() === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        <\/script>${renderHead($$result)}</head><body class="bg-white dark:bg-black text-black dark:text-white transition-colors duration-200">${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "/root/Projects/youtube-summary-ai/src/layouts/Layout.astro", void 0);
//#endregion
export { $$Layout as t };
