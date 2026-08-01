export const prerender = false;
import type { APIRoute } from 'astro';
import { getAIProvider } from '../../lib/ai/factory';
import { InMemoryUsageProvider } from '../../lib/usage/provider';
import { ValidationError, UsageLimitError, APIError } from '../../lib/errors';

const usageProvider = new InMemoryUsageProvider();

export const POST: APIRoute = async (context) => {
  try {
    const { userId } = context.locals.auth();
    
    if (!userId) {
      throw new APIError('Unauthorized', 401);
    }

    if (!(await usageProvider.canSummarize(userId))) {
      throw new UsageLimitError();
    }

    const { platform, input } = await context.request.json();
    if (!platform || !input) {
      throw new ValidationError('Missing platform or input');
    }

    const aiProvider = getAIProvider(platform);
    const summary = await aiProvider.summarize(input);
    
    await usageProvider.recordUsage(userId);
    
    return new Response(JSON.stringify({ summary }), { status: 200 });
  } catch (error) {
    if (error instanceof APIError) {
      return new Response(JSON.stringify({ error: error.message }), { status: error.statusCode });
    }
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
};
