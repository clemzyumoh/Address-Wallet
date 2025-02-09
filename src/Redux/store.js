import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./settingSlice";
import homeReducer from "./homeSlice";

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    home: homeReducer,
  },
});

export default store;
