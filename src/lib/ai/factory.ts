import { GeminiProvider } from './gemini';
import type { AIProvider } from './provider';

export function getAIProvider(platform: string): AIProvider {
  // In the future, this can switch based on the platform.
  // For now, it defaults to Gemini.
  return new GeminiProvider(
    import.meta.env.GOOGLE_GENERATIVE_AI_API_KEY,
    import.meta.env.GOOGLE_AI_MODEL
  );
}
