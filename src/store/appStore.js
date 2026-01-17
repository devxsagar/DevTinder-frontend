import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/userSlice";
import feedReducer from "../feature/feedSlice";
import connectionsReducer from "../feature/connectionsSlice";
import requestsReducer from "../feature/requestsSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    connections: connectionsReducer,
    requests: requestsReducer,
  },
});

export default appStore;
