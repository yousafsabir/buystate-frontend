import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
    setSuspended,
    removeProperty,
    setEditProperty,
    resetStatus,
} from "../redux/slices/Property";
import Api from "../constants/ApiUrls";
import PropertyCard from "../components/PropertyCard";

const MyListings = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    const { suspends, message } = useSelector((state) => state.property);
    const { loading: actionLoading } = useSelector((state) => state.property);
    const [properties, setProperties] = useState([]);
    const [pagination, setPagination] = useState({});
    const [Page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const unsub = async () => {
            if (!user) return;
            try {
                setLoading(true);
                const res = await axios.post(
                    Api.myListings,
                    {
                        sort: "descending",
                        page: Page,
                        limit: 9,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${user.token}`,
                        },
                    }
                );
                if (res.data.status === 200) {
                    setProperties(res.data.properties);
                    setPagination(res.data.pagination);
                    // setPage(res.data.pagination);
                    setLoading(false);
                } else if (res.data.status === 404) {
                    setError({
                        isError: true,
                        message: res.data.message,
                    });
                    setLoading(false);
                }
            } catch (e) {
                setError({
                    isError: true,
                    message: e.message,
                });
                setLoading(false);
                console.log("message", e.message);
                console.log("error", e);
            }
        };
        unsub();
        return unsub;
    }, [Page]);

    // Removing Property from state after remove;
    useEffect(() => {
        if (message.slice(0, 7) === "removed") {
            setProperties(
                properties.filter(
                    (item) => item._id !== message.slice(7, message.length)
                )
            );
        }
        dispatch(resetStatus());
    }, [message]);
    if (loading || error) {
        return (
            <section className="intro-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="title-single-box">
                                <h1 className="title-single">My Listings</h1>
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
                                        My Listings
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
                                        fetching data from server <br />
                                        Error: {error.message} <br /> You can
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
                                <h1 className="title-single">My Listings</h1>
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
                                        My Listings
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
                        {properties?.map((property) => {
                            return (
                                <div className="col-md-4" key={property._id}>
                                    <div className="col-md-12">
                                        <PropertyCard {...property} />
                                    </div>
                                    <div className="col-md-12 d-flex justify-content-center align-items-center mylistings-cta">
                                        <button
                                            disabled={actionLoading}
                                            onClick={() => {
                                                dispatch(
                                                    setEditProperty(property)
                                                );
                                                navigate("/listaproperty");
                                            }}
                                        >
                                            Update
                                        </button>
                                        <button
                                            disabled={actionLoading}
                                            onClick={() =>
                                                dispatch(
                                                    setSuspended({
                                                        propertyId:
                                                            property._id,
                                                    })
                                                )
                                            }
                                        >
                                            {suspends.includes(property._id)
                                                ? "Resume"
                                                : "Suspend"}
                                        </button>
                                        <button
                                            disabled={actionLoading}
                                            onClick={() => {
                                                dispatch(
                                                    removeProperty({
                                                        propertyId:
                                                            property._id,
                                                    })
                                                );
                                            }}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* ---------- */}
                    {/* Pagination */}
                    {/* ---------- */}
                    <div className="row">
                        <div className="col-sm-12">
                            <nav className="pagination-a">
                                <ul className="pagination justify-content-end">
                                    {/* Previous */}
                                    <li className="page-item">
                                        <button
                                            className="page-link"
                                            style={{
                                                border: "none",
                                                background: "transparent",
                                                cursor: pagination.previous
                                                    ? "pointer"
                                                    : "not-allowed",
                                                color:
                                                    !pagination.previous &&
                                                    "#666",
                                            }}
                                            tabIndex="-1"
                                        >
                                            <span className="bi bi-chevron-left"></span>
                                        </button>
                                    </li>
                                    {pagination.previous && (
                                        <li className="page-item">
                                            <span
                                                className="page-link"
                                                onClick={() =>
                                                    setPage(pagination.previous)
                                                }
                                            >
                                                {pagination.previous}
                                            </span>
                                        </li>
                                    )}
                                    {/* Current */}
                                    <li className="page-item active">
                                        <span className="page-link">
                                            {pagination.page}
                                        </span>
                                    </li>
                                    {/* Next */}
                                    {pagination.next && (
                                        <li className="page-item">
                                            <span
                                                className="page-link"
                                                onClick={() =>
                                                    setPage(pagination.next)
                                                }
                                            >
                                                {pagination.next}
                                            </span>
                                        </li>
                                    )}
                                    <li className="page-item next">
                                        <button
                                            className="page-link"
                                            style={{
                                                border: "none",
                                                background: "transparent",
                                                cursor: pagination.next
                                                    ? "pointer"
                                                    : "not-allowed",
                                                color:
                                                    !pagination.next && "#666",
                                            }}
                                            tabIndex="-1"
                                        >
                                            <span className="bi bi-chevron-right"></span>
                                        </button>
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

export default MyListings;
