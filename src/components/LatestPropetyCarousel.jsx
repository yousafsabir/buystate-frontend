import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import Api from "../constants/ApiUrls";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import PropertyCard from "./PropertyCard";

const LatestPropetyCarousel = () => {
    const { suspends } = useSelector((state) => state.property);
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const apiUrl = process.env.REACT_APP_API_URL + "api/properties/get";
    useEffect(() => {
        const unsub = async () => {
            try {
                setLoading(true);
                const res = await axios.post(Api.properties, {
                    find: {},
                    sort: "descending",
                    page: 1,
                    limit: 4,
                });
                if (res.data.status === 200) {
                    setProperties(res.data.properties);
                    setLoading(false);
                }
            } catch (e) {
                setError(true);
                setLoading(false);
                console.log("message", e?.message);
                console.log("error", e);
            }
        };
        unsub();
        return unsub;
    }, []);

    if (loading || error) {
        return (
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
                                    <Link to="/properties">
                                        All Properties
                                        <span className="bi bi-chevron-right"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="col-md-12 d-flex justify-content-center align-items-center"
                            style={{ height: "300px" }}
                        >
                            {loading ? (
                                <div className="loader"></div>
                            ) : (
                                <div>
                                    <h5
                                        className="text-center"
                                        style={{ color: "#dc2626" }}
                                    >
                                        There seems to be an error while
                                        fetching data from server <br /> You can
                                        reload the page
                                    </h5>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
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
                                    All Properties
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
                    {properties?.map((property) => {
                        if (!suspends?.includes(property._id)) {
                            if (!suspends?.includes(property._id)) {
                                return (
                                    <SwiperSlide key={property._id}>
                                        <div className="carousel-item-b swiper-slide">
                                            <PropertyCard {...property} />
                                        </div>
                                    </SwiperSlide>
                                );
                            }
                        }
                    })}
                </Swiper>
                <div className="propery-carousel-pagination carousel-pagination"></div>
            </div>
        </section>
    );
};

export default LatestPropetyCarousel;
