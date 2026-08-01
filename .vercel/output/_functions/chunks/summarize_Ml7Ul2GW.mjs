import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { GoogleGenerativeAI } from "@google/generative-ai";
//#region src/lib/ai/gemini.ts
var GeminiProvider = class {
	genAI;
	model;
	constructor(apiKey, modelName) {
		this.genAI = new GoogleGenerativeAI(apiKey);
		this.model = this.genAI.getGenerativeModel({ model: modelName });
	}
	async summarize(text) {
		const prompt = `Summarize the following text concisely: \n\n${text}`;
		return (await (await this.model.generateContent(prompt)).response).text();
	}
};
//#endregion
//#region src/lib/ai/factory.ts
function getAIProvider(platform) {
	return new GeminiProvider(void 0, void 0);
}
//#endregion
//#region src/lib/usage/provider.ts
var InMemoryUsageProvider = class {
	async canSummarize(userId) {
		return true;
	}
	async recordUsage(userId) {}
};
//#endregion
//#region src/lib/errors.ts
var APIError = class extends Error {
	message;
	statusCode;
	constructor(message, statusCode = 500) {
		super(message);
		this.message = message;
		this.statusCode = statusCode;
		this.name = "APIError";
	}
};
var ValidationError = class extends APIError {
	constructor(message) {
		super(message, 400);
		this.name = "ValidationError";
	}
};
var UsageLimitError = class extends APIError {
	constructor() {
		super("Usage limit reached", 429);
		this.name = "UsageLimitError";
	}
};
//#endregion
//#region src/pages/api/summarize.ts
var summarize_exports = /* @__PURE__ */ __exportAll({
	POST: () => POST,
	prerender: () => false
});
var usageProvider = new InMemoryUsageProvider();
var POST = async (context) => {
	try {
		const { userId } = context.locals.auth();
		if (!userId) throw new APIError("Unauthorized", 401);
		if (!await usageProvider.canSummarize(userId)) throw new UsageLimitError();
		const { platform, input } = await context.request.json();
		if (!platform || !input) throw new ValidationError("Missing platform or input");
		const summary = await getAIProvider(platform).summarize(input);
		await usageProvider.recordUsage(userId);
		return new Response(JSON.stringify({ summary }), { status: 200 });
	} catch (error) {
		if (error instanceof APIError) return new Response(JSON.stringify({ error: error.message }), { status: error.statusCode });
		return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
	}
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/summarize@_@ts
var page = () => summarize_exports;
//#endregion
export { page };
