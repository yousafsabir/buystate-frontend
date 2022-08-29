import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";

function App() {
    const [preloader, setPreloader] = useState(true);
    window.addEventListener("load", () => {
        setPreloader(false);
    });
    return (
        <div className="App">
            <Home />
            {preloader && <div id="preloader"></div>}
        </div>
    );
}

export default App;
