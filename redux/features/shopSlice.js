import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    allVinyls: [],
    isLoading: false,
    shopError: null,
    orders: [],
    cart: [],
  },
  reducers: {},
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
    builder.addCase(getUserOrders.fulfilled, (state, action) => {
      state.orders = [...action.payload];
    });
    // builder.addCase(addCartLineItem.fulfilled, (state, action) => {
    //   state.orders = [...action.payload];
    // });
  },
});

const BASE_URL = "http://localhost:7000/api/";

export const shopGetVinyls = createAsyncThunk(
  "shopGetVinyls",
  async (thunkAPI) => {
    const response = await fetch(BASE_URL + "shop", {
      method: "GET",
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    return response;
  }
);

export const getUserOrders = createAsyncThunk(
  "getUserOrders",
  async (userId, thunkAPI) => {
    const authorization = localStorage.getItem("authorization");

    const { userOrders } = await fetch(BASE_URL + `shop/cart/${userId}`, {
      method: "GET",
      headers: {
        authorization,
      },
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    return userOrders;
  }
);

export const addCartLineItem = createAsyncThunk(
  "addCartLineItem",
  async (vinylId, thunkAPI) => {
    const authorization = localStorage.getItem("authorization");

    const { newItem } = await fetch(BASE_URL + `shop/cart/${vinylId}`, {
      method: "PUT",
      headers: {
        authorization,
      },
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    console.log(newItem);
    return newItem;
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
