import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    allVinyls: [],
    singleVinyl: null,
    isLoading: false,
    shopError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getShopVinyls.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getShopVinyls.fulfilled, (state, action) => {
      const { vinyls } = action.payload;
      state.allVinyls = vinyls.sort((a, b) => a.id - b.id);
      state.isLoading = false;
    });
    builder.addCase(getSingleVinyl.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getSingleVinyl.fulfilled, (state, { payload }) => {
      state.singleVinyl = payload.vinyl;
      state.isLoading = false;
    });
  },
});

export const getShopVinyls = createAsyncThunk(
  "getShopVinyls",
  async (thunkAPI) => {
    const response = await fetch(`http://localhost:7000/api/shop`, {
      method: "GET",
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    return response;
  }
);

export const getSingleVinyl = createAsyncThunk(
  "getSingleVinyl",
  async (vinylId, thunkAPI) => {
    const response = await fetch(`http://localhost:7000/api/shop/${vinylId}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    return response;
  }
);

export default shopSlice.reducer;

/*

export const {
  sortAlbumNames,
  sortArtistName,
  sortPopularityScore,
  sortPrice,
} = shopSlice.actions;


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
*/
