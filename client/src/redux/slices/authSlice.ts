import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "../../models/UserModel";
import { loginUser } from "../api/user";

export interface AuthState {
  user: UserModel | null;
  loadingState: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: AuthState = {
  user: null,
  loadingState: "idle", // "idle" | "pending" | "succeeded" | "failed";
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder: any) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    builder.addCase(loginUser.pending, (state: AuthState) => {
      state.loadingState = "pending";
    }),
      builder.addCase(loginUser.rejected, (state: AuthState) => {
        state.loadingState = "pending";
      }),
      builder.addCase(loginUser.fulfilled, (state: AuthState, action: any) => {
        state.loadingState = "idle";
        state.user = action.payload;
      });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
