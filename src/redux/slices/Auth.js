import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Api from "../../constants/ApiUrls";
import uploadPhoto from "../../utils/uploadPhoto";
import Toast from "../../utils/Toast";

// get user from local storage
const user = JSON.parse(localStorage.getItem("user"));

// thunks

// -----
// Login
// -----
export const login = createAsyncThunk("auth/login", async (args, thunkApi) => {
    try {
        const res = await axios.post(Api.login, args);
        if (res.data.status === 200) {
            localStorage.setItem("user", JSON.stringify(res.data.user));
            return res.data.user;
        } else {
            console.log("Axios Response:", res);
            return thunkApi.rejectWithValue(res.data.message);
        }
    } catch (error) {
        console.log("complete error", error);
        console.log("error message:", message);
        const message =
            error.response.data.message || error.message || error.toString();
        thunkApi.rejectWithValue(message);
    }
});

// --------
// Register
// --------
export const register = createAsyncThunk(
    "auth/register",
    async (args, thunkApi) => {
        try {
            const { image, imageId } = await uploadPhoto(args.photo);
            const res = await axios.post(Api.register, {
                ...args.data,
                image,
                imageId,
            });
            if (res.data) {
                localStorage.setItem("user", JSON.stringify(res.data.user));
                return res.data.user;
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

// ------
// Logout
// ------
export const logout = createAsyncThunk(
    "auth/logout",
    async (args, thunkApi) => {
        try {
            localStorage.removeItem("user");
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

const Auth = createSlice({
    name: "auth",
    initialState: {
        user: user ?? null,
        loading: false,
        success: false,
        error: false,
        editUser: false,
        message: "",
    },
    reducers: {
        resetStatus: (state) => {
            state.loading = false;
            state.success = false;
            state.error = false;
            state.editUser = false;
        },
        setEditUser: (state) => {
            state.editUser = true;
        },
    },
    extraReducers: (builder) => {
        // For Login
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                Toast.loading("Logging in");
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                Toast.dismiss();
                state.user = action.payload;
                Toast.success(`Welcome back ${state.user.fName}`, "😇");
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload;
                Toast.dismiss();
                Toast.error(`${action.payload}`);
            })
            // For Register
            .addCase(register.pending, (state) => {
                state.loading = true;
                Toast.loading("Signing up");
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.user = action.payload;
                Toast.dismiss();
                Toast.success(`welcome ${state.user.fName}`, "😇");
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload;
                Toast.dismiss();
                Toast.error(`${action.payload}`);
            })
            // For Logout
            .addCase(logout.pending, (state) => {
                state.loading = true;
            })
            .addCase(logout.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
                state.user = null;
                Toast.success("Logged out successfully");
            })
            .addCase(logout.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload;
                Toast.dismiss();
                Toast.error(`${action.payload}`);
            });
    },
});

export const { resetStatus, setEditMode } = Auth.actions;

export default Auth.reducer;
