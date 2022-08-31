import { configureStore } from "@reduxjs/toolkit";
import Auth from "./slices/Auth";
import Property from "./slices/Property";

const Store = configureStore({
    reducer: {
        auth: Auth,
        property: Property,
    },
});

export default Store;
