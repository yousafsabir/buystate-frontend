import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import Testimonial1 from "../assets/img/testimonial-1.jpg";
import Testimonial2 from "../assets/img/testimonial-2.jpg";
import MiniTestimonial1 from "../assets/img/mini-testimonial-1.jpg";
import MiniTestimonial2 from "../assets/img/mini-testimonial-2.jpg";
import Slide1 from "../assets/img/slide-1.jpg";
import Slide2 from "../assets/img/slide-2.jpg";
import Slide3 from "../assets/img/slide-3.jpg";
import LatestPropetyCarousel from "../components/LatestPropetyCarousel";

const Home = () => {
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
                                                    <Link to="/">
                                                        <span className="price-a">
                                                            rent | $ 12.000
                                                        </span>
                                                    </Link>
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
                <LatestPropetyCarousel />

                {/* ------------ */}
                {/* Testimonials */}
                {/* ------------ */}
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
                            {[
                                {
                                    imageLg: Testimonial1,
                                    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda officia distinctio, repellendus, corrupti perferendis soluta in quo accusantium voluptatem odit quas minima doloribus commodi voluptate. Voluptas veritatis adipisci similique. Ipsum necessitatibus molestias similique ut dolores minus harum aspernatur natus laborum?",
                                    imageSm: MiniTestimonial1,
                                    name: "Albert & Erika",
                                },
                                {
                                    imageLg: Testimonial2,
                                    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda officia distinctio, repellendus, corrupti perferendis soluta in quo accusantium voluptatem odit quas minima doloribus commodi voluptate. Voluptas veritatis adipisci similique. Ipsum necessitatibus molestias similique ut dolores minus harum aspernatur natus laborum?",
                                    imageSm: MiniTestimonial2,
                                    name: "Pablo & Emma",
                                },
                            ].map((doc, i) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <div className="carousel-item-a swiper-slide">
                                            <div className="testimonials-box">
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-6">
                                                        <div className="testimonial-img">
                                                            <img
                                                                src={
                                                                    doc.imageLg
                                                                }
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
                                                                {doc.text}
                                                            </p>
                                                        </div>
                                                        <div className="testimonial-author-box">
                                                            <img
                                                                src={
                                                                    doc.imageSm
                                                                }
                                                                alt=""
                                                                className="testimonial-avatar"
                                                            />
                                                            <h5 className="testimonial-author">
                                                                {doc.name}
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
