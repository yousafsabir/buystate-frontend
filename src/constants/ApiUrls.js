const base = process.env.REACT_APP_API_URL + "api/";
const auth = base + "users/";
const property = base + "properties/";

const Api = Object.freeze({
    // Auth Apis
    login: auth + "login", // post request
    register: auth, // post request

    // Property Apis
    addProperty: property + "create",
    myListings: property + "mylistings",
    properties: property + "get",
    propertyDetail: property + "propertydetail/",
    getFavourites: property + "favourites", // multi function api
    getFavouriteProperties: property + "favouriteproperties",
});

export default Api;
