// import { getExampleApi } from "@/api/example";
import { takeLatest, put, call } from "redux-saga/effects";
import { AUTH } from "./constants";

function* handlerLogin({ ms }) {
  try {
    const data = {};
    yield put({
      type: AUTH.AUTH_LOGIN_SUCCESS,
      data,
    });
  } catch (err) {
    console.log("err handlerGetExample", err);
  }
}

function* root() {
  yield takeLatest(AUTH.AUTH_LOGIN_SUCCESS, handlerLogin);
}

export default root;
