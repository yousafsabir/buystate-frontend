import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

// get user from local storage
const user = JSON.parse(localStorage.getItem("user"));

// Api Url
const apiUrl = "http://localhost:5000/api/users/";

// thunks
export const login = createAsyncThunk("auth/login", async (args, thunkApi) => {
    try {
        const res = await axios.post(apiUrl + "login", args);
        if (res.data) {
            localStorage.setItem("user", JSON.stringify(res.data.user));
            return res.data.user;
        }
    } catch (error) {
        console.log("complete error", error);
        console.log("error message:", message);
        const message =
            error.response.data.message || error.message || error.toString();
        thunkApi.rejectWithValue(message);
    }
});
export const register = createAsyncThunk(
    "auth/register",
    async (args, thunkApi) => {
        try {
            const res = await axios.post(apiUrl, args);
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
        },
        setEditMode: (state) => {
            state.editUser = true;
        },
    },
    extraReducers: (builder) => {
        // For Login
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                toast("🕓 Logging in");
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.user = action.payload;
                toast(`😇 Welcome back ${state.user.fName}`);
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload;
                toast(`🔺 ${action.payload}`);
            })
            // For Register
            .addCase(register.pending, (state) => {
                state.loading = true;
                toast("🕓 Signing up");
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.user = action.payload;
                toast(`😇 welcome ${state.user.fName}`);
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload;
                toast(`🔺 ${action.payload}`);
            });
    },
});

export const { resetStatus, setEditMode } = Auth.actions;

export default Auth.reducer;
