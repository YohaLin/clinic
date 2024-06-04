import { configureStore } from "@reduxjs/toolkit";
import stepReducer from "./features/step/stepSlice";
import productReducer from "./features/product/productSlice";
import createSagaMiddleware from "redux-saga";
import productSaga from "./features/product/productSaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// configureStore 是 RTK 用來創建 store 的參數，中央倉儲的概念
const store = configureStore({
  reducer: { step: stepReducer, product: productReducer },
  // mount it on the Store
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(productSaga);

export default store;
