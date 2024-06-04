import { call, put, takeLatest } from "redux-saga/effects";
import { getSingleStoreAction } from "./productSlice";
import { ProductType } from "../../../types/product";

function productFetch() {
  return fetch(`https://fakestoreapi.com/products/1`).then((response) =>
    response.json()
  );
}

function* getProductSaga() {
  try {
    const product: ProductType = yield call(productFetch);
    yield put(getSingleStoreAction(product));
  } catch (error) {
    console.error("Failed to fetch product", error);
    // 可以 dispatch 一個錯誤 action 如果需要
  }
}

function* productSaga() {
  yield takeLatest(getSingleStoreAction, getProductSaga);
}

export default productSaga;
