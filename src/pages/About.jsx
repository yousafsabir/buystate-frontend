import React from "react";
import SlideAbout1 from "../assets/img/slide-about-1.jpg";
import About2 from "../assets/img/about-2.jpg";
import Agent2 from "../assets/img/agent-2.jpg";
import Agent3 from "../assets/img/agent-3.jpg";
import Agent6 from "../assets/img/agent-6.jpg";

const About = () => {
    return (
        <div>
            <div id="for-backtotop"></div>
            <main id="main">
                {/* ------------ */}
                {/* Intro Single */}
                {/* ------------ */}
                <section className="intro-single">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-8">
                                <div className="title-single-box">
                                    <h1 className="title-single">
                                        We Help You Find Your Dream Place
                                    </h1>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                                <nav
                                    aria-label="breadcrumb"
                                    className="breadcrumb-box d-flex justify-content-lg-end"
                                >
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#">Home</a>
                                        </li>
                                        <li
                                            className="breadcrumb-item active"
                                            aria-current="page"
                                        >
                                            About
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ------------- */}
                {/* About Section */}
                {/* ------------- */}
                <section className="section-about">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 position-relative">
                                <div className="about-img-box">
                                    <img
                                        src={SlideAbout1}
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="sinse-box">
                                    <h3 className="sinse-title">
                                        Estate Agency
                                        <span></span>
                                        <br /> Since 2017
                                    </h3>
                                    <p>Art & Creative</p>
                                </div>
                            </div>
                            <div className="col-md-12 section-t8 position-relative">
                                <div className="row">
                                    <div className="col-md-6 col-lg-5">
                                        <img
                                            src={About2}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="col-lg-2  d-none d-lg-block position-relative"></div>
                                    <div className="col-md-6 col-lg-5 section-md-t3">
                                        <div className="title-box-d">
                                            <h3 className="title-d">
                                                Sed
                                                <span className="color-d">
                                                    porttitor
                                                </span>{" "}
                                                lectus
                                                <br /> nibh.
                                            </h3>
                                        </div>
                                        <p className="color-text-a">
                                            Mauris blandit aliquet elit, eget
                                            tincidunt nibh pulvinar a. Vivamus
                                            magna justo, lacinia eget
                                            consectetur sed, convallis at
                                            tellus. Praesent sapien massa,
                                            convallis a pellentesque nec,
                                            egestas non nisi. Vestibulum ante
                                            ipsum primis in faucibus orci luctus
                                            et ultrices posuere cubilia Curae;
                                            Donec velit neque, auctor sit amet
                                            aliquam vel, ullamcorper sit amet
                                            ligula.
                                        </p>
                                        <p className="color-text-a">
                                            Sed porttitor lectus nibh. Vivamus
                                            magna justo, lacinia eget
                                            consectetur sed, convallis at
                                            tellus. Mauris blandit aliquet elit,
                                            eget tincidunt nibh pulvinar a.
                                            Vivamus magna justo, lacinia eget
                                            consectetur sed, convallis at
                                            tellus.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ------------- */}
                {/* Intro Section */}
                {/* ------------- */}
                <section className="section-agents section-t8">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">
                                            Meet Our Team
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img
                                            src={Agent3}
                                            alt=""
                                            className="img-d img-fluid"
                                        />
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    <a
                                                        href="agent-single.html"
                                                        className="link-two"
                                                    >
                                                        Margaret Sotillo
                                                        <br /> Escala
                                                    </a>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                                Sed porttitor lectus nibh, Cras
                                                ultricies ligula sed magna
                                                dictum porta two.
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong> +54
                                                    356 945234
                                                </p>
                                                <p>
                                                    <strong>Email: </strong>{" "}
                                                    agents@example.com
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card-footer-d">
                                            <div className="socials-footer d-flex justify-content-center">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a
                                                            href="#"
                                                            className="link-one"
                                                        >
                                                            <i
                                                                className="bi bi-facebook"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a
                                                            href="#"
                                                            className="link-one"
                                                        >
                                                            <i
                                                                className="bi bi-twitter"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a
                                                            href="#"
                                                            className="link-one"
                                                        >
                                                            <i
                                                                className="bi bi-instagram"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a
                                                            href="#"
                                                            className="link-one"
                                                        >
                                                            <i
                                                                className="bi bi-linkedin"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img
                                            src={Agent6}
                                            alt=""
                                            className="img-d img-fluid"
                                        />
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    <a
                                                        href="agent-single.html"
                                                        className="link-two"
                                                    >
                                                        Stiven Spilver
                                                        <br /> Darw
                                                    </a>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                                Sed porttitor lectus nibh, Cras
                                                ultricies ligula sed magna
                                                dictum porta two.
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong> +54
                                                    356 945234
                                                </p>
                                                <p>
                                                    <strong>Email: </strong>{" "}
                                                    agents@example.com
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card-footer-d">
                                            <div className="socials-footer d-flex justify-content-center">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a
                                                            href="#"
                                                            className="link-one"
                                                        >
                                                            <i
                                                                className="bi bi-facebook"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a
                                                            href="#"
                                                            className="link-one"
                                                        >
                                                            <i
                                                                className="bi bi-twitter"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a
                                                            href="#"
                                                            className="link-one"
                                                        >
                                                            <i
                                                                className="bi bi-instagram"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a
                                                            href="#"
                                                            className="link-one"
                                                        >
                                                            <i
                                                                className="bi bi-linkedin"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a
                                                            href="#"
                                                            className="link-one"
                                                        >
                                                            <i
                                                                className="bi bi-dribbble"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img
                                            src={Agent2}
                                            alt=""
                                            className="img-d img-fluid"
                                        />
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    <a
                                                        href="agent-single.html"
                                                        className="link-two"
                                                    >
                                                        Emma Toledo
                                                        <br /> Cascada
                                                    </a>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                                Sed porttitor lectus nibh, Cras
                                                ultricies ligula sed magna
                                                dictum porta two.
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong> +54
                                                    356 945234
                                                </p>
                                                <p>
                                                    <strong>Email: </strong>{" "}
                                                    agents@example.com
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card-footer-d">
                                            <div className="socials-footer d-flex justify-content-center">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a
                                                            href="#"
                                                            className="link-one"
                                                        >
                                                            <i
                                                                className="bi bi-facebook"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a
                                                            href="#"
                                                            className="link-one"
                                                        >
                                                            <i
                                                                className="bi bi-twitter"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a
                                                            href="#"
                                                            className="link-one"
                                                        >
                                                            <i
                                                                className="bi bi-instagram"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a
                                                            href="#"
                                                            className="link-one"
                                                        >
                                                            <i
                                                                className="bi bi-linkedin"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a
                                                            href="#"
                                                            className="link-one"
                                                        >
                                                            <i
                                                                className="bi bi-dribbble"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default About;
