import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/userSlice";
import feedReducer from "../feature/feedSlice";
import connectionsReducer from "../feature/connectionsSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    connections: connectionsReducer,
  },
});

export default appStore;
