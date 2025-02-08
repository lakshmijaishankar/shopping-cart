import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CurrentUser} from './user.type';
import {createUserWithEmailAndPwd} from './userAsyncThunk';

export type UserState = {
  loading: boolean;
  user: Partial<CurrentUser>;
  error: any;
};

const userState: UserState = {
  loading: false,
  user: {},
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState: userState,
  reducers: {
    setInit(state, payload: PayloadAction<boolean>) {
      const {payload: isSignedIn} = payload;
      state.user.isSignedIn = isSignedIn;
    },
  },
  extraReducers: builder => {
    builder.addCase(createUserWithEmailAndPwd.pending, state => {
      state.loading = true;
    });
    builder.addCase(createUserWithEmailAndPwd.fulfilled, (state, action) => {
      const {payload} = action;
      state.loading = false;
      state.user = payload;
    });
    builder.addCase(createUserWithEmailAndPwd.rejected, (state, action) => {
      const {error} = action;
      state.loading = false;
      state.error = error;
    });
  },
});

export default userSlice.reducer;
export const {setInit} = userSlice.actions;
