import React from "react";
import isEmpty from "is-empty";

const PropertyFilter = ({ searchParams }) => {
    return (
        <div className="col-sm-12">
            {!isEmpty(searchParams) && (
                <div className="grid-option">
                    <div className="property-filter">
                        <p>Showing results for</p>
                        <div>
                            {Object.entries(searchParams).map(
                                ([key, value], i) => {
                                    return (
                                        <div className="filter-tag" key={i}>
                                            {key === "price" ? (
                                                <p>Rs.{value}</p>
                                            ) : key === "area" ? (
                                                <p>
                                                    {value}m<sup>2</sup>
                                                </p>
                                            ) : (
                                                <p>{value}</p>
                                            )}
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PropertyFilter;
