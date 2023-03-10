import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  data: [],
  isSuccess: false,
  message: "",
  loading: false,
};

export const getFormations = createAsyncThunk(
  "get/formationsData",
  async (arg, { rejectWithValue }) => {
    try {
      console.log(arg);
      const { data } = await axios.get(
        "http://localhost:8000/ecoles?limit=" + arg
      );
      console.log("okcbon");
      return data;
    } catch (error) {
      console.log(error);
      rejectWithValue(error.response.data);
    }
  }
);

export const formationSlice = createSlice({
  name: "formations",
  initialState,
  reducers: {},

  extraReducers: {
    [getFormations.loading]: (state, { payload }) => {
      state.loading = true;
    },
    [getFormations.fulfilled]: (state, { payload }) => {
      state.isSuccess = true;
      state.loading = false;
      state.data = payload;
    },
    [getFormations.loading]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});
