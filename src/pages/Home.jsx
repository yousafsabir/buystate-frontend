import React, { useEffect, useState, useRef } from "react";
import Property6 from "../assets/img/property-6.jpg";
import Property3 from "../assets/img/property-3.jpg";
import Property7 from "../assets/img/property-7.jpg";
import Property10 from "../assets/img/property-10.jpg";
import Agent4 from "../assets/img/agent-4.jpg";
import Agent1 from "../assets/img/agent-1.jpg";
import Agent5 from "../assets/img/agent-5.jpg";
import Post2 from "../assets/img/post-2.jpg";
import Post5 from "../assets/img/post-5.jpg";
import Post7 from "../assets/img/post-7.jpg";
import Post3 from "../assets/img/post-3.jpg";
import Testimonial1 from "../assets/img/testimonial-1.jpg";
import Testimonial2 from "../assets/img/testimonial-2.jpg";
import MiniTestimonial1 from "../assets/img/mini-testimonial-1.jpg";
import MiniTestimonial2 from "../assets/img/mini-testimonial-2.jpg";
import Slide1 from "../assets/img/slide-1.jpg";
import Slide2 from "../assets/img/slide-2.jpg";
import Slide3 from "../assets/img/slide-3.jpg";
import { select, onscroll } from "../assets/js/hooks";
import Navbar from "../components/Navbar";
import BackToTop from "../components/BackToTop";

const Home = () => {
    // activeOffset is related to window.scrollY
    const [activeOffset, setActiveOffset] = useState(false);
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            setActiveOffset(true);
        } else {
            setActiveOffset(false);
        }
    });
    return (
        <div>
            <Navbar reduce={activeOffset} />
            <div id="for-backtotop"></div>
            <div
                className="intro intro-carousel swiper position-relative"
                id="home-header"
            >
                <div className="swiper-wrapper">
                    <div
                        className="swiper-slide carousel-item-a intro-item bg-image"
                        style={{ backgroundImage: `url(${Slide1})` }}
                    >
                        <div className="overlay overlay-a"></div>
                        <div className="intro-content display-table">
                            <div className="table-cell">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="intro-body">
                                                <p className="intro-title-top">
                                                    Doral, Florida
                                                    <br /> 78345
                                                </p>
                                                <h1 className="intro-title mb-4 ">
                                                    <span className="color-b">
                                                        204{" "}
                                                    </span>{" "}
                                                    Mount
                                                    <br /> Olive Road Two
                                                </h1>
                                                <p className="intro-subtitle intro-price">
                                                    <a href="/">
                                                        <span className="price-a">
                                                            rent | $ 12.000
                                                        </span>
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="swiper-slide carousel-item-a intro-item bg-image"
                        style={{ backgroundImage: `url(${Slide2})` }}
                    >
                        <div className="overlay overlay-a"></div>
                        <div className="intro-content display-table">
                            <div className="table-cell">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="intro-body">
                                                <p className="intro-title-top">
                                                    Doral, Florida
                                                    <br /> 78345
                                                </p>
                                                <h1 className="intro-title mb-4">
                                                    <span className="color-b">
                                                        204{" "}
                                                    </span>{" "}
                                                    Rino
                                                    <br /> Venda Road Five
                                                </h1>
                                                <p className="intro-subtitle intro-price">
                                                    <a href="/">
                                                        <span className="price-a">
                                                            rent | $ 12.000
                                                        </span>
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="swiper-slide carousel-item-a intro-item bg-image"
                        style={{ backgroundImage: `url(${Slide3})` }}
                    >
                        <div className="overlay overlay-a"></div>
                        <div className="intro-content display-table">
                            <div className="table-cell">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="intro-body">
                                                <p className="intro-title-top">
                                                    Doral, Florida
                                                    <br /> 78345
                                                </p>
                                                <h1 className="intro-title mb-4">
                                                    <span className="color-b">
                                                        204{" "}
                                                    </span>{" "}
                                                    Alira
                                                    <br /> Roan Road One
                                                </h1>
                                                <p className="intro-subtitle intro-price">
                                                    <a href="/">
                                                        <span className="price-a">
                                                            rent | $ 12.000
                                                        </span>
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>

            <main id="main">
                <section className="section-services section-t8">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">
                                            Our Services
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card-box-c foo">
                                    <div className="card-header-c d-flex">
                                        <div className="card-box-ico">
                                            <span className="bi bi-cart"></span>
                                        </div>
                                        <div className="card-title-c align-self-center">
                                            <h2 className="title-c">
                                                Lifestyle
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="card-body-c">
                                        <p className="content-c">
                                            Sed porttitor lectus nibh. Cras
                                            ultricies ligula sed magna dictum
                                            porta. Praesent sapien massa,
                                            convallis a pellentesque nec,
                                            egestas non nisi.
                                        </p>
                                    </div>
                                    <div className="card-footer-c">
                                        <a
                                            href="/"
                                            className="link-c link-icon"
                                        >
                                            Read more
                                            <span className="bi bi-chevron-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card-box-c foo">
                                    <div className="card-header-c d-flex">
                                        <div className="card-box-ico">
                                            <span className="bi bi-calendar4-week"></span>
                                        </div>
                                        <div className="card-title-c align-self-center">
                                            <h2 className="title-c">Loans</h2>
                                        </div>
                                    </div>
                                    <div className="card-body-c">
                                        <p className="content-c">
                                            Nulla porttitor accumsan tincidunt.
                                            Curabitur aliquet quam id dui
                                            posuere blandit. Mauris blandit
                                            aliquet elit, eget tincidunt nibh
                                            pulvinar a.
                                        </p>
                                    </div>
                                    <div className="card-footer-c">
                                        <a
                                            href="/"
                                            className="link-c link-icon"
                                        >
                                            Read more
                                            <span className="bi bi-calendar4-week"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card-box-c foo">
                                    <div className="card-header-c d-flex">
                                        <div className="card-box-ico">
                                            <span className="bi bi-card-checklist"></span>
                                        </div>
                                        <div className="card-title-c align-self-center">
                                            <h2 className="title-c">Sell</h2>
                                        </div>
                                    </div>
                                    <div className="card-body-c">
                                        <p className="content-c">
                                            Sed porttitor lectus nibh. Cras
                                            ultricies ligula sed magna dictum
                                            porta. Praesent sapien massa,
                                            convallis a pellentesque nec,
                                            egestas non nisi.
                                        </p>
                                    </div>
                                    <div className="card-footer-c">
                                        <a
                                            href="/"
                                            className="link-c link-icon"
                                        >
                                            Read more
                                            <span className="bi bi-chevron-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-property section-t8">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">
                                            Latest Properties
                                        </h2>
                                    </div>
                                    <div className="title-link">
                                        <a href="property-grid.html">
                                            All Property
                                            <span className="bi bi-chevron-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="property-carousel" className="swiper">
                            <div className="swiper-wrapper">
                                <div className="carousel-item-b swiper-slide">
                                    <div className="card-box-a card-shadow">
                                        <div className="img-box-a">
                                            <img
                                                src={Property6}
                                                alt=""
                                                className="img-a img-fluid"
                                            />
                                        </div>
                                        <div className="card-overlay">
                                            <div className="card-overlay-a-content">
                                                <div className="card-header-a">
                                                    <h2 className="card-title-a">
                                                        <a href="property-single.html">
                                                            206 Mount
                                                            <br /> Olive Road
                                                            Two
                                                        </a>
                                                    </h2>
                                                </div>
                                                <div className="card-body-a">
                                                    <div className="price-box d-flex">
                                                        <span className="price-a">
                                                            rent | $ 12.000
                                                        </span>
                                                    </div>
                                                    <a
                                                        href="/"
                                                        className="link-a"
                                                    >
                                                        Click here to view
                                                        <span className="bi bi-chevron-right"></span>
                                                    </a>
                                                </div>
                                                <div className="card-footer-a">
                                                    <ul className="card-info d-flex justify-content-around">
                                                        <li>
                                                            <h4 className="card-info-title">
                                                                Area
                                                            </h4>
                                                            <span>
                                                                340m
                                                                <sup>2</sup>
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">
                                                                Beds
                                                            </h4>
                                                            <span>2</span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">
                                                                Baths
                                                            </h4>
                                                            <span>4</span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">
                                                                Garages
                                                            </h4>
                                                            <span>1</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item-b swiper-slide">
                                    <div className="card-box-a card-shadow">
                                        <div className="img-box-a">
                                            <img
                                                src={Property3}
                                                alt=""
                                                className="img-a img-fluid"
                                            />
                                        </div>
                                        <div className="card-overlay">
                                            <div className="card-overlay-a-content">
                                                <div className="card-header-a">
                                                    <h2 className="card-title-a">
                                                        <a href="property-single.html">
                                                            157 West
                                                            <br /> Central Park
                                                        </a>
                                                    </h2>
                                                </div>
                                                <div className="card-body-a">
                                                    <div className="price-box d-flex">
                                                        <span className="price-a">
                                                            rent | $ 12.000
                                                        </span>
                                                    </div>
                                                    <a
                                                        href="property-single.html"
                                                        className="link-a"
                                                    >
                                                        Click here to view
                                                        <span className="bi bi-chevron-right"></span>
                                                    </a>
                                                </div>
                                                <div className="card-footer-a">
                                                    <ul className="card-info d-flex justify-content-around">
                                                        <li>
                                                            <h4 className="card-info-title">
                                                                Area
                                                            </h4>
                                                            <span>
                                                                340m
                                                                <sup>2</sup>
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">
                                                                Beds
                                                            </h4>
                                                            <span>2</span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">
                                                                Baths
                                                            </h4>
                                                            <span>4</span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">
                                                                Garages
                                                            </h4>
                                                            <span>1</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item-b swiper-slide">
                                    <div className="card-box-a card-shadow">
                                        <div className="img-box-a">
                                            <img
                                                src={Property7}
                                                alt=""
                                                className="img-a img-fluid"
                                            />
                                        </div>
                                        <div className="card-overlay">
                                            <div className="card-overlay-a-content">
                                                <div className="card-header-a">
                                                    <h2 className="card-title-a">
                                                        <a href="property-single.html">
                                                            245 Azabu
                                                            <br /> Nishi Park
                                                            let
                                                        </a>
                                                    </h2>
                                                </div>
                                                <div className="card-body-a">
                                                    <div className="price-box d-flex">
                                                        <span className="price-a">
                                                            rent | $ 12.000
                                                        </span>
                                                    </div>
                                                    <a
                                                        href="property-single.html"
                                                        className="link-a"
                                                    >
                                                        Click here to view
                                                        <span className="bi bi-chevron-right"></span>
                                                    </a>
                                                </div>
                                                <div className="card-footer-a">
                                                    <ul className="card-info d-flex justify-content-around">
                                                        <li>
                                                            <h4 className="card-info-title">
                                                                Area
                                                            </h4>
                                                            <span>
                                                                340m
                                                                <sup>2</sup>
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">
                                                                Beds
                                                            </h4>
                                                            <span>2</span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">
                                                                Baths
                                                            </h4>
                                                            <span>4</span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">
                                                                Garages
                                                            </h4>
                                                            <span>1</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item-b swiper-slide">
                                    <div className="card-box-a card-shadow">
                                        <div className="img-box-a">
                                            <img
                                                src={Property10}
                                                alt=""
                                                className="img-a img-fluid"
                                            />
                                        </div>
                                        <div className="card-overlay">
                                            <div className="card-overlay-a-content">
                                                <div className="card-header-a">
                                                    <h2 className="card-title-a">
                                                        <a href="property-single.html">
                                                            204 Montal
                                                            <br /> South Bela
                                                            Two
                                                        </a>
                                                    </h2>
                                                </div>
                                                <div className="card-body-a">
                                                    <div className="price-box d-flex">
                                                        <span className="price-a">
                                                            rent | $ 12.000
                                                        </span>
                                                    </div>
                                                    <a
                                                        href="property-single.html"
                                                        className="link-a"
                                                    >
                                                        Click here to view
                                                        <span className="bi bi-chevron-right"></span>
                                                    </a>
                                                </div>
                                                <div className="card-footer-a">
                                                    <ul className="card-info d-flex justify-content-around">
                                                        <li>
                                                            <h4 className="card-info-title">
                                                                Area
                                                            </h4>
                                                            <span>
                                                                340m
                                                                <sup>2</sup>
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">
                                                                Beds
                                                            </h4>
                                                            <span>2</span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">
                                                                Baths
                                                            </h4>
                                                            <span>4</span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">
                                                                Garages
                                                            </h4>
                                                            <span>1</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="propery-carousel-pagination carousel-pagination"></div>
                    </div>
                </section>
                <section className="section-agents section-t8">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">Best Agents</h2>
                                    </div>
                                    <div className="title-link">
                                        <a href="agents-grid.html">
                                            All Agents
                                            <span className="bi bi-chevron-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img
                                            src={Agent4}
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
                                                            href="/"
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
                                                            href="/"
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
                                                            href="/"
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
                                                            href="/"
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
                                            src={Agent1}
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
                                                            href="/"
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
                                                            href="/"
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
                                                            href="/"
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
                                                            href="/"
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
                                            src={Agent5}
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
                                                            href="/"
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
                                                            href="/"
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
                                                            href="/"
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
                                                            href="/"
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
                        </div>
                    </div>
                </section>
                <section className="section-news section-t8">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">Latest News</h2>
                                    </div>
                                    <div className="title-link">
                                        <a href="blog-grid.html">
                                            All News
                                            <span className="bi bi-chevron-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="news-carousel" className="swiper">
                            <div className="swiper-wrapper">
                                <div className="carousel-item-c swiper-slide">
                                    <div className="card-box-b card-shadow news-box">
                                        <div className="img-box-b">
                                            <img
                                                src={Post2}
                                                alt=""
                                                className="img-b img-fluid"
                                            />
                                        </div>
                                        <div className="card-overlay">
                                            <div className="card-header-b">
                                                <div className="card-category-b">
                                                    <a
                                                        href="/"
                                                        className="category-b"
                                                    >
                                                        House
                                                    </a>
                                                </div>
                                                <div className="card-title-b">
                                                    <h2 className="title-2">
                                                        <a href="blog-single.html">
                                                            House is comming
                                                            <br /> new
                                                        </a>
                                                    </h2>
                                                </div>
                                                <div className="card-date">
                                                    <span className="date-b">
                                                        18 Sep. 2017
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item-c swiper-slide">
                                    <div className="card-box-b card-shadow news-box">
                                        <div className="img-box-b">
                                            <img
                                                src={Post5}
                                                alt=""
                                                className="img-b img-fluid"
                                            />
                                        </div>
                                        <div className="card-overlay">
                                            <div className="card-header-b">
                                                <div className="card-category-b">
                                                    <a
                                                        href="/"
                                                        className="category-b"
                                                    >
                                                        Travel
                                                    </a>
                                                </div>
                                                <div className="card-title-b">
                                                    <h2 className="title-2">
                                                        <a href="blog-single.html">
                                                            Travel is comming
                                                            <br /> new
                                                        </a>
                                                    </h2>
                                                </div>
                                                <div className="card-date">
                                                    <span className="date-b">
                                                        18 Sep. 2017
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item-c swiper-slide">
                                    <div className="card-box-b card-shadow news-box">
                                        <div className="img-box-b">
                                            <img
                                                src={Post7}
                                                alt=""
                                                className="img-b img-fluid"
                                            />
                                        </div>
                                        <div className="card-overlay">
                                            <div className="card-header-b">
                                                <div className="card-category-b">
                                                    <a
                                                        href="/"
                                                        className="category-b"
                                                    >
                                                        Park
                                                    </a>
                                                </div>
                                                <div className="card-title-b">
                                                    <h2 className="title-2">
                                                        <a href="blog-single.html">
                                                            Park is comming
                                                            <br /> new
                                                        </a>
                                                    </h2>
                                                </div>
                                                <div className="card-date">
                                                    <span className="date-b">
                                                        18 Sep. 2017
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item-c swiper-slide">
                                    <div className="card-box-b card-shadow news-box">
                                        <div className="img-box-b">
                                            <img
                                                src={Post3}
                                                alt=""
                                                className="img-b img-fluid"
                                            />
                                        </div>
                                        <div className="card-overlay">
                                            <div className="card-header-b">
                                                <div className="card-category-b">
                                                    <a
                                                        href="/"
                                                        className="category-b"
                                                    >
                                                        Travel
                                                    </a>
                                                </div>
                                                <div className="card-title-b">
                                                    <h2 className="title-2">
                                                        <a href="/">
                                                            Travel is comming
                                                            <br /> new
                                                        </a>
                                                    </h2>
                                                </div>
                                                <div className="card-date">
                                                    <span className="date-b">
                                                        18 Sep. 2017
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="news-carousel-pagination carousel-pagination"></div>
                    </div>
                </section>
                <section className="section-testimonials section-t8 nav-arrow-a">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">
                                            Testimonials
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="testimonial-carousel" className="swiper">
                            <div className="swiper-wrapper">
                                <div className="carousel-item-a swiper-slide">
                                    <div className="testimonials-box">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-6">
                                                <div className="testimonial-img">
                                                    <img
                                                        src={Testimonial1}
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <div className="testimonial-ico">
                                                    <i className="bi bi-chat-quote-fill"></i>
                                                </div>
                                                <div className="testimonials-content">
                                                    <p className="testimonial-text">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipisicing elit. Omnis,
                                                        cupiditate ea nam
                                                        praesentium debitis hic
                                                        ber quibusdam
                                                        voluptatibus officia
                                                        expedita corpori.
                                                    </p>
                                                </div>
                                                <div className="testimonial-author-box">
                                                    <img
                                                        src={MiniTestimonial1}
                                                        alt=""
                                                        className="testimonial-avatar"
                                                    />
                                                    <h5 className="testimonial-author">
                                                        Albert & Erika
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item-a swiper-slide">
                                    <div className="testimonials-box">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-6">
                                                <div className="testimonial-img">
                                                    <img
                                                        src={Testimonial2}
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <div className="testimonial-ico">
                                                    <i className="bi bi-chat-quote-fill"></i>
                                                </div>
                                                <div className="testimonials-content">
                                                    <p className="testimonial-text">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipisicing elit. Omnis,
                                                        cupiditate ea nam
                                                        praesentium debitis hic
                                                        ber quibusdam
                                                        voluptatibus officia
                                                        expedita corpori.
                                                    </p>
                                                </div>
                                                <div className="testimonial-author-box">
                                                    <img
                                                        src={MiniTestimonial2}
                                                        alt=""
                                                        className="testimonial-avatar"
                                                    />
                                                    <h5 className="testimonial-author">
                                                        Pablo & Emma
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-carousel-pagination carousel-pagination"></div>
                    </div>
                </section>
            </main>

            <section className="section-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            <div className="widget-a">
                                <div className="w-header-a">
                                    <h3 className="w-title-a text-brand">
                                        EstateAgency
                                    </h3>
                                </div>
                                <div className="w-body-a">
                                    <p className="w-text-a color-text-a">
                                        Enim minim veniam quis nostrud
                                        exercitation ullamco laboris nisi ut
                                        aliquip exea commodo consequat duis sed
                                        aute irure.
                                    </p>
                                </div>
                                <div className="w-footer-a">
                                    <ul className="list-unstyled">
                                        <li className="color-a">
                                            <span className="color-text-a">
                                                Phone .
                                            </span>{" "}
                                            contact@example.com
                                        </li>
                                        <li className="color-a">
                                            <span className="color-text-a">
                                                Email .
                                            </span>{" "}
                                            +54 356 945234
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
                                                <a href="/">Site Map</a>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="bi bi-chevron-right"></i>{" "}
                                                <a href="/">Legal</a>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="bi bi-chevron-right"></i>{" "}
                                                <a href="/">Agent Admin</a>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="bi bi-chevron-right"></i>{" "}
                                                <a href="/">Careers</a>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="bi bi-chevron-right"></i>{" "}
                                                <a href="/">Affiliate</a>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="bi bi-chevron-right"></i>{" "}
                                                <a href="/">Privacy Policy</a>
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
                                            <a href="/">Venezuela</a>
                                        </li>
                                        <li className="item-list-a">
                                            <i className="bi bi-chevron-right"></i>{" "}
                                            <a href="/">China</a>
                                        </li>
                                        <li className="item-list-a">
                                            <i className="bi bi-chevron-right"></i>{" "}
                                            <a href="/">Hong Kong</a>
                                        </li>
                                        <li className="item-list-a">
                                            <i className="bi bi-chevron-right"></i>{" "}
                                            <a href="/">Argentina</a>
                                        </li>
                                        <li className="item-list-a">
                                            <i className="bi bi-chevron-right"></i>{" "}
                                            <a href="/">Singapore</a>
                                        </li>
                                        <li className="item-list-a">
                                            <i className="bi bi-chevron-right"></i>{" "}
                                            <a href="/">Philippines</a>
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
                                        <a href="/">Home</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="/">About</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="/">Property</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="/">Blog</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="/">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="socials-a">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a href="/">
                                            <i
                                                className="bi bi-facebook"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="/">
                                            <i
                                                className="bi bi-twitter"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="/">
                                            <i
                                                className="bi bi-instagram"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="/">
                                            <i
                                                className="bi bi-linkedin"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="copyright-footer">
                                <p className="copyright color-text-a">
                                    &copy; Copyright
                                    <span className="color-a">
                                        EstateAgency
                                    </span>{" "}
                                    All Rights Reserved.
                                </p>
                            </div>
                            <div className="credits">
                                Designed by{" "}
                                <a href="https://bootstrapmade.com/">
                                    BootstrapMade
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <BackToTop isActive={activeOffset} />
        </div>
    );
};

export default Home;
