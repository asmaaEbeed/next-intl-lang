import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the user state interface
interface UserState {
  id: string | null;
  email: string | null;
  name: string | null;
  isAuthenticated: boolean;
  role: "admin" | "user" | null;
  language: "en" | "ar";
}

// Initial state
const initialState: UserState = {
  id: null,
  email: null,
  name: null,
  isAuthenticated: false,
  role: null,
  language: "en",
};

// Create the user slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<UserState>>) => {
      return { ...state, ...action.payload };
    },
    setLanguage: (state, action: PayloadAction<"en" | "ar">) => {
      state.language = action.payload;
    },
    logout: (state) => {
      console.log(state);
      return initialState;
    },
  },
});

// Export actions
export const { setUser, setLanguage, logout } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
