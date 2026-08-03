import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as defineScriptVars, P as createAstro, S as addAttribute, b as maybeRenderHead, c as renderComponent, g as renderTemplate, n as mergeSlots, p as renderSlot } from "./server_BygG88gc.mjs";
import { t as createComponent } from "./astro-component_DIBu_Rjc.mjs";
import { t as renderScript } from "./global_zEN8GZ1j.mjs";
import "./compiler_I56Hg_PD.mjs";
import { t as $$Layout } from "./Layout_oirY00NO.mjs";
import { t as generateSafeId } from "./internal_wryDJWcy.mjs";
//#region node_modules/@clerk/astro/components/control/ShowCSR.astro
createAstro("https://example.com");
var $$ShowCSR = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ShowCSR;
	const { when, class: className } = Astro.props;
	const isStringWhen = typeof when === "string";
	const whenCondition = isStringWhen ? when : null;
	const role = !isStringWhen && typeof when === "object" ? when.role : void 0;
	const permission = !isStringWhen && typeof when === "object" ? when.permission : void 0;
	const feature = !isStringWhen && typeof when === "object" ? when.feature : void 0;
	const plan = !isStringWhen && typeof when === "object" ? when.plan : void 0;
	return renderTemplate`${renderComponent($$result, "clerk-show", "clerk-show", {
		"data-when": whenCondition,
		"data-role": role,
		"data-permission": permission,
		"data-feature": feature,
		"data-plan": plan,
		"class": className
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div hidden data-clerk-control-slot-default>${renderSlot($$result, $$slots["default"])}</div><div hidden data-clerk-control-slot-fallback>${renderSlot($$result, $$slots["fallback"])}</div>` })}${renderScript($$result, "/data/data/com.termux/files/home/Projects/youtube-summary-ai/node_modules/@clerk/astro/components/control/ShowCSR.astro?astro&type=script&index=0&lang.ts")}`;
}, "/data/data/com.termux/files/home/Projects/youtube-summary-ai/node_modules/@clerk/astro/components/control/ShowCSR.astro", void 0);
//#endregion
//#region node_modules/@clerk/astro/components/control/ShowSSR.astro
createAstro("https://example.com");
var $$ShowSSR = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ShowSSR;
	const { has, userId } = Astro.locals.auth();
	const { when } = Astro.props;
	const showContent = (() => {
		if (when === "signed-in") return !!userId;
		if (when === "signed-out") return !userId;
		if (typeof when === "function") return !!userId && when(has);
		if (typeof when === "object" && when !== null) {
			if (!userId) return false;
			return has(when);
		}
		return !!userId;
	})();
	const hasShowFallback = Astro.slots.has("show-fallback");
	return renderTemplate`${showContent ? renderTemplate`${renderSlot($$result, $$slots["default"])}` : hasShowFallback ? renderTemplate`${renderSlot($$result, $$slots["show-fallback"])}` : renderTemplate`${renderSlot($$result, $$slots["fallback"])}`}`;
}, "/data/data/com.termux/files/home/Projects/youtube-summary-ai/node_modules/@clerk/astro/components/control/ShowSSR.astro", void 0);
//#endregion
//#region \0virtual:@clerk/astro/config
function isStaticOutput(forceStatic) {
	if (forceStatic !== void 0) return forceStatic;
	return false;
}
//#endregion
//#region node_modules/@clerk/astro/components/control/Show.astro
createAstro("https://example.com");
var $$Show = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Show;
	const { isStatic, when, ...rest } = Astro.props;
	if (typeof when === "undefined") throw new Error("@clerk/astro: <Show /> requires a `when` prop.");
	const props = {
		...rest,
		when
	};
	const ShowComponent = (isStatic !== void 0 ? isStaticOutput(isStatic) : !Astro.locals?.auth) ? $$ShowCSR : $$ShowSSR;
	const hasShowFallback = Astro.slots.has("show-fallback");
	return renderTemplate`${renderComponent($$result, "ShowComponent", ShowComponent, { ...props }, mergeSlots({ "default": ($$result) => renderTemplate`${renderSlot($$result, $$slots["default"])}` }, hasShowFallback ? { "show-fallback": ($$result) => renderTemplate`${renderSlot($$result, $$slots["show-fallback"])}` } : { "fallback": ($$result) => renderTemplate`${renderSlot($$result, $$slots["fallback"])}` }))}`;
}, "/data/data/com.termux/files/home/Projects/youtube-summary-ai/node_modules/@clerk/astro/components/control/Show.astro", void 0);
//#endregion
//#region node_modules/@clerk/astro/components/interactive/InternalUIComponentRenderer.astro
createAstro("https://example.com");
var $$InternalUIComponentRenderer = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$InternalUIComponentRenderer;
	const { component, id, ...props } = Astro.props;
	const safeId = id || generateSafeId();
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`clerk-${component}-${safeId}`, "data-clerk-id")}></div><script>(function(){${defineScriptVars({
		props,
		component,
		safeId
	})}
  /**
   * Store the id and the props for the Astro component in order to mount the correct UI component once clerk is loaded.
   * The above is handled by \`mountAllClerkAstroJSComponents\`.
   */
  const setOrCreatePropMap = ({ category, id, props }) => {
    if (!window.__astro_clerk_component_props) {
      window.__astro_clerk_component_props = new Map();
    }

    if (!window.__astro_clerk_component_props.has(category)) {
      const _ = new Map();
      _.set(id, props);
      window.__astro_clerk_component_props.set(category, _);
    }

    window.__astro_clerk_component_props.get(category)?.set(id, props);
  };

  setOrCreatePropMap({
    category: component,
    id: \`clerk-\${component}-\${safeId}\`,
    props,
  });
})();<\/script>`;
}, "/data/data/com.termux/files/home/Projects/youtube-summary-ai/node_modules/@clerk/astro/components/interactive/InternalUIComponentRenderer.astro", void 0);
//#endregion
//#region node_modules/@clerk/astro/components/interactive/UserButton/UserButton.astro
createAstro("https://example.com");
var $$UserButton = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$UserButton;
	return renderTemplate`${renderComponent($$result, "InternalUIComponentRenderer", $$InternalUIComponentRenderer, {
		...Astro.props,
		"component": "user-button"
	})}${renderSlot($$result, $$slots["default"])}`;
}, "/data/data/com.termux/files/home/Projects/youtube-summary-ai/node_modules/@clerk/astro/components/interactive/UserButton/UserButton.astro", void 0);
//#endregion
//#region node_modules/@clerk/astro/components/interactive/UserButton/MenuItemRenderer.astro
createAstro("https://example.com");
var $$MenuItemRenderer = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$MenuItemRenderer;
	const { label, href, open, clickIdentifier, parent } = Astro2.props;
	let labelIcon = "";
	if (Astro2.slots.has("label-icon")) labelIcon = await Astro2.slots.render("label-icon");
	return renderTemplate`<script>(function(){${defineScriptVars({
		label,
		href,
		open,
		clickIdentifier,
		labelIcon,
		isDevMode: false,
		parent
	})}
  const parentElement = document.currentScript.parentElement;

  // We used a web component in the \`<UserButton.MenuItems>\` component.
  const hasParentMenuItem = parentElement.tagName.toLowerCase() === 'clerk-user-button-menu-items';
  if (!hasParentMenuItem) {
    if (isDevMode) {
      throw new Error(
        \`Clerk: <UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored.\`,
      );
    }
  } else {
    // Get the user button map from window that we set in the \`<InternalUIComponentRenderer />\`.
    const userButtonComponentMap = window.__astro_clerk_component_props?.get('user-button');

    let userButton;
    if (parent) {
      userButton = document.querySelector(\`[data-clerk-id="clerk-user-button-\${parent}"]\`);
    } else {
      userButton = document.querySelector('[data-clerk-id^="clerk-user-button"]');
    }

    const safeId = userButton?.getAttribute('data-clerk-id');
    if (userButtonComponentMap && safeId) {
      const currentOptions = userButtonComponentMap.get(safeId);

      const reorderItemsLabels = ['manageAccount', 'signOut'];
      const isReorderItem = reorderItemsLabels.includes(label);

      let newMenuItem = {
        label,
      };

      if (!isReorderItem) {
        newMenuItem = {
          ...newMenuItem,
          mountIcon: el => {
            el.innerHTML = labelIcon;
          },
          unmountIcon: () => {
            /* What to clean up? */
          },
        };

        if (href) {
          newMenuItem.href = href;
        } else if (open) {
          newMenuItem.open = open.startsWith('/') ? open : \`/\${open}\`;
        } else if (clickIdentifier) {
          const clickEvent = new CustomEvent('clerk:menu-item-click', { detail: clickIdentifier });
          newMenuItem.onClick = () => {
            document.dispatchEvent(clickEvent);
          };
        }
      }

      userButtonComponentMap.set(safeId, {
        ...currentOptions,
        customMenuItems: [...(currentOptions?.customMenuItems ?? []), newMenuItem],
      });
    }
  }
})();<\/script>`;
}, "/data/data/com.termux/files/home/Projects/youtube-summary-ai/node_modules/@clerk/astro/components/interactive/UserButton/MenuItemRenderer.astro", void 0);
//#endregion
//#region node_modules/@clerk/astro/components/interactive/UserButton/UserButtonLink.astro
createAstro("https://example.com");
var $$UserButtonLink = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$UserButtonLink;
	const { label, href, parent } = Astro.props;
	return renderTemplate`${renderComponent($$result, "MenuItemRenderer", $$MenuItemRenderer, {
		"label": label,
		"href": href,
		"parent": parent
	}, { "label-icon": ($$result) => renderTemplate`${renderSlot($$result, $$slots["label-icon"])}` })}`;
}, "/data/data/com.termux/files/home/Projects/youtube-summary-ai/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonLink.astro", void 0);
//#endregion
//#region node_modules/@clerk/astro/components/interactive/UserButton/UserButtonAction.astro
createAstro("https://example.com");
var $$UserButtonAction = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$UserButtonAction;
	const { label, open, clickIdentifier, parent } = Astro.props;
	return renderTemplate`${renderComponent($$result, "MenuItemRenderer", $$MenuItemRenderer, {
		"label": label,
		"open": open,
		"clickIdentifier": clickIdentifier,
		"parent": parent
	}, { "label-icon": ($$result) => renderTemplate`${renderSlot($$result, $$slots["label-icon"])}` })}`;
}, "/data/data/com.termux/files/home/Projects/youtube-summary-ai/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonAction.astro", void 0);
//#endregion
//#region node_modules/@clerk/astro/components/interactive/UserButton/UserButtonMenuItems.astro
var $$UserButtonMenuItems = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "clerk-user-button-menu-items", "clerk-user-button-menu-items", {}, { "default": ($$result) => renderTemplate`${renderSlot($$result, $$slots["default"])}` })}${renderScript($$result, "/data/data/com.termux/files/home/Projects/youtube-summary-ai/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonMenuItems.astro?astro&type=script&index=0&lang.ts")}`;
}, "/data/data/com.termux/files/home/Projects/youtube-summary-ai/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonMenuItems.astro", void 0);
//#endregion
//#region node_modules/@clerk/astro/components/interactive/UserButton/UserButtonUserProfilePage.astro
createAstro("https://example.com");
var $$UserButtonUserProfilePage = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$UserButtonUserProfilePage;
	const { url, label, parent } = Astro.props;
	let labelIcon = "";
	let content = "";
	if (Astro.slots.has("label-icon")) labelIcon = await Astro.slots.render("label-icon");
	if (Astro.slots.has("default")) content = await Astro.slots.render("default");
	return renderTemplate`<script>(function(){${defineScriptVars({
		url,
		label,
		content,
		labelIcon,
		parent
	})}
  // Get the user button map from window that we set in the \`<InternalUIComponentRenderer />\`.
  const userButtonComponentMap = window.__astro_clerk_component_props.get('user-button');

  let userButton;
  if (parent) {
    userButton = document.querySelector(\`[data-clerk-id="clerk-user-button-\${parent}"]\`);
  } else {
    userButton = document.querySelector('[data-clerk-id^="clerk-user-button"]');
  }

  const safeId = userButton.getAttribute('data-clerk-id');
  const currentOptions = userButtonComponentMap.get(safeId);

  const newCustomPage = {
    label,
    url,
    mountIcon: el => {
      el.innerHTML = labelIcon;
    },
    unmountIcon: () => {
      /* What to clean up? */
    },
    mount: el => {
      el.innerHTML = content;
    },
    unmount: () => {
      /* What to clean up? */
    },
  };

  userButtonComponentMap.set(safeId, {
    ...currentOptions,
    userProfileProps: {
      customPages: [...(currentOptions?.userProfileProps?.customPages ?? []), newCustomPage],
    },
  });
})();<\/script>`;
}, "/data/data/com.termux/files/home/Projects/youtube-summary-ai/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonUserProfilePage.astro", void 0);
//#endregion
//#region node_modules/@clerk/astro/components/interactive/UserButton/index.ts
var UserButton = Object.assign($$UserButton, {
	MenuItems: $$UserButtonMenuItems,
	Link: $$UserButtonLink,
	Action: $$UserButtonAction,
	UserProfilePage: $$UserButtonUserProfilePage
});
//#endregion
//#region src/pages/dashboard.astro
var dashboard_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Dashboard,
	file: () => $$file,
	url: () => $$url
});
var $$Dashboard = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="max-w-4xl mx-auto p-6"><div class="flex items-center justify-between mb-8"><h1 class="text-3xl font-bold">Dashboard</h1>${renderComponent($$result, "Show", $$Show, { "when": "signed-in" }, { "default": ($$result) => renderTemplate`<div class="flex items-center gap-4">${renderComponent($$result, "UserButton", UserButton, {})}</div>` })}</div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><!-- Plan Placeholder --><section class="p-6 border rounded-lg"><h2 class="text-xl font-semibold mb-2">Current Plan</h2><p class="text-gray-600">Free Tier</p></section><!-- Usage Placeholder --><section class="p-6 border rounded-lg"><h2 class="text-xl font-semibold mb-2">Usage</h2><p class="text-gray-600">Usage tracking will be available in Phase 7.</p></section></div><!-- Recent Summaries Placeholder --><section class="mt-8 p-6 border rounded-lg"><h2 class="text-xl font-semibold mb-4">Recent Summaries</h2><p class="text-gray-600">Usage tracking will be available in Phase 7.</p></section></main>` })}`;
}, "/data/data/com.termux/files/home/Projects/youtube-summary-ai/src/pages/dashboard.astro", void 0);
var $$file = "/data/data/com.termux/files/home/Projects/youtube-summary-ai/src/pages/dashboard.astro";
var $$url = "/dashboard";
//#endregion
//#region \0virtual:astro:page:src/pages/dashboard@_@astro
var page = () => dashboard_exports;
//#endregion
export { page };
