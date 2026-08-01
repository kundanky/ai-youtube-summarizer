import { GoogleGenerativeAI } from "@google/generative-ai";
import type { AIProvider } from "./provider";

export class GeminiProvider implements AIProvider {
  private genAI: GoogleGenerativeAI;
  private model: any;

  constructor(apiKey: string, modelName: string) {
    this.genAI = new GoogleGenerativeAI(apiKey);
    const model = modelName && modelName.trim() !== '' ? modelName : 'gemini-2.5-flash';
    this.model = this.genAI.getGenerativeModel({ model });
  }

  async summarize(text: string): Promise<string> {
    const prompt = `Summarize the following text concisely: \n\n${text}`;
    const result = await this.model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  }
}
