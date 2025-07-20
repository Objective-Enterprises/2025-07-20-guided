import { START_PRODUCTS, END_PRODUCTS, START_PRODUCT, END_PRODUCT } from "../constants/productActionConstants"

export const listProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case START_PRODUCTS: {
      const newState = { ...state, loading: true, products: [] }
      return newState
    }
    case END_PRODUCTS: {
      const newState = { ...state, loading: false, products: action.payload }
      return newState
    }
    default: {
      return state
    }
  }
}

export const fetchProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case START_PRODUCT: {
      const newState = { ...state, loading: true, product: {} }
      return newState
    }
    case END_PRODUCT: {
      const newState = { ...state, loading: true, product: action.payload }
      return newState
    }
    default: {
      return state
    }
  }
}