import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PropertyCard from "../components/PropertyCard";

const Properties = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const apiUrl = process.env.REACT_APP_API_URL + "api/properties/get";
    console.log(process.env.REACT_APP_API_URL);
    useEffect(() => {
        const unsub = async () => {
            try {
                console.log("before loading");
                setLoading(true);
                const res = await axios.post(apiUrl, {
                    find: null,
                    sort: "descending",
                    limit: null,
                });
                console.log("after fetching");
                console.log(res.data);
                if (res.data.status === 200) {
                    setProperties(res.data.properties);
                } else {
                    setError(true);
                    setLoading(false);
                }
                setLoading(false);
            } catch (e) {
                console.log("message", e.message);
                console.log("error", e);
            }
        };
        return unsub;
    }, []);
    if (loading || error) {
        return (
            <section className="intro-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="title-single-box">
                                <h1 className="title-single">
                                    Amazing Properties
                                </h1>
                                <span className="color-text-a">Near You</span>
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
                                    <li
                                        className="breadcrumb-item active"
                                        aria-current="page"
                                    >
                                        Properties
                                    </li>
                                </ol>
                            </nav>
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
            {/* ------------ */}
            {/* Intro Single */}
            {/* ------------ */}
            <section className="intro-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="title-single-box">
                                <h1 className="title-single">
                                    Amazing Properties
                                </h1>
                                <span className="color-text-a">Near You</span>
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
                                    <li
                                        className="breadcrumb-item active"
                                        aria-current="page"
                                    >
                                        Properties
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* ------------- */}
            {/* Property Grid */}
            {/* ------------- */}
            <section className="property-grid grid">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="grid-option">
                                <form>
                                    <select className="custom-select">
                                        <option selected>All</option>
                                        <option value="1">New to Old</option>
                                        <option value="2">For Rent</option>
                                        <option value="3">For Sale</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                        {properties?.map((property) => {
                            return (
                                <div className="col-md-4">
                                    <PropertyCard
                                        propertyId={property._id}
                                        img={property.image}
                                        title={property.title}
                                        status={property.status}
                                        price={property.price}
                                        area={property.area}
                                        baths={property.baths}
                                        beds={property.beds}
                                        garages={property.garages}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <nav className="pagination-a">
                                <ul className="pagination justify-content-end">
                                    <li className="page-item disabled">
                                        <a
                                            className="page-link"
                                            href="#"
                                            tabindex="-1"
                                        >
                                            <span className="bi bi-chevron-left"></span>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            1
                                        </a>
                                    </li>
                                    <li className="page-item active">
                                        <a className="page-link" href="#">
                                            2
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            3
                                        </a>
                                    </li>
                                    <li className="page-item next">
                                        <a className="page-link" href="#">
                                            <span className="bi bi-chevron-right"></span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Properties;
