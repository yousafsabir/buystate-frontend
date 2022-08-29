import React from "react";

const BackToTop = (props) => {
    return (
        <a
            href="#for-backtotop"
            className={
                props.isActive
                    ? "active back-to-top d-flex align-items-center justify-content-center"
                    : "back-to-top d-flex align-items-center justify-content-center"
            }
            style={{ zIndex: 100 }}
        >
            <i className="bi bi-arrow-up-short"></i>
        </a>
    );
};

export default BackToTop;
