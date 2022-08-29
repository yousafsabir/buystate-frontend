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
    },
    reducers: {},
    extraReducers: (builder) => {
        // For Login
        builder
            .addCase(login.pending, (state) => {
                toast("🕓 Logging in");
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload;
                toast("✔ Logged In");
            })
            .addCase(login.rejected, (state, action) => {
                toast(`🔺 ${action.payload}`);
            })
            // For Register
            .addCase(register.pending, (state) => {
                toast("🕓 Signing up");
            })
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload;
                toast(`😇 welcome ${state.user.fName}`);
            })
            .addCase(register.rejected, (state, action) => {
                toast(`🔺 ${action.payload}`);
            });
    },
});

export default Auth.reducer;
