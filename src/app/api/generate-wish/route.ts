import { NextResponse } from "next/server";

// This is a template for integrating a real AI service (e.g., Gemini, OpenAI)
// In a production app, you would use an API key stored in environment variables.

export async function POST(req: Request) {
  try {
    const { relation } = await req.json();

    if (!relation) {
      return NextResponse.json({ error: "Relation is required" }, { status: 400 });
    }

    // MOCK AI LOGIC (Replace with your preferred AI SDK)
    /*
    const response = await aiClient.generate({
      prompt: `Create a poetic and futuristic New Year 2026 greeting for a ${relation}.`,
    });
    const wish = response.text;
    */

    const mockWishes: Record<string, string[]> = {
      Friend: [
        "May our digital and physical worlds align for a spectacular 2026.",
        "To another year of breaking the simulation and making real memories.",
      ],
      Partner: [
        "Our love is the only constant in an ever-changing 2026.",
        "Walking into the future with you is my only resolution.",
      ],
      Family: [
        "Roots deep as time, love bright as the 2026 dawn.",
        "Home is wherever we are together in this new year.",
      ],
      Colleague: [
        "Synchronizing our goals for a high-performance 2026.",
        "May your productivity be as infinite as the new year's potential.",
      ]
    };

    const options = mockWishes[relation] || ["Happy New Year 2026!"];
    const randomWish = options[Math.floor(Math.random() * options.length)];

    // Simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ wish: randomWish });
  } catch (error) {
    console.error("AI Generation Error:", error);
    return NextResponse.json({ error: "Failed to generate wish" }, { status: 500 });
  }
}
