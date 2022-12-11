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
  reducers: {
    logout(state) {
      localStorage.removeItem("authorization");
      state.id = -1;
      state.firstName = "";
      state.lastName = "";
      state.username = "";
      state.email = "";
      state.isAdmin = false;
      state.loggedIn = false;
    },
  },
  extraReducers: (builder) => {
    //LOGIN
    builder.addCase(getUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(me.rejected, (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
    });
    builder.addCase(me.fulfilled, (state, action) => {
      const { id, firstName, lastName, username, email, isAdmin } =
        action.payload;

      state.id = id;
      state.firstName = firstName;
      state.lastName = lastName;
      state.username = username;
      state.email = email;
      state.isAdmin = isAdmin;
      state.loggedIn = true;
      state.isLoading = false;
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

  console.log(authorization, "somethiing");
  if (authorization) {
    localStorage.setItem("authorization", authorization);
    thunkAPI.dispatch(me());
  }
  return authorization;
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
