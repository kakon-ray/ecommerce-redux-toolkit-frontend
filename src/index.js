import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import ProductsReducer, { productsFetch } from "./features/ProductSlice";
import { productsApi } from "./features/productsApi";
import CartReducer from "./features/CartSlice";
import store from "./store";

// const store = configureStore({
//   reducer: {
//     products: ProductsReducer,
//     cart: CartReducer,
//     [productsApi.reducerPath]: productsApi.reducer,
//   },

//   middleware: (getDefaultMiddleware) => {
//     return getDefaultMiddleware().concat(productsApi.middleware);
//   },
// });

// store.dispatch(productsFetch());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      ,
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
