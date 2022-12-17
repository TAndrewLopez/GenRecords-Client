import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:7000/api/auth/";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    id: -1,
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    img: "",
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
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.isLoading = false;
      console.log(action.error);
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      console.log(action.error);
    });
    builder.addCase(demoLogin.rejected, (state, action) => {
      state.isLoading = false;
      console.log(action.error);
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
    builder.addCase(updateUser.fulfilled, (state, action) => {
      const { firstName, lastName, username, email, password, img } =
        action.payload;

      state.firstName = firstName;
      state.lastName = lastName;
      state.username = username;
      state.email = email;
      state.img = img;
    });
  },
});

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

export const login = createAsyncThunk("login", async (form, thunkAPI) => {
  const response = await fetch(BASE_URL + "login", {
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

    const { authorization } = await fetch(BASE_URL + "login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(demoForm),
    })
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
    const { authorization } = await fetch(BASE_URL + "signUp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
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
    const { user } = await fetch(BASE_URL + "", {
      method: "PUT",
      headers: {
        authorization,
        "Content-Type": "application/json",
      },
      body: form,
    });
    return user;
  }
);

export default authSlice.reducer;
export const { logout } = authSlice.actions;
