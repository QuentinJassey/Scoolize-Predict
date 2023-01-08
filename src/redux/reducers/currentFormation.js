import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  data: [],
  isSuccess: false,
  message: "",
  loading: false,
};

export const getFormation = createAsyncThunk(
  "get/formationData",
  async (arg, { rejectWithValue }) => {
    try {
      console.log(arg);
      const { data } = await axios.get("http://localhost:8000/ecoles/" + arg);
      console.log("okcbon");
      return data;
    } catch (error) {
      console.log(error);
      rejectWithValue(error.response.data);
    }
  }
);

export const currentFormationSlice = createSlice({
  name: "currentFormation",
  initialState,
  reducers: {},

  extraReducers: {
    [getFormation.loading]: (state, { payload }) => {
      state.loading = true;
    },
    [getFormation.fulfilled]: (state, { payload }) => {
      state.isSuccess = true;
      state.loading = false;
      state.data = payload;
    },
    [getFormation.loading]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});
