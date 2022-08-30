import React from "react";
import { Link } from "react-router-dom";

const NavCTA = () => {
    return (
        <>
            <li className="nav-item">
                <Link to={"/register"} className="btn btn-register">
                    Register
                </Link>
            </li>

            <li className="nav-item">
                <Link to={"/login"} className="btn btn-login">
                    Login
                </Link>
            </li>
        </>
    );
};

export default NavCTA;
