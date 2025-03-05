import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignupPage from "./pages/SignupPage";
import SignupForm from "./pages/SignupForm";
import SigninPage from "./pages/SigninPage";
import SigninForm from "./pages/SigninForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/signup-form" element={<SignupForm />} />
        <Route path="/Signin" element={<SigninPage />} />
        <Route path="/signin-form" element={<SigninForm />} />
      </Routes>
    </Router>
  );
}

export default App;
