import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, resetStatus } from "../redux/slices/Auth";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, success, error } = useSelector((state) => state.auth);

    const [idType, setIdType] = useState("");
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    // console.log(idType, userId, password);

    // Check if the use have attempted all fields
    const isValid = Boolean(idType && userId && password);

    // Setting Placeholder According to idType
    const [text, setText] = useState("Select an option above");
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
        if (!loading && success) {
            setIdType("");
            setUserId("");
            setPassword("");
            dispatch(resetStatus());
            navigate("/");
        }
    }, [loading]);
    const submit = () => {
        dispatch(login({ idType, userId, password }));
    };
    return (
        <>
            <div style={{ height: "200px" }}></div>
            <div className="container">
                <h2 className="text-center mb-5" style={{ fontSize: "3rem" }}>
                    Login
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
                                <div className="col-md-12 mb-3">
                                    <div className="form-group">
                                        <label
                                            className="pb-2"
                                            htmlFor="idType"
                                        >
                                            Login With
                                        </label>
                                        <select
                                            className="form-control form-select form-control-a"
                                            id="idType"
                                            onChange={(e) =>
                                                setIdType(e.target.value)
                                            }
                                            required
                                        >
                                            <option
                                                value={""}
                                                className="text-a"
                                            >
                                                select an option
                                            </option>
                                            <option value={"userName"}>
                                                username
                                            </option>
                                            <option value={"email"}>
                                                email
                                            </option>
                                            <option value={"phone"}>
                                                phone
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12 mb-3">
                                    <div class="form-group">
                                        <input
                                            type="text"
                                            name="userId"
                                            class="form-control form-control-lg form-control-a"
                                            placeholder={text}
                                            required
                                            onChange={(e) =>
                                                setUserId(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12 mb-3">
                                    <div class="form-group">
                                        <input
                                            name="password"
                                            type="password"
                                            class="form-control form-control-lg form-control-a"
                                            placeholder="Enter Password"
                                            required
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div class="col-md-12 d-flex justify-content-center mb-3">
                                    <button
                                        type="submit"
                                        class="btn-submit-form"
                                        // disabled={!isValid}
                                    >
                                        Login
                                    </button>
                                </div>
                                <div class="col-md-12 text-center color-text-a">
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
                        <div className="col-md-2"></div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
