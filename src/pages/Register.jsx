import React, { useState, useEffect, useRef } from "react";
import empty from "is-empty";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Form from "../utils/handleForm";
import Camera from "../assets/img/camera.jpg";
import { register, resetStatus } from "../redux/slices/Auth";

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, editMode } = useSelector((state) => state.auth);
    const photoInput = useRef();

    const [form, setForm] = useState({
        fName: "",
        lName: "",
        userName: "",
        phone: "",
        email: "",
        password: "",
    });
    const { fName, lName, userName, phone, email, password } = form;
    const handleForm = Form(form, setForm);

    const [photo, setPhoto] = useState({});

    // Check if the use have attempted all fields
    const isValid = Boolean(
        fName && lName && userName && phone && email && password
    );

    // Clearing the form on success
    useEffect(() => {
        if (user) {
            dispatch(resetStatus());
            navigate("/");
        }
    }, [user]);

    const submit = async () => {
        dispatch(register({ data: form, photo }));
    };
    return (
        <>
            <div style={{ height: "200px" }}></div>
            <div className="container">
                <h2 className="text-center mb-5" style={{ fontSize: "3rem" }}>
                    {editMode ? "Update Profile" : "Register"}
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
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8 col-md-12">
                            <div className="row px-3">
                                <div className="col-md-12 d-flex justify-content-center mb-4">
                                    <img
                                        id="signup-img"
                                        src={
                                            empty(photo)
                                                ? Camera
                                                : URL.createObjectURL(photo)
                                        }
                                        alt=""
                                        style={{
                                            width: "200px",
                                            height: "200px",
                                            cursor: "pointer",
                                            objectFit: "cover",
                                            objectPosition: "top center",
                                            borderRadius: "50%",
                                            borderWidth: "6px",
                                            borderStyle: "solid",
                                            borderColor: empty(photo)
                                                ? "#494949"
                                                : "#2eca6a",
                                        }}
                                        onClick={() => {
                                            photoInput.current.click();
                                        }}
                                    />
                                    <input
                                        ref={photoInput}
                                        type="file"
                                        style={{ display: "none" }}
                                        onChange={(e) =>
                                            setPhoto(e.target.files[0])
                                        }
                                    />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="fName"
                                            value={fName}
                                            onChange={handleForm}
                                            className="form-control form-control-lg form-control-a"
                                            placeholder="First Name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                    <div className="form-group">
                                        <input
                                            name="lName"
                                            value={lName}
                                            onChange={handleForm}
                                            type="text"
                                            className="form-control form-control-lg form-control-a"
                                            placeholder="Last Name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="userName"
                                            value={userName}
                                            onChange={handleForm}
                                            className="form-control form-control-lg form-control-a"
                                            placeholder="Username"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                    <div className="form-group">
                                        <input
                                            name="phone"
                                            value={phone}
                                            onChange={handleForm}
                                            type="text"
                                            className="form-control form-control-lg form-control-a"
                                            placeholder="Your Phone Number"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={handleForm}
                                            className="form-control form-control-lg form-control-a"
                                            placeholder="Your Email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                    <div className="form-group">
                                        <input
                                            name="password"
                                            type="password"
                                            value={password}
                                            onChange={handleForm}
                                            className="form-control form-control-lg form-control-a"
                                            placeholder="Set Password"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center mb-3">
                                    <button
                                        type="submit"
                                        className="btn-submit-form"
                                        disabled={!isValid}
                                    >
                                        {editMode ? "Update" : "Register"}
                                    </button>
                                </div>
                                <div className="col-md-12 text-center color-text-a">
                                    <span>
                                        Already a member?{" "}
                                        <Link to={"/login"} className="color-a">
                                            Login
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2"></div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Register;
