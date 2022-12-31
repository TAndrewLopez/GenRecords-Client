import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    users: [],
    vinyls: [],
    adminError: null,
  },
  extraReducers: (builder) => {
    //VINYLS THUNK
    builder.addCase(adminGetVinyls.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(adminGetVinyls.rejected, (state, action) => {
      state.isLoading = false;
      state.vinyls = [];
      state.adminError = action.payload;
    });
    builder.addCase(adminGetVinyls.fulfilled, (state, action) => {
      const { vinyls } = action.payload;
      state.isLoading = false;
      state.vinyls = [...vinyls.sort((a, b) => a.id - b.id)];
    });
    //USERS THUNK
    builder.addCase(adminGetUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(adminGetUsers.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.users = [];
      state.adminError = payload;
    });
    builder.addCase(adminGetUsers.fulfilled, (state, action) => {
      const { users } = action.payload;
      state.isLoading = false;
      state.users = users.sort((a, b) => a.id - b.id);
    });
  },
});

export const adminGetVinyls = createAsyncThunk(
  "adminGetVinyls",
  async (thunkAPI) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/shop`, {
      method: "GET",
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    return response;
  }
);

export const adminGetUsers = createAsyncThunk(
  "adminGetUsers",
  async (thunkAPI) => {
    const authorization = localStorage.getItem("authorization");
    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth`, {
      method: "GET",
      headers: {
        authorization,
      },
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    return response;
  }
);

export default adminSlice.reducer;
