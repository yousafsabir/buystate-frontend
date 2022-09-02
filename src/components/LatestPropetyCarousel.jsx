import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import Property6 from "../assets/img/property-6.jpg";
import Property3 from "../assets/img/property-3.jpg";
import Property7 from "../assets/img/property-7.jpg";
import Property10 from "../assets/img/property-10.jpg";

const LatestPropetyCarousel = () => {
    return (
        <section className="section-property section-t8">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title-wrap d-flex justify-content-between">
                            <div className="title-box">
                                <h2 className="title-a">Latest Properties</h2>
                            </div>
                            <div className="title-link">
                                <Link to="/properties">
                                    All Property
                                    <span className="bi bi-chevron-right"></span>
                                </Link>
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
                                                    <br /> Olive Road Two
                                                </a>
                                            </h2>
                                        </div>
                                        <div className="card-body-a">
                                            <div className="price-box d-flex">
                                                <span className="price-a">
                                                    rent | $ 12.000
                                                </span>
                                            </div>
                                            <a href="/" className="link-a">
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
                                                    <br /> Nishi Park let
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
                                                    <br /> South Bela Two
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
    );
};

export default LatestPropetyCarousel;
