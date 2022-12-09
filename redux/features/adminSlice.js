import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    users: [],
    vinyls: [],
    adminError: null,
  },
  extraReducers: (builder) => {
    builder.addCase(adminGetVinyls.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(adminGetVinyls.rejected, (state, action) => {
      state.isLoading = false;
      state.vinyls = [];
      state.adminError = action.payload;
    });
    builder.addCase(adminGetVinyls.fulfilled, (state, action) => {
      state.isLoading = false;
      state.vinyls = action.payload.sort((a, b) => a.id - b.id);
    });
  },
});

export const adminGetVinyls = createAsyncThunk(
  "adminGetVinyls",
  async (thunkAPI) => {
    const baseURL = "http://localhost:7000/api/";
    const response = await fetch(baseURL + "shop", {
      method: "GET",
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    return response;
  }
);

export default adminSlice.reducer;
