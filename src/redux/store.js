import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer.js";
import { profileReducer } from "./reducers/profileReducer.js";
import { adminReducer } from "./reducers/adminReducer.js";
import { courseReducer } from "./reducers/courseReducer.js";
import { subscriptionReducer } from "./reducers/subscriptionReducer.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    admin: adminReducer,
    course: courseReducer,
    subscription: subscriptionReducer,
  },
});

export default store;

export const server = "https://skillsharebackendnew.onrender.com/api/v1";
