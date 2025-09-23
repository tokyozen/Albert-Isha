
import { GoogleGenAI, Type } from "@google/genai";
import { MenuCourse } from '../types';

if (!import.meta.env.VITE_GEMINI_API_KEY) {
  throw new Error("VITE_GEMINI_API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

const menuSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      course: {
        type: Type.STRING,
        description: 'The course name (e.g., Appetizers, Main Course, Desserts).',
      },
      items: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            name: {
              type: Type.STRING,
              description: 'The name of the dish.',
            },
            description: {
              type: Type.STRING,
              description: 'A brief, appealing description of the dish.',
            },
          },
        },
      },
    },
  },
};

export const generateWeddingMenu = async (preferences: string): Promise<MenuCourse[]> => {
  try {
    const prompt = `Generate a sophisticated 3-course wedding menu (Appetizer, Main Course, Dessert) for a celebration. Incorporate the following preferences: "${preferences}".`;
    
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: menuSchema,
      },
    });

    const jsonText = response.text.trim();
    const menuData = JSON.parse(jsonText);

    if (!Array.isArray(menuData)) {
      throw new Error("Invalid menu format received from API");
    }

    return menuData as MenuCourse[];
  } catch (error) {
    console.error("Error generating wedding menu:", error);
    throw new Error("Failed to communicate with the AI to generate a menu.");
  }
};

export const generateWeddingToast = async (relationship: string): Promise<string> => {
  try {
    const prompt = `You are a helpful wedding guest assistant. Write a short, heartfelt, and slightly humorous wedding toast for a couple named Albert and Isha. My relationship to them is: "${relationship}". Keep the toast under 100 words.`;
    
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
       config: {
        thinkingConfig: { thinkingBudget: 0 } // For low latency
      }
    });

    return response.text.trim();
  } catch (error) {
    console.error("Error generating wedding toast:", error);
    throw new Error("Failed to communicate with the AI to generate a toast.");
  }
};
