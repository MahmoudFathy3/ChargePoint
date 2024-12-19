// import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

export const UserDataSlice = createSlice({
  name: "userData",
  initialState: {
    User: {},
  },
  reducers: {
    setUser: async (state, action) => {
      // const storage = await AsyncStorage.getItem("email");

      // if (storage) {
      //   console.log(action.payload.find((user) => user.email === storage));

      //   state.User = action.payload.find((user) => user.email === storage);
      // }
      state.User = action.payload;
    },
  },
});

export const { setUser } = UserDataSlice.actions;

export default UserDataSlice.reducer;
