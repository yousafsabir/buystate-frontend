import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { logout } from "../redux/slices/Auth";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";

const Profile = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    return (
        <li className="nav-item dropdown">
            <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                Profile
            </a>
            <div className="dropdown-menu">
                <a className="dropdown-item " href="property-single.html">
                    <BsPersonCircle style={{ fontSize: "1.35rem" }} />{" "}
                    {user?.fName}
                </a>
                <a className="dropdown-item " href="blog-single.html">
                    Favourites
                </a>
                <Link to={"/listaproperty"} className="dropdown-item">
                    List a Property
                </Link>
                <a className="dropdown-item " href="agent-single.html">
                    My Listings
                </a>
                <button
                    className="btn btn-register"
                    style={{ marginInline: "1.125rem" }}
                    onClick={() => dispatch(logout())}
                >
                    Logout
                </button>
            </div>
        </li>
    );
};

export default Profile;
