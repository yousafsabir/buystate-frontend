import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    addProperty,
    resetStatus,
    updateProperty,
} from "../redux/slices/Property";

const ListAProperty = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, success, error, message, editProperty, toBeEditted } =
        useSelector((state) => state.property);

    const [file, setFile] = useState(undefined);
    const [form, setForm] = useState({
        title: "",
        location: "",
        city: "",
        state: "",
        description: "",
        status: "",
        type: "",
        area: null,
        beds: null,
        baths: null,
        garages: null,
        price: null,
    });
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
    console.log(form);
    // Clearing the form on success
    useEffect(() => {
        if (!loading && success) {
            setForm({
                title: "",
                location: "",
                description: "",
                status: "",
                type: "",
                area: null,
                beds: null,
                baths: null,
                garages: null,
                price: null,
            });
            dispatch(resetStatus());
            // navigate("/myproperties");
        }
    }, [loading]);

    // Loading To be Editted Property
    useEffect(() => {
        if (editProperty) {
            setForm({
                title: toBeEditted.title,
                location: toBeEditted.location,
                description: toBeEditted.description,
                status: toBeEditted.status,
                type: toBeEditted.type,
                area: toBeEditted.area,
                beds: toBeEditted.beds,
                baths: toBeEditted.baths,
                garages: toBeEditted.garages,
                price: toBeEditted.price,
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
                                            onChange={(e) =>
                                                setForm((prev) => ({
                                                    ...prev,
                                                    [e.target.name]:
                                                        e.target.value,
                                                }))
                                            }
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
                                            onChange={(e) =>
                                                setForm((prev) => ({
                                                    ...prev,
                                                    [e.target.name]:
                                                        e.target.value,
                                                }))
                                            }
                                            type="text"
                                            className="form-control form-control-lg form-control-a"
                                            placeholder="e.g. West Canal Road, Abdullahpur ..."
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 mb-3">
                                    <div className="form-group">
                                        <label htmlFor="city" className="pb-2">
                                            City
                                        </label>
                                        <input
                                            name="city"
                                            value={city}
                                            id="city"
                                            onChange={(e) =>
                                                setForm((prev) => ({
                                                    ...prev,
                                                    [e.target.name]:
                                                        e.target.value,
                                                }))
                                            }
                                            type="text"
                                            className="form-control form-control-lg form-control-a"
                                            placeholder="e.g. Faisalabad"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 mb-3">
                                    <div className="form-group">
                                        <label htmlFor="state" className="pb-2">
                                            State
                                        </label>
                                        <input
                                            name="state"
                                            value={state}
                                            id="state"
                                            onChange={(e) =>
                                                setForm((prev) => ({
                                                    ...prev,
                                                    [e.target.name]:
                                                        e.target.value,
                                                }))
                                            }
                                            type="text"
                                            className="form-control form-control-lg form-control-a"
                                            placeholder="e.g. Punjab"
                                            required
                                        />
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
                                            onChange={(e) =>
                                                setForm((prev) => ({
                                                    ...prev,
                                                    [e.target.name]:
                                                        e.target.value,
                                                }))
                                            }
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
                                            onChange={(e) =>
                                                setForm((prev) => ({
                                                    ...prev,
                                                    [e.target.name]:
                                                        e.target.value,
                                                }))
                                            }
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
                                            onChange={(e) =>
                                                setForm((prev) => ({
                                                    ...prev,
                                                    [e.target.name]:
                                                        e.target.value,
                                                }))
                                            }
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
                                            <option value={"townhouse"}>
                                                Townhouse
                                            </option>
                                            <option value={"twinHouse"}>
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
                                            onChange={(e) =>
                                                setForm((prev) => ({
                                                    ...prev,
                                                    [e.target.name]:
                                                        e.target.value,
                                                }))
                                            }
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
                                            onChange={(e) =>
                                                setForm((prev) => ({
                                                    ...prev,
                                                    [e.target.name]:
                                                        e.target.value,
                                                }))
                                            }
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
                                            onChange={(e) =>
                                                setForm((prev) => ({
                                                    ...prev,
                                                    [e.target.name]:
                                                        e.target.value,
                                                }))
                                            }
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
                                            onChange={(e) =>
                                                setForm((prev) => ({
                                                    ...prev,
                                                    [e.target.name]:
                                                        e.target.value,
                                                }))
                                            }
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
                                            onChange={(e) =>
                                                setForm((prev) => ({
                                                    ...prev,
                                                    [e.target.name]:
                                                        e.target.value,
                                                }))
                                            }
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
                                            className="form-control form-control-lg form-control-a file-input"
                                            id="formFileLg"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center mb-3">
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
