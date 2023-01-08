import { configureStore } from "@reduxjs/toolkit";

import { combineReducers } from "@reduxjs/toolkit";

import { formationSlice } from "./reducers/formation";

import { formationlimitedSlice } from "./reducers/formationLimited";
import { currentFormationSlice } from "./reducers/currentFormation";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const reducers = combineReducers({
  formationLimited: formationlimitedSlice.reducer,
  formations: formationSlice.reducer,
  currentFormation: currentFormationSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
