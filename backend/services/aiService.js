const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENAI_API_KEY);

const generateMedicalQuiz = async (organ, difficulty) => {
    // Ensuring model compatibility
    const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        generationConfig: {
            responseMimeType: "application/json",
        }
    });

    const prompt = `Generate exactly 5 multiple-choice medical questions about ${organ} at ${difficulty} level.
    Return a JSON array of objects with this structure:
    [
        {
            "question": "The question text",
            "options": ["Option A", "Option B", "Option C", "Option D"],
            "correctAnswer": "The exact matching text of the correct option",
            "explanation": "Detailed explanation of why the answer is correct and others are wrong"
        }
    ]`;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        
        // Robust JSON parsing
        try {
            return JSON.parse(text);
        } catch (parseError) {
            console.error("JSON Parsing Error from AI:", parseError);
            const cleanText = text.replace(/```json/g, "").replace(/```/g, "").trim();
            return JSON.parse(cleanText);
        }
    } catch (error) {
        console.error("AI Quiz Generation Error:", error);
        throw new Error(`AI Pulse Failure: ${error.message}`);
    }
};

const generateExplanation = async (question, correctAnswer, userAnswer) => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Medical Question: ${question}
    Correct Answer: ${correctAnswer}
    User Answer: ${userAnswer}

    Explain why the correct answer is right and why the user's answer was incorrect (if applicable) in professional medical terms.`;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("AI Explanation Error:", error);
        throw new Error("Failed to generate explanation");
    }
};

module.exports = {
    generateMedicalQuiz,
    generateExplanation
};
