import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Simulation from './pages/Simulation';
import Quiz from './pages/Quiz';
import Notes from './pages/Notes';
import History from './pages/History';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/simulation" element={<Simulation />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/history" element={<History />} />
      {/* Fallback to landing */}
      <Route path="*" element={<Landing />} />
    </Routes>
  );
}

export default App;
