import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postsReducer from "../features/posts/postsSlice";
import userRuducer from "../features/users/usersSlice";

// the Store stores the whole state of the application

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    users: userRuducer,
  },
});
