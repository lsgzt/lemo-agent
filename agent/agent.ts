import { defineAgent } from "eve";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";

const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

export default defineAgent({
  model: openrouter("z-ai/glm-5.2:free"),
  // Required when using a direct provider model (not AI Gateway)
  modelContextWindowTokens: 256_000,
});