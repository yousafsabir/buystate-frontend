import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { storage } from "../../firebase";
import {
    deleteObject,
    getDownloadURL,
    ref,
    uploadBytes,
} from "firebase/storage";
import toast from "react-hot-toast";
import Toast from "../../utils/Toast";

// Api Url
const apiUrl = process.env.REACT_APP_API_URL + "api/properties/";

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
                apiUrl + "create",
                {
                    ...args.data,
                    image,
                    imageId,
                    userId,
                },
                config
            );
            console.log(res.data);
            if (res.data.status === 201) {
                thunkApi.fulfillWithValue(res.data);
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
        properties: [],
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
            }),
});

export const { resetStatus, setEditProperty } = Property.actions;

export default Property.reducer;
