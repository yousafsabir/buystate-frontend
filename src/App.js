import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
    const [preloader, setPreloader] = useState(true);
    window.addEventListener("load", () => {
        setPreloader(false);
    });
    // activeOffset is related to window.scrollY
    const [activeOffset, setActiveOffset] = useState(false);
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            setActiveOffset(true);
        } else {
            setActiveOffset(false);
        }
    });
    return (
        <div className="App">
            <Navbar reduce={activeOffset} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
            <BackToTop isActive={activeOffset} />
            {preloader && <div id="preloader"></div>}
        </div>
    );
}

export default App;
