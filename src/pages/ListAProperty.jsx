import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    addProperty,
    resetStatus,
    updateProperty,
} from "../redux/slices/Property";
import { cities, states } from "../constants/CityAndStates";
import Form from "../utils/handleForm";

const ListAProperty = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, success, error, message, editProperty, toBeEditted } =
        useSelector((state) => state.property);

    const [file, setFile] = useState(null);
    const fileRef = useRef();
    const [form, setForm] = useState({
        title: "",
        location: "",
        city: "",
        state: "",
        description: "",
        status: "",
        type: "",
        area: "",
        beds: "",
        baths: "",
        garages: "",
        price: "",
    });
    const handleForm = Form(form, setForm);
    const {
        title,
        location,
        city,
        state,
        description,
        status,
        type,
        area,
        beds,
        baths,
        garages,
        price,
    } = form;
    // Setting first city in the list after a state is selected
    // useEffect(() => {
    //     if (form.state) {
    //         setForm({ ...form, city: cities[form.state][0] });
    //     }
    // }, [form.state]);
    // Check if the use have attempted all fields
    const isValid = Boolean(
        title &&
            location &&
            description &&
            status &&
            type &&
            area &&
            beds &&
            baths &&
            garages &&
            price &&
            file
    );
    // Clearing the form on success
    useEffect(() => {
        if (!loading && success) {
            ResetForm();
        }
    }, [loading]);
    // Clearing the form on cancel update
    const ResetForm = () => {
        resetForm();
        dispatch(resetStatus());
    };

    // Loading To be Editted Property
    useEffect(() => {
        if (editProperty) {
            setForm({
                title: toBeEditted.title,
                location: toBeEditted.location,
                state: toBeEditted.state,
                city: toBeEditted.city,
                description: toBeEditted.description,
                status: toBeEditted.status,
                type: toBeEditted.type,
                area: toBeEditted.area.toString(),
                beds: toBeEditted.beds.toString(),
                baths: toBeEditted.baths.toString(),
                garages: toBeEditted.garages.toString(),
                price: toBeEditted.price.toString(),
            });
        }
    }, [editProperty]);

    // returning to myProperties on update property
    useEffect(() => {
        if (message === "updated") {
            dispatch(resetStatus());
            navigate("/mylistings");
        }
    }, [message]);

    const resetForm = () => {
        setForm({
            title: "",
            location: "",
            city: "",
            state: "",
            description: "",
            status: "",
            type: "",
            area: "",
            beds: "",
            baths: "",
            garages: "",
            price: "",
        });
        setFile(null);
        fileRef.current.value = null;
    };

    const submit = () => {
        editProperty
            ? dispatch(
                  updateProperty({
                      propertyId: toBeEditted._id,
                      data: form,
                      photo: file ?? null,
                  })
              )
            : dispatch(
                  addProperty({
                      data: form,
                      photo: file,
                  })
              );
    };
    return (
        <>
            <div style={{ height: "200px" }}></div>
            <div className="container">
                <h2 className="text-center mb-5" style={{ fontSize: "3rem" }}>
                    {editProperty ? "Update Listing" : "List Your Property"}
                </h2>
                <form
                    role="form"
                    className="php-email-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        submit();
                    }}
                >
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className="row px-3">
                                <div className="col-md-6 col-sm-12 mb-3">
                                    <div className="form-group">
                                        <label htmlFor="title" className="pb-2">
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            name="title"
                                            id="title"
                                            value={title}
                                            onChange={handleForm}
                                            className="form-control form-control-lg form-control-a"
                                            placeholder="e.g. Beautiful House"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 mb-3">
                                    <div className="form-group">
                                        <label
                                            htmlFor="location"
                                            className="pb-2"
                                        >
                                            Location
                                        </label>
                                        <input
                                            name="location"
                                            value={location}
                                            id="location"
                                            onChange={handleForm}
                                            type="text"
                                            className="form-control form-control-lg form-control-a"
                                            placeholder="e.g. West Canal Road, Abdullahpur ..."
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 mb-3">
                                    <div className="form-group">
                                        <label className="pb-2" htmlFor="state">
                                            State
                                        </label>
                                        <select
                                            className="form-control form-select form-control-a"
                                            id="state"
                                            name="state"
                                            value={state}
                                            onChange={handleForm}
                                        >
                                            <option value="" className="text-a">
                                                Select State
                                            </option>
                                            {states.map((state, i) => {
                                                return (
                                                    <option
                                                        value={state}
                                                        key={i}
                                                    >
                                                        {state}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 mb-3">
                                    <div className="form-group">
                                        <label className="pb-2" htmlFor="city">
                                            City
                                        </label>
                                        <select
                                            className="form-control form-select form-control-a"
                                            id="city"
                                            name="city"
                                            onChange={handleForm}
                                            value={city}
                                        >
                                            {!Boolean(form.state) && (
                                                <option
                                                    value={""}
                                                    className="text-a"
                                                >
                                                    Select a state for its
                                                    cities
                                                </option>
                                            )}
                                            {Boolean(form.state) && (
                                                <option
                                                    value={""}
                                                    className="text-a"
                                                >
                                                    Select a city in{" "}
                                                    {form.state}
                                                </option>
                                            )}
                                            {Boolean(form.state) &&
                                                cities[form.state]?.map(
                                                    (city, i) => {
                                                        return (
                                                            <option
                                                                value={city}
                                                                key={i}
                                                            >
                                                                {city}
                                                            </option>
                                                        );
                                                    }
                                                )}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <div className="form-group">
                                        <label
                                            htmlFor="description"
                                            className="mb-2"
                                        >
                                            Description
                                        </label>
                                        <textarea
                                            name="description"
                                            id="description"
                                            className="form-control"
                                            value={description}
                                            onChange={handleForm}
                                            cols="45"
                                            rows="5"
                                            placeholder="Message"
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 mb-3">
                                    <div className="form-group">
                                        <label
                                            className="pb-2"
                                            htmlFor="status"
                                        >
                                            Property Status
                                        </label>
                                        <select
                                            className="form-control form-select form-control-a"
                                            id="status"
                                            name="status"
                                            value={status}
                                            onChange={handleForm}
                                            required
                                        >
                                            <option
                                                value={""}
                                                className="text-a"
                                            >
                                                select an option
                                            </option>
                                            <option value={"sale"}>
                                                For Sale
                                            </option>
                                            <option value={"rent"}>
                                                For Rent
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 mb-3">
                                    <div className="form-group">
                                        <label className="pb-2" htmlFor="type">
                                            Property Type
                                        </label>
                                        <select
                                            className="form-control form-select form-control-a"
                                            id="type"
                                            name="type"
                                            value={type}
                                            onChange={handleForm}
                                            required
                                        >
                                            <option
                                                value={""}
                                                className="text-a"
                                            >
                                                select an option
                                            </option>
                                            <option value={"apartment"}>
                                                Apartment
                                            </option>
                                            <option value={"villa"}>
                                                Villa
                                            </option>
                                            <option value={"studio"}>
                                                Studio
                                            </option>
                                            <option value={"town house"}>
                                                Town House
                                            </option>
                                            <option value={"twin house"}>
                                                Twin House
                                            </option>
                                            <option value={"chalet"}>
                                                Chalet
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 mb-3">
                                    <div className="form-group">
                                        <label className="pb-2" htmlFor="area">
                                            Area(m<sup>2</sup>)
                                        </label>
                                        <input
                                            name="area"
                                            value={area}
                                            onChange={handleForm}
                                            type="number"
                                            className="form-control form-control-lg form-control-a"
                                            placeholder="e.g. 400"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 mb-3">
                                    <div className="form-group">
                                        <label className="pb-2" htmlFor="beds">
                                            No. of Beds
                                        </label>
                                        <input
                                            type="number"
                                            name="beds"
                                            value={beds}
                                            onChange={handleForm}
                                            className="form-control form-control-lg form-control-a"
                                            placeholder="e.g. 4"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 mb-3">
                                    <div className="form-group">
                                        <label className="pb-2" htmlFor="baths">
                                            No. of Baths
                                        </label>
                                        <input
                                            name="baths"
                                            type="number"
                                            value={baths}
                                            onChange={handleForm}
                                            className="form-control form-control-lg form-control-a"
                                            placeholder="e.g. 4"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 mb-3">
                                    <div className="form-group">
                                        <label
                                            className="pb-2"
                                            htmlFor="garages"
                                        >
                                            No. of Garages
                                        </label>
                                        <input
                                            name="garages"
                                            type="number"
                                            value={garages}
                                            onChange={handleForm}
                                            className="form-control form-control-lg form-control-a"
                                            placeholder="e.g. 1"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 mb-3">
                                    <div className="form-group">
                                        <label className="pb-2" htmlFor="price">
                                            Price (Rs)
                                        </label>
                                        <input
                                            name="price"
                                            type="number"
                                            value={price}
                                            onChange={handleForm}
                                            className="form-control form-control-lg form-control-a"
                                            placeholder="e.g. 2000000"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 mb-3">
                                    <div className="form-group">
                                        <label className="pb-2" htmlFor="file">
                                            Image
                                        </label>
                                        <input
                                            name="file"
                                            type="file"
                                            onChange={(e) =>
                                                setFile(e.target.files[0])
                                            }
                                            ref={fileRef}
                                            className="form-control form-control-lg form-control-a file-input"
                                            id="formFileLg"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center mb-3">
                                    {editProperty && (
                                        <button
                                            className="btn-submit-form me-5"
                                            onClick={() => ResetForm()}
                                        >
                                            Cancel
                                        </button>
                                    )}
                                    <button
                                        type="submit"
                                        className="btn-submit-form"
                                        disabled={!editProperty && !isValid}
                                    >
                                        {editProperty ? "Update" : "List"}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ListAProperty;
