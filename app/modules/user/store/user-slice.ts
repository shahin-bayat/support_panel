import { createSlice } from '@reduxjs/toolkit';

interface User {
  isAuthenticated: boolean;
  profile?: unknown;
}

const initialState: User = {
  isAuthenticated: false,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserProfile(state, action) {
      state.profile = action.payload;
    },
  },
});

export const { setUserProfile } = userSlice.actions;

export default userSlice.reducer;
