import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import empty from "is-empty";
import SearchBar from "./SearchBar";
import { useFindPath } from "../hooks/getPath";
import NavCTA from "./NavCTA";
import Profile from "./Profile";

const Navbar = (props) => {
    const { user } = useSelector((state) => state.auth);
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
                <Link to={"/"} className="navbar-brand text-brand">
                    Buy<span className="color-b">Estate</span>
                </Link>

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
                            <Link
                                to={"/properties"}
                                className={
                                    path === "/properties"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                Properties
                            </Link>
                        </li>

                        {!empty(user) ? <Profile /> : <NavCTA />}
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
