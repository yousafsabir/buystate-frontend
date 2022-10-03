import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FavouriteBtn from "./FavouriteBtn";
import Suspended from "../assets/img/suspended.png";

const PropertyCard = ({
    _id,
    image,
    title,
    status,
    price,
    area,
    beds,
    baths,
    garages,
}) => {
    const navigate = useNavigate();

    const { suspends } = useSelector((state) => state.property);

    const [suspended, setSuspended] = useState(false);

    useEffect(() => {
        if (suspends.includes(_id)) {
            setSuspended(true);
        } else {
            setSuspended(false);
        }
    }, [suspends]);

    const [favourite, setFavourite] = useState(false);

    // Redirect to property detail
    const redirect = (id) => {
        navigate("/propertydetail/" + id);
    };
    return (
        <div className="card-box-a card-shadow">
            {/* suspended div */}
            {suspended && (
                <div className="suspended-div">
                    <img src={Suspended} alt="" />
                </div>
            )}
            {/* ------------- */}
            <div className="img-box-a">
                <img src={image} alt="" className="img-a" />
            </div>
            <div className="card-overlay">
                {/* Favourite indicator */}
                <div
                    className={
                        favourite
                            ? "card-fav-wrapper"
                            : "card-fav-wrapper active"
                    }
                >
                    <FavouriteBtn id={_id} setFavourite={setFavourite} />
                </div>

                <div className="card-overlay-a-content">
                    <div className="card-header-a">
                        <h2 className="card-title-a">
                            <span>{title}</span>
                        </h2>
                    </div>
                    <div className="card-body-a">
                        <div className="price-box d-flex">
                            <span className="price-a">
                                {status} | Rs {price}
                            </span>
                        </div>
                        <span onClick={() => redirect(_id)} className="link-a">
                            Click here to view
                            <span className="bi bi-chevron-right"></span>
                        </span>
                    </div>
                    <div className="card-footer-a">
                        <ul className="card-info d-flex justify-content-around">
                            <li>
                                <h4 className="card-info-title">Area</h4>
                                <span>
                                    {area}m<sup>2</sup>
                                </span>
                            </li>
                            <li>
                                <h4 className="card-info-title">Beds</h4>
                                <span>{beds}</span>
                            </li>
                            <li>
                                <h4 className="card-info-title">Baths</h4>
                                <span>{baths}</span>
                            </li>
                            <li>
                                <h4 className="card-info-title">Garages</h4>
                                <span>{garages}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
