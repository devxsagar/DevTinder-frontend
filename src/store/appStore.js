import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/userSlice";
import feedReducer from "../feature/feedSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
  },
});

export default appStore;
