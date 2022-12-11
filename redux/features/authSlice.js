import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    id: -1,
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    isAdmin: false,
    loggedIn: false,
  },
  extraReducers: (builder) => {
    //LOGIN
    builder.addCase(getUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
    });
  },
});
const BASE_URL = "http://localhost:7000/api/auth/";

export const me = createAsyncThunk("me", async (thunkAPI) => {
  const authorization = localStorage.getItem("authorization");

  const response = await fetch(BASE_URL + "me", {
    method: "GET",
    headers: { authorization },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
  console.log(response, "expecting user");
  return response;
});

export const getUser = createAsyncThunk("login", async (form, thunkAPI) => {
  const { authorization } = await fetch(BASE_URL + "login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
  localStorage.setItem("authorization", authorization);
  thunkAPI.dispatch(me());
  return response;
});

export default authSlice.reducer;
