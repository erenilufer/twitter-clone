import { createSlice } from "@reduxjs/toolkit";
import { UserModel } from "../../models/UserModel";
import { loginUser, registerUser } from "../api/user";

interface ErrorState {
  message: string;
  code: number;
}
export interface AuthState {
  user: UserModel | null;
  loadingState: "idle" | "pending" | "succeeded" | "failed";
  error: ErrorState | null;
}

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem("user")!) || null,
  loadingState: "idle",
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      console.log(action.payload);
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logoutUser: (state, action) => {
      console.log(state);
      state.user = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
  extraReducers(builder: any) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    builder.addCase(loginUser.pending, (state: AuthState) => {
      state.loadingState = "pending";
    }),
      builder.addCase(loginUser.rejected, (state: AuthState, action: any) => {
        state.loadingState = "idle";
        state.error = action.payload;
      }),
      builder.addCase(loginUser.fulfilled, (state: AuthState, action: any) => {
        state.loadingState = "idle";
        if (action.payload?.error) {
          state.error = action.payload.error;
          console.log(state.error);
        } else {
          console.log(action.payload);
          state.user = action.payload;
          state.error = null;
          localStorage.setItem("user", JSON.stringify(action.payload));
        }
      }),
      builder.addCase(registerUser.pending, (state: AuthState) => {
        state.loadingState = "pending";
      }),
      builder.addCase(
        registerUser.rejected,
        (state: AuthState, action: any) => {
          state.error = action.payload;
          state.loadingState = "idle";
        }
      ),
      builder.addCase(
        registerUser.fulfilled,
        (state: AuthState, action: any) => {
          state.loadingState = "idle";
          console.log(action.payload);
        }
      );
  },
});

export const { setUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
