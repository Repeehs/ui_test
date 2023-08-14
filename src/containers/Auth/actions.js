import { AUTH } from "./constants";

export const getExample = (ms) => ({
  type: AUTH.AUTH_LOGIN,
  ms: ms
});


export const getExampleSuccess = (data) => ({
  type: AUTH.AUTH_LOGIN_SUCCESS,
  data,
});

