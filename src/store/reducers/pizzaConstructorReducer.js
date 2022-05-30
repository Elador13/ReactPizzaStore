import {
  FETCH_PIZZA_DATA,
  SET_DOUGH,
  SET_INGREDIENT_COUNT,
  SET_SAUCE,
  SET_SIZE,
  TOGGLE_LOADING
} from "./types";

const initialState = {
  loading: true,
  selectedDough: 'light',
  selectedSize: 'normal',
  selectedSauce: 'tomato',
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
        ...action.data,
        ingredientsTypes: action.data.ingredientsTypes.map(ingr => ({...ingr, count: 0}))
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
    case SET_SAUCE: {
      return {
        ...state,
        selectedSauce: action.sauce
      }
    }
    case SET_INGREDIENT_COUNT: {
      return {
        ...state,
        ingredientsTypes: state.ingredientsTypes.map(ingr => {
          if (ingr.value === action.payload.title) {
            return {...ingr, count: action.payload.count}
          }
          return ingr
        }),
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
export const setSauce = (sauce) => ({type: SET_SAUCE, sauce})
export const setIngredientCount = (title, count) => ({type: SET_INGREDIENT_COUNT, payload: {title, count}})
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
