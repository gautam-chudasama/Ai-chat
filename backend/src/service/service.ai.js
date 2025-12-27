const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({});

async function generateResponse(chatHistory) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: chatHistory,
    config: {
      systemInstruction:
        "Just give responses in text format only and in short sentences.",
    },
  });
  return response.text;
}

module.exports = generateResponse;
