import {createSlice} from '@reduxjs/toolkit';
import {AuthState} from '../../types/auth';

const initialState: AuthState = {
  user: '',
  password: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {setUser} = authSlice.actions;

export default authSlice.reducer;
