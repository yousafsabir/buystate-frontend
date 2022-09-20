import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register, resetStatus } from "../redux/slices/Auth";

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, success, error, editMode } = useSelector(
        (state) => state.auth
    );

    const [form, setForm] = useState({
        fName: "",
        lName: "",
        userName: "",
        phone: "",
        email: "",
        password: "",
    });
    const { fName, lName, userName, phone, email, password } = form;

    // Check if the use have attempted all fields
    const isValid = Boolean(
        fName && lName && userName && phone && email && password
    );

    // Clearing the form on success
    useEffect(() => {
        if (!loading && success) {
            setForm({
                fName: "",
                lName: "",
                userName: "",
                phone: "",
                email: "",
                password: "",
            });
            dispatch(resetStatus());
            navigate("/");
        }
    }, [loading]);

    const submit = () => {
        dispatch(register(form));
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
                                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="fName"
                                            value={fName}
                                            onChange={(e) =>
                                                setForm((prev) => ({
                                                    ...prev,
                                                    [e.target.name]:
                                                        e.target.value,
                                                }))
                                            }
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
                                            onChange={(e) =>
                                                setForm((prev) => ({
                                                    ...prev,
                                                    [e.target.name]:
                                                        e.target.value,
                                                }))
                                            }
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
                                            onChange={(e) =>
                                                setForm((prev) => ({
                                                    ...prev,
                                                    [e.target.name]:
                                                        e.target.value,
                                                }))
                                            }
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
                                            onChange={(e) =>
                                                setForm((prev) => ({
                                                    ...prev,
                                                    [e.target.name]:
                                                        e.target.value,
                                                }))
                                            }
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
                                            onChange={(e) =>
                                                setForm((prev) => ({
                                                    ...prev,
                                                    [e.target.name]:
                                                        e.target.value,
                                                }))
                                            }
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
                                            onChange={(e) =>
                                                setForm((prev) => ({
                                                    ...prev,
                                                    [e.target.name]:
                                                        e.target.value,
                                                }))
                                            }
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
