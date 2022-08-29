import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useFindPath } from "../hooks/getPath";

const Navbar = (props) => {
    const [openSearch, setOpenSearch] = useState(false);
    const path = useFindPath();
    return (
        <nav
            className={
                props.reduce
                    ? "navbar navbar-default navbar-reduce navbar-expand-lg fixed-top"
                    : "navbar navbar-default navbar-trans navbar-expand-lg fixed-top"
            }
        >
            <div className="container">
                <button
                    className="navbar-toggler collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarDefault"
                    aria-controls="navbarDefault"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <a className="navbar-brand text-brand" href="index.html">
                    Buy<span className="color-b">Estate</span>
                </a>

                <div
                    className="navbar-collapse collapse justify-content-center align-items-center"
                    id="navbarDefault"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                to={"/"}
                                className={
                                    path === "/"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                to={"/about"}
                                className={
                                    path === "/about"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link " href="property-grid.html">
                                Properties
                            </a>
                        </li>

                        <li className="nav-item">
                            <Link to={"/register"} className="btn btn-register">
                                Register
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to={"/login"} className="btn btn-register">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>

                <button
                    type="button"
                    className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo01"
                    onClick={() => setOpenSearch(true)}
                >
                    <i className="bi bi-search"></i>
                </button>
            </div>
            <SearchBar isOpen={openSearch} setOpen={setOpenSearch} />
        </nav>
    );
};

export default Navbar;
