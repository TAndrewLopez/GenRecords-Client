import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    id: -1,
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    isAdmin: true,
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

export const getUser = createAsyncThunk("login", async (form, thunkAPI) => {
  const baseURL = "http://localhost:7000/api/auth/";
  const response = await fetch(baseURL + "login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
  return response;
});

export default authSlice.reducer;
