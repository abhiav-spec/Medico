import { create } from 'zustand';

interface Question {
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
    userAnswer?: string;
    isCorrect?: boolean;
}

interface QuizState {
    organ: string;
    difficulty: string;
    questions: Question[];
    currentQuestionIndex: number;
    score: number;
    isComplete: boolean;
    setQuiz: (organ: string, difficulty: string, questions: Question[]) => void;
    answerQuestion: (answer: string) => void;
    nextQuestion: () => void;
    resetQuiz: () => void;
}

export const useQuizStore = create<QuizState>((set) => ({
    organ: '',
    difficulty: '',
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    isComplete: false,
    setQuiz: (organ, difficulty, questions) => 
        set({ organ, difficulty, questions, currentQuestionIndex: 0, score: 0, isComplete: false }),
    answerQuestion: (answer) => set((state) => {
        const currentQuestion = state.questions[state.currentQuestionIndex];
        const isCorrect = answer === currentQuestion.correctAnswer;
        const updatedQuestions = [...state.questions];
        updatedQuestions[state.currentQuestionIndex] = {
            ...currentQuestion,
            userAnswer: answer,
            isCorrect
        };
        return {
            questions: updatedQuestions,
            score: isCorrect ? state.score + 1 : state.score
        };
    }),
    nextQuestion: () => set((state) => {
        if (state.currentQuestionIndex >= state.questions.length - 1) {
            return { isComplete: true };
        }
        return { currentQuestionIndex: state.currentQuestionIndex + 1 };
    }),
    resetQuiz: () => set({ 
        organ: '', 
        difficulty: '', 
        questions: [], 
        currentQuestionIndex: 0, 
        score: 0, 
        isComplete: false 
    }),
}));
