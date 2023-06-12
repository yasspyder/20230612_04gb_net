import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const login = createAsyncThunk(
  'profile/login',
  async function (userData) {
    await fetch('https://breakhd2.store/sanctum/csrf-cookie');

    const response = await fetch('http://localhost:8010/proxy/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const authData = await response.json();

    return authData;
  }
);

export const register = createAsyncThunk(
  'profile/register',
  async function (registerData) {
    await fetch('https://breakhd2.store/sanctum/csrf-cookie');

    const response = await fetch(
      'http://localhost:8010/proxy/api/auth/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      }
    );

    const authData = await response.json();

    return authData;
  }
);

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    user: null,
    profile: null,
    loading: false,
    error: [],
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      if (!action.payload.success) {
        state.error = action.payload.errors;
        state.loading = false;
        return;
      }
      state.user = action.payload.data.user;
      state.profile = action.payload.data.profile;
      state.loading = false;
    },
    [login.rejected]: (state, action) => {
      state.error = action.payload[0];
    },
    [register.pending]: (state) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      if (!action.payload.success) {
        state.error = action.payload.errors;
        state.loading = false;
        return;
      }
      state.user = action.payload.user;
      state.profile = action.payload.profile;
      state.loading = false;
    },
    [register.rejected]: (state, action) => {
      state.error = action.payload[0];
    },
  },
});

export default profileSlice.reducer;
