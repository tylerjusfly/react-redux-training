import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Toluwani James" },
  { id: 2, name: "Adams Joe" },
  { id: 3, name: "OmoLabake Joe" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    changeName: (state, action) => {
      const { id, name } = action.payload;
      const user = state.find((user) => user.id === id);
      user.name = "brooooo";

      console.log("done", id);
    },
  },
});

export const selectallUsers = (state) => state.users;

export const { changeName } = usersSlice.actions;

export default usersSlice.reducer;
