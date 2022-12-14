import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Api from "../../constants/ApiUrls";
import uploadPhoto from "../../utils/uploadPhoto";
import deletePhoto from "../../utils/deletePhoto";
import Toast from "../../utils/Toast";

export const addProperty = createAsyncThunk(
    "property/add",
    async (args, thunkApi) => {
        try {
            // sending image to firebase storage
            const { image, imageId } = await uploadPhoto(args.photo);
            // uploading to database
            const userId = thunkApi.getState().auth.user._id;
            const res = await axios.post(
                Api.addProperty,
                {
                    ...args.data,
                    image,
                    imageId,
                    userId,
                },
                thunkApi.getState().auth.axiosConfig
            );
            if (res.data.status === 201) {
                thunkApi.fulfillWithValue(res.data.favourites);
            } else {
                throw new Error(res.data.message);
            }
        } catch (error) {
            console.log("complete error", error);
            const message =
                error.response.data.message ||
                error.message ||
                error.toString();
            console.log("error message:", error.message);
            thunkApi.rejectWithValue(message);
        }
    }
);
export const getFavourites = createAsyncThunk(
    "property/getFavourites",
    async (args, thunkApi) => {
        if (!user) return []; // As this function runs each time when user value in auth changes
        // So on logout, it checks and automatically clears the favourites array in property
        const user = thunkApi.getState().auth.user;
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };
        try {
            const res = await axios.post(Api.getFavourites, {}, config);
            if (res.data.status === 200) {
                return res.data.favourites;
            } else {
                throw new Error(res.data.message);
            }
        } catch (error) {
            console.log("complete error", error);
            console.log("error message:", error.message);
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
            const res = await axios.post(
                Api.getFavourites,
                args,
                thunkApi.getState().auth.axiosConfig
            );
            if (res.data.status === 200) {
                return res.data;
            } else {
                throw new Error(res.data.message);
            }
        } catch (error) {
            console.log("complete error", error);
            const message =
                error.response.data.message ||
                error.message ||
                error.toString();
            console.log("error message:", message);
            thunkApi.rejectWithValue(message);
        }
    }
);
export const getSuspends = createAsyncThunk(
    "property/getSuspends",
    async (args, thunkApi) => {
        if (!user) return []; // As this function runs each time when user value in auth changes
        const user = thunkApi.getState().auth.user;
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };
        try {
            const res = await axios.post(Api.setSuspended, {}, config);
            if (res.data.status === 200) {
                return res.data.suspends;
            } else {
                throw new Error(res.data.message);
            }
        } catch (error) {
            console.log("complete error", error);
            const message =
                error.response.data.message ||
                error.message ||
                error.toString();
            console.log("error message:", message);
            thunkApi.rejectWithValue(message);
        }
    }
);
export const setSuspended = createAsyncThunk(
    "property/setSuspended",
    async (args, thunkApi) => {
        const user = thunkApi.getState().auth.user;
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };
        try {
            const res = await axios.post(Api.setSuspended, args, config);
            if (res.data.status === 200) {
                return res.data;
            } else {
                throw new Error(res.data.message);
            }
        } catch (error) {
            console.log("complete error", error);
            const message =
                error.response.data.message ||
                error.message ||
                error.toString();
            console.log("error message:", message);
            thunkApi.rejectWithValue(message);
        }
    }
);
export const removeProperty = createAsyncThunk(
    "property/remove",
    async (args, thunkApi) => {
        try {
            const res = await axios.delete(
                Api.removeProperty + args.propertyId,
                thunkApi.getState().auth.axiosConfig
            );
            if (res.data.status === 200) {
                return thunkApi.fulfillWithValue(args.propertyId);
            } else {
                throw new Error(res.data.message);
            }
        } catch (error) {
            console.log("complete error", error);
            const message =
                error.response.data.message ||
                error.message ||
                error.toString();
            console.log("error message:", message);
            thunkApi.rejectWithValue(message);
        }
    }
);
export const updateProperty = createAsyncThunk(
    "property/update",
    async (args, thunkApi) => {
        try {
            let data = { ...args.data };
            // if user uploads new photo
            if (args.photo) {
                // Deleting existing photo
                await deletePhoto(
                    thunkApi.getState().property.toBeEditted.imageId
                );
                // Uploading New One
                const { image, imageId } = await uploadPhoto(args.photo);
                data = { ...data, image, imageId };
            }
            const res = await axios.put(
                Api.updateProperty + args.propertyId,
                data,
                thunkApi.getState().auth.axiosConfig
            );
            if (res.data.status === 200) {
                return thunkApi.fulfillWithValue(res.data.message);
            } else {
                throw new Error(res.data.message);
            }
        } catch (error) {
            console.log("complete error", error);
            const message =
                error.response.data.message ||
                error.message ||
                error.toString();
            console.log("error message:", message);
            thunkApi.rejectWithValue(message);
        }
    }
);

const Property = createSlice({
    name: "property",
    initialState: {
        favourites: [],
        suspends: [],
        loading: false,
        success: false,
        error: false,
        editProperty: false,
        toBeEditted: {},
        message: "",
    },
    reducers: {
        resetStatus: (state) => {
            state.loading = false;
            state.success = false;
            state.error = false;
            state.editProperty = false;
            state.message = "";
        },
        setEditProperty: (state, action) => {
            state.editProperty = true;
            state.toBeEditted = action.payload;
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
            })
            // Get Suspends
            .addCase(getSuspends.pending, (state) => {})
            .addCase(getSuspends.fulfilled, (state, action) => {
                state.suspends = action.payload;
            })
            .addCase(getSuspends.rejected, (state, action) => {
                Toast.error(`${action.payload}`);
            })
            // Set Suspended
            .addCase(setSuspended.pending, (state) => {
                state.loading = true;
            })
            .addCase(setSuspended.fulfilled, (state, action) => {
                state.loading = false;
                state.suspends = action.payload.suspends;
                Toast.success(`${action.payload.message}`);
            })
            .addCase(setSuspended.rejected, (state, action) => {
                state.loading = false;
                Toast.error(`${action.payload.message}`);
            })
            // Remove Property
            .addCase(removeProperty.pending, (state) => {
                state.loading = true;
                Toast.loading("Removing Property");
            })
            .addCase(removeProperty.fulfilled, (state, action) => {
                state.loading = false;
                state.message = "removed" + action.payload;
                Toast.dismiss();
                Toast.success("Successfully Removed Property");
            })
            .addCase(removeProperty.rejected, (state, action) => {
                state.loading = false;
                Toast.error(`${action.payload}`);
            })
            // Update Property
            .addCase(updateProperty.pending, (state) => {
                state.loading = true;
                Toast.loading("Updating Property");
            })
            .addCase(updateProperty.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
                state.message = "updated";
                Toast.dismiss();
                Toast.success("Property Successfully Updated");
            })
            .addCase(updateProperty.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                Toast.error(`${action.payload}`);
            }),
});

export const { resetStatus, setEditProperty } = Property.actions;

export default Property.reducer;
