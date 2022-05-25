import {FETCH_PIZZA_DATA, SET_DOUGH, SET_SIZE, TOGGLE_LOADING} from "./types";

const initialState = {
  loading: true,
  selectedDough: 'light',
  selectedSize: 'normal',
  doughTypes: [],
  sizeTypes: [],
  sauceTypes: [],
  ingredientsTypes: [],
}

export const pizzaConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PIZZA_DATA: {
      return {
        ...state,
        ...action.data
      }
    }
    case SET_DOUGH: {
      return {
        ...state,
        selectedDough: action.dough
      }
    }
    case SET_SIZE: {
      return {
        ...state,
        selectedSize: action.size
      }
    }
    case TOGGLE_LOADING: {
      return {
        ...state,
        loading: action.boolean
      }
    }
    default: return state
  }
}

//Action-creators:
export const setDough = (dough) => ({type: SET_DOUGH, dough})
export const setSize = (size) => ({type: SET_SIZE, size})
export const toggleLoading = (boolean) => ({type: TOGGLE_LOADING, boolean})

//Thunks:
export function fetchPizzaData() {
  return async (dispatch) => {
    dispatch(toggleLoading(true))
    const response = await fetch('http://localhost:5000/pizzaData')
    const json = await response.json()
    dispatch({
      type: FETCH_PIZZA_DATA,
      data: json
    })
    dispatch(toggleLoading(false))
  }
}
