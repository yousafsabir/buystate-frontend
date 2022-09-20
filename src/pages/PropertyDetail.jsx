import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Agent6 from "../assets/img/agent-6.jpg";

const PropertyDetail = () => {
    const propertyId = useParams().id;
    const [property, setProperty] = useState({});
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const apiUrl =
        process.env.REACT_APP_API_URL +
        "api/properties/propertydetail/" +
        propertyId;
    useEffect(() => {
        const unsub = async () => {
            try {
                setLoading(true);
                const res = await axios.post(apiUrl);
                console.log(res);
                if (res.data.status === 200) {
                    setProperty(res.data.property);
                    setUser(res.data.user);
                } else {
                    setError(true);
                    setLoading(false);
                }
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };
        unsub();
        return unsub;
    }, [propertyId]);
    if (loading || error) {
        return (
            <section className="section-property section-t8">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-wrap d-flex justify-content-between">
                                <div className="title-box">
                                    <h2 className="title-a">
                                        Fetching Property
                                    </h2>
                                </div>
                                <div className="title-link">
                                    <Link to="/properties">
                                        Properties
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
        <main id="main">
            <section className="intro-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="title-single-box">
                                <h1 className="title-single">
                                    {property.title}
                                </h1>
                                <span className="color-text-a">
                                    {property.location}
                                </span>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <nav
                                aria-label="breadcrumb"
                                className="breadcrumb-box d-flex justify-content-lg-end"
                            >
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <Link to="/properties">Properties</Link>
                                    </li>
                                    <li
                                        className="breadcrumb-item active"
                                        aria-current="page"
                                    >
                                        {property.title}
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <section className="property-single nav-arrow-b">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <img
                                src={property.image}
                                style={{
                                    width: "100%",
                                    objectFit: "cover",
                                    objectPosition: "center center",
                                }}
                                alt=""
                            />
                        </div>
                        <div className="col-lg-2"></div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row justify-content-between">
                                <div className="col-md-5 col-lg-4">
                                    <div className="property-price d-flex justify-content-center foo">
                                        <div className="card-header-c d-flex">
                                            <div className="card-box-ico">
                                                <span
                                                    className="bi bi-cash"
                                                    style={{
                                                        fontSize: "2.8rem",
                                                    }}
                                                >
                                                    Rs
                                                </span>
                                            </div>
                                            <div className="card-title-c align-self-center">
                                                <h5
                                                    className="title-c"
                                                    style={{
                                                        marginBottom: "-3px",
                                                    }}
                                                >
                                                    {property.price}
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="property-summary">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="title-box-d section-t4">
                                                    <h3 className="title-d">
                                                        Quick Summary
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="summary-list">
                                            <ul className="list">
                                                <li className="d-flex justify-content-between">
                                                    <strong>
                                                        Property ID:
                                                    </strong>
                                                    <span>{property._id}</span>
                                                </li>
                                                <li className="d-flex justify-content-between">
                                                    <strong>Location:</strong>
                                                    <span
                                                        style={{
                                                            marginLeft: "20px",
                                                        }}
                                                    >
                                                        {property.location}
                                                    </span>
                                                </li>
                                                <li className="d-flex justify-content-between">
                                                    <strong>
                                                        Property Type:
                                                    </strong>
                                                    <span>{property.type}</span>
                                                </li>
                                                <li className="d-flex justify-content-between">
                                                    <strong>Status:</strong>
                                                    <span>
                                                        {property.status}
                                                    </span>
                                                </li>
                                                <li className="d-flex justify-content-between">
                                                    <strong>Area:</strong>
                                                    <span>
                                                        {property.area}m
                                                        <sup>2</sup>
                                                    </span>
                                                </li>
                                                <li className="d-flex justify-content-between">
                                                    <strong>Beds:</strong>
                                                    <span>{property.beds}</span>
                                                </li>
                                                <li className="d-flex justify-content-between">
                                                    <strong>Baths:</strong>
                                                    <span>
                                                        {property.baths}
                                                    </span>
                                                </li>
                                                <li className="d-flex justify-content-between">
                                                    <strong>Garage:</strong>
                                                    <span>
                                                        {property.garages}
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7 col-lg-7 section-md-t3">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="title-box-d">
                                                <h3 className="title-d">
                                                    Property Description
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="property-description">
                                        <p className="description color-text-a">
                                            {property.description}
                                        </p>
                                    </div>
                                    <div className="row section-t3">
                                        <div className="col-sm-12">
                                            <div className="title-box-d">
                                                <h3 className="title-d">
                                                    Amenities
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="amenities-list color-text-a">
                                        <ul className="list-a no-margin">
                                            <li>Balcony</li>
                                            <li>Outdoor Kitchen</li>
                                            <li>Cable Tv</li>
                                            <li>Deck</li>
                                            <li>Tennis Courts</li>
                                            <li>Internet</li>
                                            <li>Parking</li>
                                            <li>Sun Room</li>
                                            <li>Concrete Flooring</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="row section-t3">
                                <div className="col-sm-12">
                                    <div className="title-box-d">
                                        <h3 className="title-d">
                                            Contact Person
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-4">
                                    <img
                                        src={Agent6}
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="property-agent">
                                        <h4 className="title-agent">
                                            {user.fName} {user.lName}
                                        </h4>
                                        <p className="color-text-a">
                                            Nulla porttitor accumsan tincidunt.
                                            Vestibulum ac diam sit amet quam
                                            vehicula elementum sed sit amet dui.
                                            Quisque velit nisi, pretium ut
                                            lacinia in, elementum id enim.
                                        </p>
                                        <ul className="list-unstyled">
                                            <li className="d-flex justify-content-between">
                                                <strong>Phone:</strong>
                                                <span className="color-text-a">
                                                    {user.phone}
                                                </span>
                                            </li>
                                            <li className="d-flex justify-content-between">
                                                <strong>Email:</strong>
                                                <span className="color-text-a">
                                                    {user.email}
                                                </span>
                                            </li>
                                        </ul>
                                        <div className="socials-a">
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <a href="#">
                                                        <i
                                                            className="bi bi-facebook"
                                                            aria-hidden="true"
                                                        ></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="#">
                                                        <i
                                                            className="bi bi-twitter"
                                                            aria-hidden="true"
                                                        ></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="#">
                                                        <i
                                                            className="bi bi-instagram"
                                                            aria-hidden="true"
                                                        ></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="#">
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
                                <div className="col-md-12 col-lg-4">
                                    <div className="property-contact">
                                        <form className="form-a">
                                            <div className="row">
                                                <div className="col-md-12 mb-1">
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-lg form-control-a"
                                                            id="inputName"
                                                            placeholder="Name *"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-1">
                                                    <div className="form-group">
                                                        <input
                                                            type="email"
                                                            className="form-control form-control-lg form-control-a"
                                                            id="inputEmail1"
                                                            placeholder="Email *"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-1">
                                                    <div className="form-group">
                                                        <textarea
                                                            id="textMessage"
                                                            className="form-control"
                                                            placeholder="Comment *"
                                                            name="message"
                                                            cols="45"
                                                            rows="8"
                                                            required
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-a"
                                                    >
                                                        Send Message
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PropertyDetail;
