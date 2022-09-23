import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Api from "../../constants/ApiUrls";
import { storage } from "../../firebase";
import {
    deleteObject,
    getDownloadURL,
    ref,
    uploadBytes,
} from "firebase/storage";
import Toast from "../../utils/Toast";

export const addProperty = createAsyncThunk(
    "property/add",
    async (args, thunkApi) => {
        try {
            // sending image to firebase storage
            const imageId =
                Date.now().toString(36) + Math.random().toString(36).substr(2);
            const fileRef = ref(storage, imageId);
            await uploadBytes(fileRef, args.photo);
            const image = await getDownloadURL(fileRef);

            // uploading to database
            const userId = thunkApi.getState().auth.user._id;
            const token = thunkApi.getState().auth.user.token;
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const res = await axios.post(
                Api.addProperty,
                {
                    ...args.data,
                    image,
                    imageId,
                    userId,
                },
                config
            );
            if (res.data.status === 201) {
                thunkApi.fulfillWithValue(res.data.favourites);
            }
        } catch (error) {
            console.log("complete error", error);
            console.log("error message:", message);
            const message =
                error.response.data.message ||
                error.message ||
                error.toString();
            thunkApi.rejectWithValue(message);
        }
    }
);
export const getFavourites = createAsyncThunk(
    "property/getFavourites",
    async (args, thunkApi) => {
        try {
            const token = thunkApi.getState().auth.user.token;
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const res = await axios.post(Api.getFavourites, {}, config);
            if (res.data.status === 200) {
                return res.data.favourites;
            } else {
                thunkApi.rejectWithValue("an error occoured");
            }
        } catch (error) {
            console.log("complete error", error);
            console.log("error message:", message);
            const message =
                error.response.data.message ||
                error.message ||
                error.toString();
            thunkApi.rejectWithValue(message);
        }
    }
);
export const setFavourites = createAsyncThunk(
    "property/setFavourites",
    async (args, thunkApi) => {
        try {
            const token = thunkApi.getState().auth.user.token;
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const res = await axios.post(Api.getFavourites, args, config);
            if (res.data.status === 200) {
                return res.data;
            } else {
                thunkApi.rejectWithValue("an error occoured");
            }
        } catch (error) {
            console.log("complete error", error);
            console.log("error message:", message);
            const message =
                error.response.data.message ||
                error.message ||
                error.toString();
            thunkApi.rejectWithValue(message);
        }
    }
);

const Property = createSlice({
    name: "property",
    initialState: {
        favourites: [],
        loading: false,
        success: false,
        error: false,
        editProperty: false,
        message: "",
    },
    reducers: {
        resetStatus: (state) => {
            state.loading = false;
            state.success = false;
            state.error = false;
            state.editProperty = false;
        },
        setEditProperty: (state) => {
            state.editProperty = true;
        },
    },
    extraReducers: (builder) =>
        builder
            // Add Property
            .addCase(addProperty.pending, (state) => {
                state.loading = true;
                Toast.loading("Listing Property");
            })
            .addCase(addProperty.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
                Toast.dismiss();
                Toast.success("Successfully listed your property");
            })
            .addCase(addProperty.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                Toast.error(`${action.payload}`);
            })
            // Get Favourites
            .addCase(getFavourites.pending, (state) => {})
            .addCase(getFavourites.fulfilled, (state, action) => {
                state.favourites = action.payload;
            })
            .addCase(getFavourites.rejected, (state, action) => {
                Toast.error(`${action.payload}`);
            })
            // Set Favourites
            .addCase(setFavourites.pending, (state) => {
                state.loading = true;
            })
            .addCase(setFavourites.fulfilled, (state, action) => {
                state.loading = false;
                state.favourites = action.payload.favourites;
                Toast.success(`${action.payload.message}`);
            })
            .addCase(setFavourites.rejected, (state, action) => {
                state.loading = false;
                Toast.error(`${action.payload}`);
            }),
});

export const { resetStatus, setEditProperty } = Property.actions;

export default Property.reducer;
