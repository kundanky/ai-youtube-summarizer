export const prerender = false;
import type { APIRoute } from 'astro';
import { getAIProvider } from '../../lib/ai/factory';
import { InMemoryUsageProvider } from '../../lib/usage/provider';
import { ValidationError, UsageLimitError, APIError } from '../../lib/errors';

const usageProvider = new InMemoryUsageProvider();

export const POST: APIRoute = async (context) => {
  try {
    console.log("Summarize API received request");
    const { userId } = context.locals.auth();

    if (!(await usageProvider.canSummarize(userId))) {
      throw new UsageLimitError();
    }

    const { platform, input } = await context.request.json();
    console.log(`Platform: ${platform}, Input length: ${input?.length}`);
    if (!platform || !input) {
      throw new ValidationError('Missing platform or input');
    }

    const aiProvider = getAIProvider(platform);
    console.log("Calling Gemini API...");
    const summary = await aiProvider.summarize(input);
    console.log("Gemini API call successful");
    
    await usageProvider.recordUsage(userId);
    
    return new Response(JSON.stringify({ summary }), { status: 200 });
  } catch (error: any) {
    console.error("Summarize API Error:", error);
    if (error instanceof APIError) {
      return new Response(JSON.stringify({ error: error.message }), { status: error.statusCode });
    }
    return new Response(JSON.stringify({ error: error.message || 'Internal Server Error' }), { status: 500 });
  }
};
