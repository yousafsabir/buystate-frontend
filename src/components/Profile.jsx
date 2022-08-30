import React from "react";
import { useSelector } from "react-redux/es/exports";
import { BsPersonCircle } from "react-icons/bs";

const Profile = () => {
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
                    Blog Single
                </a>
                <a className="dropdown-item " href="agents-grid.html">
                    Agents Grid
                </a>
                <a className="dropdown-item " href="agent-single.html">
                    Agent Single
                </a>
            </div>
        </li>
    );
};

export default Profile;
