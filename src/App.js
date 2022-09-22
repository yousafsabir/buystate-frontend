import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { getFavourites } from "./redux/slices/Property";
import "./App.css";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import ListAProperty from "./pages/ListAProperty";
import Login from "./pages/Login";
import MyListings from "./pages/MyListings";
import Properties from "./pages/Properties";
import PropertyDetail from "./pages/PropertyDetail";
import Register from "./pages/Register";

function App() {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const isMobile = window.innerWidth <= 1024 ? true : false;
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
    // dispatching for favourite properties
    useEffect(() => {
        const unsub = () => {
            if (user) dispatch(getFavourites());
        };
        return unsub;
    }, [user]);
    return (
        <div className="App">
            <Navbar reduce={activeOffset} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/properties" element={<Properties />} />
                <Route path="/mylistings" element={<MyListings />} />
                <Route
                    path="/propertydetail/:id"
                    element={<PropertyDetail />}
                />
                <Route path="/listaproperty" element={<ListAProperty />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
            <BackToTop isActive={activeOffset} />
            {!isMobile && preloader && <div id="preloader"></div>}
        </div>
    );
}

export default App;
