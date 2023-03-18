import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { deleteCookie, setCookie } from "../../commom/cookie";
import { AlertError } from "../../component/alert/Alert";
import { Authenticate, User } from "../../enum/author";

export interface InitialStateAuthor {
  isAuthorized: boolean
  username: string
  isLoading: boolean
}

const initialState: InitialStateAuthor = {
  isAuthorized: false,
  username: "",
  isLoading: false
};

const Authorized = createSlice({
  name: "authorized",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoading = true;
      if (action.payload.username === User.username && action.payload.password === User.password) {
        state.isLoading = false;
        state.isAuthorized = true;
        state.username = action.payload.username;
        setCookie(Authenticate.AUTH, action.payload.username, 1);
        return;
      }
      state.isLoading = false;
      AlertError({ description: "Username or password is invaild" });
    },
    getLogin: (state, action) => {
      state.isAuthorized = true;
      state.username = action.payload;
    },
    logout: (state) => {
      state.isAuthorized = false;
      state.username = "";
      deleteCookie(Authenticate.AUTH);
    }
  }
});

export const getAuthorStore = (state: RootState) => state.authorized;
export const { login, logout, getLogin } = Authorized.actions;
export default Authorized.reducer;
