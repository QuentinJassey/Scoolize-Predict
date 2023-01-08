import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  data: [],
  isSuccess: false,
  message: "",
  loading: false,
};
export const getFormationslimited = createAsyncThunk(
  "get/formationslimitedData",
  async (arg, { rejectWithValue }) => {
    try {
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

export const formationlimitedSlice = createSlice({
  name: "formationlimited",
  initialState,
  reducers: {},

  extraReducers: {
    [getFormationslimited.loading]: (state, { payload }) => {
      state.loading = true;
    },
    [getFormationslimited.fulfilled]: (state, { payload }) => {
      state.isSuccess = true;
      state.loading = false;
      state.data = payload;
    },
    [getFormationslimited.loading]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});
