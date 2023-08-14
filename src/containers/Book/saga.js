// import { getExampleApi } from "@/api/example";
import { takeLatest, put, call } from "redux-saga/effects";
import { BOOK } from "./constants";
import { getBook, getBookSuccess } from "./actions";
import { createBookApi, getListBookApi } from "../../api/Books";

function* handlerGetListBooks({ page }) {
  try {
    const res = yield call(getListBookApi, page);
    yield put(getBookSuccess(res));
  } catch (err) {
    console.log("err handlerGetListBooks", err);
  }
}

function* handlerCreateBook({ data }) {
  try {
    yield call(createBookApi, data);
    const res2 = yield call(getListBookApi);
    console.log('res2res2', res2)
    yield put(getBookSuccess(res2));
  } catch (err) {
    console.log("err handlerCreateBook", err);
  }
}
function* root() {
  yield takeLatest(BOOK.BOOK_GET_LIST, handlerGetListBooks);
  yield takeLatest(BOOK.BOOK_CREATE, handlerCreateBook);
}

export default root;
