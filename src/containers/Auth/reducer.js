import { AUTH } from "./constants";

const initialState = {
  data: {},
  isLogin: false
};

export default function app(state = initialState, action)  {
  switch (action.type) {
    case AUTH.AUTH_LOGIN_SUCCESS:
      state.isLogin = true;
      return state
    default:
      return state;
  }
}
