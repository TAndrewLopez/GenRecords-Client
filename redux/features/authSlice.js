import { createSlice } from "@reduxjs/toolkit";

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
});

export default authSlice.reducer;
