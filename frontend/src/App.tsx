import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Simulation from './pages/Simulation';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/simulation" element={<Simulation />} />
      {/* Fallback to landing */}
      <Route path="*" element={<Landing />} />
    </Routes>
  );
}

export default App;
