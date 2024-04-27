import { configureStore } from "@reduxjs/toolkit";
import { usersDataReducer } from "./slices/usersData/userDataSlice";

const store = configureStore({
  reducer: {
    usersData: usersDataReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});

export default store;
