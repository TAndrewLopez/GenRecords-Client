import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    allVinyls: [],
    isLoading: false,
    shopError: null,
  },
  extraReducers: (builder) => {
    builder.addCase(shopGetVinyls.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(shopGetVinyls.rejected, (state, action) => {
      state.isLoading = false;
      state.allVinyls = [];
      state.shopError = action.payload;
    });
    builder.addCase(shopGetVinyls.fulfilled, (state, action) => {
      state.isLoading = false;
      const { vinyls } = action.payload;
      state.allVinyls = vinyls.sort((a, b) => a.id - b.id);
    });
  },
});

export const shopGetVinyls = createAsyncThunk(
  "shopGetVinyls",
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

export default shopSlice.reducer;
