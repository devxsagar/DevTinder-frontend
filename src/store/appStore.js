import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/userSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appStore;
