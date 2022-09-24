import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, resetStatus } from "../redux/slices/Auth";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (idType === "userName") {
            setText("Enter Username");
        } else if (idType === "email") {
            setText("Enter Email");
        } else if (idType === "phone") {
            setText("Enter Phone");
        }
    }, [idType]);

    // Clearing the form on success
    useEffect(() => {
        const unsub = () => {
            if (user) {
                dispatch(resetStatus());
                navigate("/");
            }
        };
        unsub();
        return unsub();
    }, [user]);
    const submit = () => {
        dispatch(login({ id: userId, password }));
    };
    return (
        <>
            <div style={{ height: "200px" }}></div>
            <div className="container">
                <h2
                    className="text-center"
                    style={{ fontSize: "3rem", marginBottom: "3rem" }}
                >
                    Login
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
                                    <div className="form-group  login-input">
                                        <input
                                            type="text"
                                            name="userId"
                                            className="form-control form-control-lg form-control-a login-input-field"
                                            placeholder="Enter email, phone or username"
                                            required
                                            onChange={(e) =>
                                                setUserId(e.target.value)
                                            }
                                        />
                                        <div className="login-tooltip">
                                            <p>email like : johndoe@mail.com</p>
                                            <p>username like : johndoe</p>
                                            <p>phone like : 03451231212</p>
                                            <div className="tooltip-pointer"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                    <div className="form-group">
                                        <input
                                            name="password"
                                            type="password"
                                            className="form-control form-control-lg form-control-a"
                                            placeholder="Enter Password"
                                            required
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center mb-3">
                                    <button
                                        type="submit"
                                        className="btn-submit-form"
                                        // disabled={!isValid}
                                    >
                                        Login
                                    </button>
                                </div>
                                <div className="col-md-12 text-center color-text-a">
                                    <span>
                                        New Here?{" "}
                                        <Link
                                            to={"/register"}
                                            className="color-a"
                                        >
                                            Register
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

export default Login;
