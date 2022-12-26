import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    id: 0,
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    orders: [],
    cart: [],
    img: "",
    isAdmin: false,
    loggedIn: false,
    error: null,
    message: null,
  },
  reducers: {
    logout(state) {
      localStorage.removeItem("authorization");
      state.id = 0;
      state.firstName = "";
      state.lastName = "";
      state.username = "";
      state.email = "";
      state.orders = [];
      state.cart = [];
      state.img = "";
      state.isAdmin = false;
      state.loggedIn = false;
      state.error = null;
      state.message = null;
      state.cart = JSON.parse(localStorage.getItem("localCart"));
    },
    clearErrorMessage(state) {
      state.error = null;
      state.message = null;
    },
    clearSuccessMessage(state) {
      state.message = null;
    },
    getLocalOrder(state) {
      const cart = localStorage.getItem("localCart");
      if (cart) {
        state.cart = JSON.parse(cart);
      } else {
        localStorage.setItem("localCart", JSON.stringify([]));
      }
    },
    addItemLocally(state, { payload }) {
      const cart = JSON.parse(localStorage.getItem("localCart"));
      cart.push({ qty: 1, vinyl: payload });
      localStorage.setItem("localCart", JSON.stringify(cart));
      state.cart.push({ qty: 1, vinyl: payload });
    },
    removeItemLocally(state, { payload }) {
      const cart = JSON.parse(localStorage.getItem("localCart"));
      const filteredCart = cart.filter((item) => item.vinyl.id !== payload.id);
      localStorage.setItem("localCart", JSON.stringify(filteredCart));
      state.cart = [...filteredCart];
    },
    changeQuantityLocally(state, action) {},
  },
  extraReducers: (builder) => {
    builder.addCase(me.fulfilled, (state, { payload }) => {
      const { id, firstName, lastName, username, email, img, isAdmin } =
        payload;
      state.id = id;
      state.firstName = firstName;
      state.lastName = lastName;
      state.username = username;
      state.email = email;
      state.isAdmin = isAdmin;
      state.img = img;
      state.loggedIn = true;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      if (!payload) {
        state.error = true;
        state.message = "Unable to update user information.";
        return;
      }
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.username = payload.username;
      state.email = payload.email;
      state.img = payload.img;
      state.isLoading = false;
      state.error = null;
      state.message = "Information has been saved!";
    });
    builder.addCase(getUserOrders.fulfilled, (state, { payload }) => {
      const [openOrder] = payload.filter((order) => order.complete === false);
      state.orders = [...payload];
      state.cart = [...openOrder.lineItems.sort((a, b) => a.id - b.id)];
    });
    builder.addCase(addLineItem.fulfilled, (state, { payload }) => {
      if (!payload) {
        state.error = true;
        state.message = "Unable to add line item.";
        return;
      }
      state.error = null;
      state.message = "Item added to cart.";
      state.cart.push(payload);
    });
    builder.addCase(changeLineItemQty.fulfilled, (state, action) => {
      const { payload } = action;

      if (!payload) {
        state.error = true;
        state.message = "Unable to modify line item. Please try again.";
        return;
      }

      const existingItems = state.cart.filter((item) => payload.id !== item.id);
      existingItems.push(payload);
      state.cart = [...existingItems.sort((a, b) => a.id - b.id)];
      state.error = null;
    });
    builder.addCase(removeLineItem.fulfilled, (state, { payload }) => {
      if (payload) {
        state.cart = [...state.cart.filter((item) => item.id !== payload)];
        state.error = null;
        state.message = "Item removed from cart.";
      }
    });
  },
});

//AUTH
export const me = createAsyncThunk("me", async (thunkAPI) => {
  const authorization = localStorage.getItem("authorization");
  const response = await fetch("http://localhost:7000/api/auth/me", {
    method: "GET",
    headers: { authorization },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
  return response;
});

export const login = createAsyncThunk("login", async (form, thunkAPI) => {
  const response = await fetch("http://localhost:7000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));

  if (typeof response === "string") {
    console.log("invalid credentials");
  }

  if (response.authorization) {
    localStorage.setItem("authorization", response.authorization);
    thunkAPI.dispatch(me());
  }
  return response.authorization;
});

export const demoLogin = createAsyncThunk(
  "demoLogin",
  async (user, thunkAPI) => {
    let demoForm;
    if (user) {
      demoForm = {
        username: "administrator",
        password: "adminPassword",
      };
    } else {
      demoForm = {
        username: "visitor",
        password: "visitorPassword",
      };
    }

    const { authorization } = await fetch(
      "http://localhost:7000/api/auth/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(demoForm),
      }
    )
      .then((res) => res.json())
      .catch((err) => console.error(err));

    if (authorization) {
      localStorage.setItem("authorization", authorization);
      thunkAPI.dispatch(me());
    }
    return authorization;
  }
);

export const createUser = createAsyncThunk(
  "createUser",
  async (form, thunkAPI) => {
    const { authorization } = await fetch(
      "http://localhost:7000/api/auth/signUp",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    )
      .then((res) => res.json())
      .catch((err) => console.error(err));

    if (authorization) {
      localStorage.setItem("authorization", authorization);
      thunkAPI.dispatch(me());
    }
    return authorization;
  }
);

export const updateUser = createAsyncThunk(
  "updateUser",
  async (form, thunkAPI) => {
    const authorization = localStorage.getItem("authorization");

    const { user } = await fetch(`http://localhost:7000/api/auth/${form.id}`, {
      method: "PUT",
      headers: {
        authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));

    return user;
  }
);

//USER SPECIFIC ORDER
export const getUserOrders = createAsyncThunk(
  "getUserOrders",
  async (userId, thunkAPI) => {
    const authorization = localStorage.getItem("authorization");

    const { userOrders } = await fetch(
      `http://localhost:7000/api/shop/cart/${userId}`,
      {
        method: "GET",
        headers: {
          authorization,
        },
      }
    )
      .then((res) => res.json())
      .catch((err) => console.error(err));
    return userOrders;
  }
);

export const addLineItem = createAsyncThunk(
  "addLineItem",
  async (vinylId, thunkAPI) => {
    const authorization = localStorage.getItem("authorization");

    const { itemWithContents } = await fetch(
      `http://localhost:7000/api/shop/cart/${vinylId}`,
      {
        method: "PUT",
        headers: {
          authorization,
        },
      }
    )
      .then((res) => res.json())
      .catch((err) => console.error(err));
    return itemWithContents;
  }
);

export const changeLineItemQty = createAsyncThunk(
  "changeLineItemQty",
  async (item, thunkAPI) => {
    const authorization = localStorage.getItem("authorization");
    const { updatedItem, error } = await fetch(
      `http://localhost:7000/api/shop/cart/qty`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization,
        },
        body: JSON.stringify(item),
      }
    )
      .then((res) => res.json())
      .catch((err) => console.error("guess who", err));
    if (error) {
      return error;
    }
    return updatedItem;
  }
);

export const removeLineItem = createAsyncThunk(
  "removeLineItem",
  async (lineItemId, thunkAPI) => {
    const authorization = localStorage.getItem("authorization");

    const { deletedItem } = await fetch(
      `http://localhost:7000/api/shop/cart/${lineItemId}`,
      {
        method: "DELETE",
        headers: {
          authorization,
        },
      }
    )
      .then((res) => res.json())
      .catch((err) => console.error(err));
    return deletedItem;
  }
);

export default authSlice.reducer;
export const {
  logout,
  clearErrorMessage,
  clearSuccessMessage,
  getLocalOrder,
  addItemLocally,
  removeItemLocally,
  changeQuantityLocally,
} = authSlice.actions;
