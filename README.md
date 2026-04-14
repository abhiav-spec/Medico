# Medico Simulator 🩺

Medico Simulator is a production-level, AI-powered medical learning platform designed for clinical students and professionals. It combines Google Gemini AI with voice interaction to provide deeply personalized and interactive medical training.

## 🚀 Key Features

- **AI-Generated Simulations**: High-yield MCQs generated in real-time based on organ focus (Heart, Lungs, Brain) and difficulty.
- **Voice-First Interaction**: Answer scenarios via voice and listen to detailed AI medical explanations (Web Speech API).
- **Performance Dashboard**: Track accuracy and study trends with interactive Recharts visualizations.
- **Structured Knowledge Base**: AI-generated explanations are archived into a searchable clinical notes library.
- **Premium UI**: Minimal, modern design inspired by Stripe/Linear with smooth Framer Motion animations.

## 🛠 Tech Stack

- **Frontend**: Next.js (App Router), TypeScript, Tailwind CSS, Zustand, React Query, Framer Motion, Recharts.
- **Backend**: Node.js, Express, MongoDB (Mongoose), JWT Auth.
- **AI**: Google Gemini (GenAI).
- **DevOps**: Docker, Docker Compose.

## 🛠 Setup & Installation

### Prerequisites
- Node.js (v18+)
- MongoDB (Atlas or Local)
- Google GenAI API Key

### Local Setup

1. **Clone and Install Backend**:
   ```bash
   cd backend
   npm install
   ```

2. **Clone and Install Frontend**:
   ```bash
   cd frontend
   npm install
   ```

3. **Environment Config**:
   Create a `.env` in the root with your API keys (refer to provided `.env` template).

4. **Run Development Mode**:
   - Backend: `cd backend && npm run dev`
   - Frontend: `cd frontend && npm run dev`

### Docker Setup

```bash
docker-compose up --build
```

The frontend will be available at `http://localhost:3001` and backend at `http://localhost:3000`.

## 🧠 AI Prompt Strategy

- **Quiz Generation**: Uses structured JSON prompting to ensure consistent MCQ formatting for the frontend engine.
- **Explanations**: Contextual medical reasoning provided for every correct and incorrect option.

---
Built with ❤️ by Medico Team.
