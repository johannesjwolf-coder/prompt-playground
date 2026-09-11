// @ts-nocheck
import Anthropic from "@anthropic-ai/sdk";

export async function POST(request: Request) {
  try {
    console.log("API called!");
    const { prompt, temperature, maxTokens } = await request.json();
    
    console.log("Prompt:", prompt);
    console.log("API Key exists:", !!process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY);

    const client = new Anthropic({
      apiKey: process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY,
    });

    console.log("Calling Claude...");
    const message = await client.messages.create({
      model: "claude-3-5-sonnet-20250514",
      max_tokens: maxTokens || 1000,
      temperature: temperature || 0.7,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    console.log("Claude responded!");
    return Response.json({
      success: true,
      content: message.content[0].type === "text" ? message.content[0].text : "",
    });
  } catch (error) {
    console.error("Error in API:", error);
    return Response.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}