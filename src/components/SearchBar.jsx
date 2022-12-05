import React, { useState, useEffect } from "react";
import isEmpty from "is-empty";
import { useNavigate } from "react-router-dom";
import { states, cities } from "../constants/CityAndStates";
import Form from "../utils/handleForm";

const SearchBar = ({ isOpen, setOpen }) => {
    const navigate = useNavigate();
    const [search, setSearch] = useState({
        status: "",
        type: "",
        state: "",
        city: "",
        area: "",
        price: "",
    });
    const handleForm = Form(search, setSearch);
    useEffect(() => {
        if (search.state === "") {
            setSearch({ ...search, city: "" });
        }
    }, [search.state]);
    const onSubmit = (e) => {
        e.preventDefault();
        setOpen(false);
        navigate(
            `/properties?${
                !isEmpty(search.status) ? "status=" + search.status + "&" : ""
            }${!isEmpty(search.type) ? "type=" + search.type + "&" : ""}${
                !isEmpty(search.state) ? "state=" + search.state + "&" : ""
            }${!isEmpty(search.city) ? "city=" + search.city + "&" : ""}${
                !isEmpty(search.area) ? "area=" + search.area + "&" : ""
            }${!isEmpty(search.price) ? "price=" + search.price : ""}`
        );
    };
    return (
        <div className={isOpen ? "box-collapse-open" : "box-collapse-closed"}>
            <div className="click-closed"></div>
            <div className="box-collapse">
                <div className="title-box-d">
                    <h3 className="title-d">Search Property</h3>
                </div>
                <span
                    className="close-box-collapse right-boxed bi bi-x"
                    onClick={() => setOpen(false)}
                ></span>
                <div className="box-collapse-wrap form">
                    <form className="form-a" onSubmit={onSubmit}>
                        <div className="row">
                            {/* <div className="col-md-12 mb-2">
                                <div className="form-group">
                                    <label className="pb-2" htmlFor="Type">
                                        Keyword
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg form-control-a"
                                        placeholder="Keyword"
                                    />
                                </div>
                            </div> */}
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2" htmlFor="status">
                                        Status
                                    </label>
                                    <select
                                        className="form-control form-select form-control-a"
                                        id="status"
                                        name="status"
                                        onChange={handleForm}
                                    >
                                        <option value={""}>Both</option>
                                        <option value={"rent"}>For Rent</option>
                                        <option value={"sale"}>For Sale</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2" htmlFor="Type">
                                        Type
                                    </label>
                                    <select
                                        className="form-control form-select form-control-a"
                                        id="Type"
                                        name="type"
                                        onChange={handleForm}
                                    >
                                        <option value={""}>All Types</option>
                                        <option value={"apartment"}>
                                            Apartment
                                        </option>
                                        <option value={"villa"}>Villa</option>
                                        <option value={"studio"}>Studio</option>
                                        <option value={"town house"}>
                                            Town House
                                        </option>
                                        <option value={"twin house"}>
                                            Twin House
                                        </option>
                                        <option value={"chalet"}>Chalet</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2" htmlFor="state">
                                        State
                                    </label>
                                    <select
                                        className="form-control form-select form-control-a"
                                        id="state"
                                        name="state"
                                        onChange={handleForm}
                                    >
                                        <option value={""}>All States</option>
                                        {states.map((state) => {
                                            return (
                                                <option value={state}>
                                                    {state}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2" htmlFor="city">
                                        City
                                    </label>
                                    <select
                                        className="form-control form-select form-control-a"
                                        id="city"
                                        name="city"
                                        onChange={handleForm}
                                    >
                                        <option value={""}>All Cities</option>
                                        {!Boolean(search.state) && (
                                            <option value={""}>
                                                Select a state for its cities
                                            </option>
                                        )}
                                        {Boolean(search.state) &&
                                            cities[search.state]?.map(
                                                (city) => {
                                                    return (
                                                        <option value={city}>
                                                            {city}
                                                        </option>
                                                    );
                                                }
                                            )}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2" htmlFor="area">
                                        Minimum Area (m<sup>2</sup>)
                                    </label>
                                    <input
                                        id="area"
                                        type="number"
                                        name="area"
                                        className="form-control form-control-md form-control-a"
                                        onChange={handleForm}
                                    />
                                </div>
                            </div>
                            {/* <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2" htmlFor="bedrooms">
                                        Bedrooms
                                    </label>
                                    <select
                                        className="form-control form-select form-control-a"
                                        id="bedrooms"
                                    >
                                        <option>Any</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2" htmlFor="garages">
                                        Garages
                                    </label>
                                    <select
                                        className="form-control form-select form-control-a"
                                        id="garages"
                                    >
                                        <option>Any</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                        <option>04</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2" htmlFor="bathrooms">
                                        Bathrooms
                                    </label>
                                    <select
                                        className="form-control form-select form-control-a"
                                        id="bathrooms"
                                    >
                                        <option>Any</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </select>
                                </div>
                            </div> */}
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2" htmlFor="price">
                                        Minimum Price (Rs)
                                    </label>
                                    <input
                                        id="price"
                                        type="number"
                                        name="price"
                                        className="form-control form-control-md form-control-a"
                                        onChange={handleForm}
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <button type="submit" className="btn btn-b">
                                    Search Property
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
