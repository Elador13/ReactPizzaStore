import {SET_SIZE} from "./types";

const initialState = {
  selectedSize: 'normal'
}

export const sizeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIZE: {
      return {
        ...state,
        selectedSize: action.size
      }
    }
    default: return state
  }
}

//Action-creators:
export const setSize = (size) => ({type: SET_SIZE, size})
