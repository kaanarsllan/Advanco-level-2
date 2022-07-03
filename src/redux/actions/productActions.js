import * as actionTypes from "./actionTypes";

export function getProductsSuccess(products) {
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
}

export function getProducts() {
  return function (dispatch) {
    debugger;

    return fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => dispatch(getProductsSuccess(json)));
  };
}
