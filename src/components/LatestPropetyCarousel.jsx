import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";

const LatestPropetyCarousel = () => {
    const navigate = useNavigate();
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const apiUrl = process.env.REACT_APP_API_URL + "api/properties/get";
    useEffect(() => {
        const unsub = async () => {
            setLoading(true);
            const res = await axios.post(apiUrl, {
                find: null,
                sort: "descending",
                limit: 4,
            });
            if (res.data.status === 200) {
                setProperties(res.data.properties);
            } else {
                setError(true);
                setLoading(false);
            }
            setLoading(false);
        };
        return unsub;
    }, []);

    // Redirect to property detail
    const redirect = (id) => {
        navigate("/propertydetail", { state: id });
    };
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
                                        All Property
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
                    {properties?.map((property) => {
                        return (
                            <SwiperSlide key={property._id}>
                                <div className="carousel-item-b swiper-slide">
                                    <div className="card-box-a card-shadow">
                                        <div className="img-box-a">
                                            <img
                                                src={property.image}
                                                alt=""
                                                className="img-a img-fluid"
                                            />
                                        </div>
                                        <div className="card-overlay">
                                            <div className="card-overlay-a-content">
                                                <div className="card-header-a">
                                                    <h2 className="card-title-a">
                                                        <a href="property-single.html">
                                                            {property.title}
                                                        </a>
                                                    </h2>
                                                </div>
                                                <div className="card-body-a">
                                                    <div className="price-box d-flex">
                                                        <span className="price-a">
                                                            {property.status} |
                                                            Rs {property.price}
                                                        </span>
                                                    </div>
                                                    <span
                                                        onClick={() =>
                                                            redirect(
                                                                property._id
                                                            )
                                                        }
                                                        className="link-a"
                                                    >
                                                        Click here to view
                                                        <span className="bi bi-chevron-right"></span>
                                                    </span>
                                                </div>
                                                <div className="card-footer-a">
                                                    <ul className="card-info d-flex justify-content-around">
                                                        <li>
                                                            <h4 className="card-info-title">
                                                                Area
                                                            </h4>
                                                            <span>
                                                                {property.area}m
                                                                <sup>2</sup>
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">
                                                                Beds
                                                            </h4>
                                                            <span>
                                                                {property.beds}
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">
                                                                Baths
                                                            </h4>
                                                            <span>
                                                                {property.baths}
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">
                                                                Garages
                                                            </h4>
                                                            <span>
                                                                {
                                                                    property.garages
                                                                }
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <div className="propery-carousel-pagination carousel-pagination"></div>
            </div>
        </section>
    );
};

export default LatestPropetyCarousel;
