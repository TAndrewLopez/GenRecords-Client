import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    allVinyls: [],
    isLoading: false,
    shopError: null,
  },
  reducers: {
    sortAlbumNames(state, { payload }) {
      const arr = [...state.allVinyls];
      if (payload) {
        state.allVinyls = arr.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        });
        return;
      }
      state.allVinyls = arr.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      });
    },
    sortArtistName(state, { payload }) {
      const arr = [...state.allVinyls];
      if (payload) {
        state.allVinyls = arr.sort((a, b) => {
          if (a.artist.name < b.artist.name) {
            return -1;
          }
          return 0;
        });
        return;
      }
      state.allVinyls = arr.sort((a, b) => {
        if (a.artist.name > b.artist.name) {
          return -1;
        }
        return 0;
      });
      return;
    },
    sortPopularityScore(state, { payload }) {
      const arr = [...state.allVinyls];
      if (payload) {
        state.allVinyls = arr.sort((a, b) => {
          if (a.popularity < b.popularity) {
            return -1;
          }
          return 0;
        });
        return;
      }
      state.allVinyls = arr.sort((a, b) => {
        f;
        if (a.popularity > b.popularity) {
          return -1;
        }
        return 0;
      });
      return;
    },
    sortPrice(state, { payload }) {
      const arr = [...state.allVinyls];
      if (payload) {
        state.allVinyls = arr.sort((a, b) => {
          if (a.price < b.price) {
            return -1;
          }
          return 0;
        });
        return;
      }
      state.allVinyls = arr.sort((a, b) => {
        if (a.price > b.price) {
          return -1;
        }
        return 0;
      });
      return;
    },
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
export const {
  sortAlbumNames,
  sortArtistName,
  sortPopularityScore,
  sortPrice,
} = shopSlice.actions;
