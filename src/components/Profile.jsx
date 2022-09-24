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
            <span className="nav-link dropdown-toggle">Profile</span>
            <div className="dropdown-menu">
                <div className="dropdown-item ">
                    <BsPersonCircle style={{ fontSize: "1.35rem" }} />{" "}
                    {user?.fName}
                </div>
                <Link to={"/favourites"} className="dropdown-item">
                    Favourites
                </Link>
                <Link to={"/listaproperty"} className="dropdown-item">
                    List a Property
                </Link>
                <Link to={"/mylistings"} className="dropdown-item">
                    My Listings
                </Link>
                <button
                    className="btn btn-register"
                    style={{ marginInline: "1.125rem", marginTop: "0.75rem" }}
                    onClick={() => dispatch(logout())}
                >
                    Logout
                </button>
            </div>
        </li>
    );
};

export default Profile;
