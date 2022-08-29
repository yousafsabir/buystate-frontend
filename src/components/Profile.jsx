import React from "react";

const Profile = () => {
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
                Pages
            </a>
            <div className="dropdown-menu">
                <a className="dropdown-item " href="property-single.html">
                    Property Single
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
