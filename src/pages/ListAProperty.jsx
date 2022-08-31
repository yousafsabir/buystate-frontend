import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProperty, resetStatus } from "../redux/slices/Property";

const ListAProperty = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, success, error, editProperty } = useSelector(
        (state) => state.property
    );

    const [file, setFile] = useState(undefined);
    const [form, setForm] = useState({
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
    const {
        title,
        location,
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

    const submit = () => {
        dispatch(
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
                    class="php-email-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        submit();
                    }}
                >
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div class="row px-3">
                                <div class="col-md-6 col-sm-12 mb-3">
                                    <div class="form-group">
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
                                            class="form-control form-control-lg form-control-a"
                                            placeholder="e.g. Beautiful House"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12 mb-3">
                                    <div class="form-group">
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
                                            class="form-control form-control-lg form-control-a"
                                            placeholder="e.g. West Canal Road, Abdullahpur ..."
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <div class="form-group">
                                        <label
                                            htmlFor="description"
                                            className="mb-2"
                                        >
                                            Description
                                        </label>
                                        <textarea
                                            name="description"
                                            id="description"
                                            class="form-control"
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
                                <div class="col-md-6 col-sm-12 mb-3">
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
                                <div class="col-md-6 col-sm-12 mb-3">
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
                                <div class="col-md-6 col-sm-12 mb-3">
                                    <div class="form-group">
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
                                            class="form-control form-control-lg form-control-a"
                                            placeholder="e.g. 400"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12 mb-3">
                                    <div class="form-group">
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
                                            class="form-control form-control-lg form-control-a"
                                            placeholder="e.g. 4"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12 mb-3">
                                    <div class="form-group">
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
                                            class="form-control form-control-lg form-control-a"
                                            placeholder="e.g. 4"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12 mb-3">
                                    <div class="form-group">
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
                                            class="form-control form-control-lg form-control-a"
                                            placeholder="e.g. 1"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12 mb-3">
                                    <div class="form-group">
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
                                            class="form-control form-control-lg form-control-a"
                                            placeholder="e.g. 2000000"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12 mb-3">
                                    <div class="form-group">
                                        <label className="pb-2" htmlFor="file">
                                            Image
                                        </label>
                                        <input
                                            name="file"
                                            type="file"
                                            onChange={(e) =>
                                                setFile(e.target.files[0])
                                            }
                                            class="form-control form-control-lg form-control-a"
                                            placeholder="e.g. 2000000"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="col-md-12 d-flex justify-content-center mb-3">
                                    <button
                                        type="submit"
                                        class="btn-submit-form"
                                        disabled={!isValid}
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
