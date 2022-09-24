import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <section className="section-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            <div className="widget-a">
                                <div className="w-header-a">
                                    <h3 className="w-title-a text-brand">
                                        Buy
                                        <span className="color-b">Estate</span>
                                    </h3>
                                </div>
                                <div className="w-body-a">
                                    <p className="w-text-a color-text-a">
                                        We are specialists in the prime
                                        residential sales and rentals property
                                        markets. We are trusted implicitly by
                                        our customers, from private individuals
                                        and corporations. We will find our
                                        clients the luxury property for sale or
                                        rental that they demand and desire.
                                    </p>
                                </div>
                                <div className="w-footer-a">
                                    <ul className="list-unstyled">
                                        <li className="color-a">
                                            <span className="color-text-a">
                                                Phone .
                                            </span>{" "}
                                            +92 345 6789012
                                        </li>
                                        <li className="color-a">
                                            <span className="color-text-a">
                                                Email .
                                            </span>{" "}
                                            myousafdev@gmail.com
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 section-md-t3">
                            <div className="widget-a">
                                <div className="w-header-a">
                                    <h3 className="w-title-a text-brand">
                                        The Company
                                    </h3>
                                </div>
                                <div className="w-body-a">
                                    <div className="w-body-a">
                                        <ul className="list-unstyled">
                                            <li className="item-list-a">
                                                <i className="bi bi-chevron-right"></i>{" "}
                                                <a href="#for-backtotop">
                                                    Site Map
                                                </a>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="bi bi-chevron-right"></i>{" "}
                                                <a href="#for-backtotop">
                                                    Legal
                                                </a>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="bi bi-chevron-right"></i>{" "}
                                                <a href="#for-backtotop">
                                                    Agent Admin
                                                </a>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="bi bi-chevron-right"></i>{" "}
                                                <a href="#for-backtotop">
                                                    Careers
                                                </a>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="bi bi-chevron-right"></i>{" "}
                                                <a href="#for-backtotop">
                                                    Affiliate
                                                </a>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="bi bi-chevron-right"></i>{" "}
                                                <a href="#for-backtotop">
                                                    Privacy Policy
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 section-md-t3">
                            <div className="widget-a">
                                <div className="w-header-a">
                                    <h3 className="w-title-a text-brand">
                                        International sites
                                    </h3>
                                </div>
                                <div className="w-body-a">
                                    <ul className="list-unstyled">
                                        <li className="item-list-a">
                                            <i className="bi bi-chevron-right"></i>{" "}
                                            <a href="#for-backtotop">
                                                Venezuela
                                            </a>
                                        </li>
                                        <li className="item-list-a">
                                            <i className="bi bi-chevron-right"></i>{" "}
                                            <a href="#for-backtotop">China</a>
                                        </li>
                                        <li className="item-list-a">
                                            <i className="bi bi-chevron-right"></i>{" "}
                                            <a href="#for-backtotop">
                                                Hong Kong
                                            </a>
                                        </li>
                                        <li className="item-list-a">
                                            <i className="bi bi-chevron-right"></i>{" "}
                                            <a href="#for-backtotop">
                                                Argentina
                                            </a>
                                        </li>
                                        <li className="item-list-a">
                                            <i className="bi bi-chevron-right"></i>{" "}
                                            <a href="#for-backtotop">
                                                Singapore
                                            </a>
                                        </li>
                                        <li className="item-list-a">
                                            <i className="bi bi-chevron-right"></i>{" "}
                                            <a href="#for-backtotop">
                                                Philippines
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="nav-footer">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="/properties">Properties</Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="/blog">Blog</Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className="socials-a">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a
                                            href="https://www.linkedin.com/in/yousafsabir"
                                            target={"_blank"}
                                        >
                                            <i
                                                className="bi bi-linkedin"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a
                                            href="https://www.twitter.com/yousafsabir7"
                                            target={"_blank"}
                                        >
                                            <i
                                                className="bi bi-twitter"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a
                                            href="https://www.instagram.com/yousafsabir7"
                                            target={"_blank"}
                                        >
                                            <i
                                                className="bi bi-instagram"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="copyright-footer">
                                <p className="copyright color-text-a">
                                    &copy; Copyright {year}{" "}
                                    <span className="color-a">BuyEstate</span>{" "}
                                    All Rights Reserved.
                                </p>
                            </div>
                            <div className="credits">
                                UI from{" "}
                                <span className="color-a">
                                    <a
                                        href="https://bootstrapmade.com/real-estate-agency-bootstrap-template/"
                                        target={"_blank"}
                                    >
                                        BootstrapMade
                                    </a>
                                </span>
                                <br />
                                Developed with 🔥 & 💖 by{" "}
                                <span className="color-a">M.Yousaf</span>
                                <br />
                                in <span className="color-a">
                                    Hackathon
                                </span> at{" "}
                                <span className="color-a">SMIT Labs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
