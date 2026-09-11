import Anthropic from "@anthropic-ai/sdk";

export async function POST(request: Request) {
  try {
    const { prompt, temperature, maxTokens } = await request.json();

    const client = new Anthropic({
      apiKey: process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY,
    });

    const message = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: maxTokens || 1000,
      temperature: temperature || 0.7,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    return Response.json({
      success: true,
      content: message.content[0].type === "text" ? message.content[0].text : "",
    });
  } catch (error) {
    console.error("Error:", error);
    return Response.json(
      { success: false, error: "Failed to process prompt" },
      { status: 500 }
    );
  }
}