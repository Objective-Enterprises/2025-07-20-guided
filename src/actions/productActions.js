import { GET_ALL_PRODUCTS_API } from "../constants/backend"
import { START_PRODUCTS, END_PRODUCTS, START_PRODUCT, END_PRODUCT } from "../constants/productActionConstants"
import axios from 'axios'

export const listProducts = () => async (dispatch) => {
  dispatch({ type: START_PRODUCTS })
  const response = await axios.get(GET_ALL_PRODUCTS_API)
  dispatch({ type: END_PRODUCTS, payload: response.data.data })
}

export const fetchProductDetails = (productId) => async (dispatch) => {
  dispatch({ type: START_PRODUCT })
  const url = `${GET_ALL_PRODUCTS_API}/${productId}`
  const response = await axios.get(url)
  dispatch({ type: END_PRODUCT, payload: response.data.data })
}
