import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import Slider from "react-slick";
import Navbar from "../components/Navbar";
import BackToTop from "../components/BackToTop";
import Property6 from "../assets/img/property-6.jpg";
import Property3 from "../assets/img/property-3.jpg";
import Property7 from "../assets/img/property-7.jpg";
import Property10 from "../assets/img/property-10.jpg";
import Testimonial1 from "../assets/img/testimonial-1.jpg";
import Testimonial2 from "../assets/img/testimonial-2.jpg";
import MiniTestimonial1 from "../assets/img/mini-testimonial-1.jpg";
import MiniTestimonial2 from "../assets/img/mini-testimonial-2.jpg";
import Slide1 from "../assets/img/slide-1.jpg";
import Slide2 from "../assets/img/slide-2.jpg";
import Slide3 from "../assets/img/slide-3.jpg";
import Footer from "../components/Footer";

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
            <div id="for-backtotop"></div>

            {/* --------------- */}
            {/* Header Carousel */}
            {/* --------------- */}
            <Swiper
                className="intro intro-carousel swiper position-relative"
                modules={[Pagination, Autoplay, Navigation]}
                speed={600}
                loop={true}
                pagination={{ type: "bullets", clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                slidesPerView="auto"
            >
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
            </Swiper>

            <main id="main">
                {/* -------- */}
                {/* Services */}
                {/* -------- */}
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

                {/* ---------- */}
                {/* Properties */}
                {/* ---------- */}
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

                        {/* -------- */}
                        {/* Carousel */}
                        {/* -------- */}

                        <Swiper
                            className="swiper"
                            modules={[Pagination, Autoplay, Navigation]}
                            speed={600}
                            loop={true}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: true,
                            }}
                            slidesPerView="auto"
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },

                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            <SwiperSlide>
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
                            </SwiperSlide>
                            <SwiperSlide>
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
                            </SwiperSlide>
                            <SwiperSlide>
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
                            </SwiperSlide>
                            <SwiperSlide>
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
                            </SwiperSlide>
                        </Swiper>
                        <div className="propery-carousel-pagination carousel-pagination"></div>
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
                        <Swiper
                            className="swiper testimonial-carousel"
                            modules={[Pagination]}
                            speed={600}
                            loop={true}
                            pagination={{ type: "bullets", clickable: true }}
                            slidesPerView="auto"
                        >
                            <SwiperSlide>
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
                            </SwiperSlide>
                            <SwiperSlide>
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
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
