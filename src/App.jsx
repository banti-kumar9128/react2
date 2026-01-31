import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./components/Home";
import Card from "./components/Card";
import About from "./components/About";
import Contact from "./components/Contect";
import Login from "./userlogin/Login";
import SignUp from "./userlogin/signUp";

function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
