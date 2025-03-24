import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Lecture from "./pages/Lecture";
import Lectureyoutube from "./pages/Lectureyoutube";
import Quiz from "./pages/Quiz";
import HomePage from "./pages/Home";
import Chatbot from "./components/Chatbot"; // Import AI Chatbot Component

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
        {/* Adding some space below the Navbar */}
        <br />
        <br />
        <br />

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/lecture" element={<Lecture />} />
          <Route path="/lecture/:search" element={<Lecture />} />
          <Route path="/lectureyoutube/:playlistId" element={<Lectureyoutube />} />
        </Routes>

        {/* AI Chatbot Component - Fixed at bottom-right */}
        <Chatbot />
      </Router>
    </div>
  );
}

export default App;

