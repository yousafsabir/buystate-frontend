import React from "react";
import { Link } from "react-router-dom";
import Property1 from "../assets/img/property-1.jpg";
import Property3 from "../assets/img/property-3.jpg";
import Property6 from "../assets/img/property-6.jpg";
import Property7 from "../assets/img/property-7.jpg";
import Property8 from "../assets/img/property-8.jpg";
import Property10 from "../assets/img/property-10.jpg";
import PropertyCard from "../components/PropertyCard";

const Properties = () => {
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
                        {[
                            {
                                img: Property1,
                                title: "204 Mount Olive Road Two",
                                status: "sale",
                                price: 15000,
                                area: 350,
                                baths: 5,
                                beds: 4,
                                garages: 1,
                            },
                            {
                                img: Property3,
                                title: "204 Mount Olive Road Two",
                                status: "sale",
                                price: 15000,
                                area: 350,
                                baths: 5,
                                beds: 4,
                                garages: 1,
                            },
                            {
                                img: Property6,
                                title: "204 Mount Olive Road Two",
                                status: "sale",
                                price: 15000,
                                area: 350,
                                baths: 5,
                                beds: 4,
                                garages: 1,
                            },
                            {
                                img: Property7,
                                title: "204 Mount Olive Road Two",
                                status: "sale",
                                price: 15000,
                                area: 350,
                                baths: 5,
                                beds: 4,
                                garages: 1,
                            },
                            {
                                img: Property8,
                                title: "204 Mount Olive Road Two",
                                status: "sale",
                                price: 15000,
                                area: 350,
                                baths: 5,
                                beds: 4,
                                garages: 1,
                            },
                            {
                                img: Property10,
                                title: "204 Mount Olive Road Two",
                                status: "sale",
                                price: 15000,
                                area: 350,
                                baths: 5,
                                beds: 4,
                                garages: 1,
                            },
                        ].map((card) => {
                            return (
                                <div className="col-md-4">
                                    <PropertyCard
                                        img={card.img}
                                        title={card.title}
                                        status={card.status}
                                        price={card.price}
                                        area={card.area}
                                        baths={card.baths}
                                        beds={card.beds}
                                        garages={card.garages}
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
