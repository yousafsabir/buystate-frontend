import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFavourites } from "../redux/slices/Property";
import Toast from "../utils/Toast";

const FavouriteBtn = ({
    id,
    showText = false,
    setFavourite = (bool) => {},
}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const { favourites, loading } = useSelector((state) => state.property);
    const favourite = favourites.includes(id);
    // returning boolean to property card for button's positioning
    setFavourite(favourite);

    const submit = () => {
        if (!user) {
            navigate("/login");
            return Toast.warning("You need to Login First");
        }
        dispatch(setFavourites({ propertyId: id }));
    };
    return (
        <>
            {showText && (
                <p
                    style={{
                        color: favourite ? "#2eca6a" : "#313131",
                        margin: "0",
                        padding: "0",
                    }}
                >
                    {favourite ? "Your Favourite" : "Add to Favourites"}
                </p>
            )}
            <button
                className="fav-box d-flex justify-content-center align-items-center"
                style={{ marginLeft: "8px" }}
                onClick={submit}
                disabled={loading}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={
                        favourite ? "favourite-svg active" : "favourite-svg"
                    }
                >
                    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                </svg>
            </button>
        </>
    );
};

export default FavouriteBtn;
