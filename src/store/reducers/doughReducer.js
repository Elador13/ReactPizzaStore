import {SET_DOUGH} from "./types";

const initialState = {
  selectedDough: 'light'
}

export const doughReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DOUGH: {
      return {
        ...state,
        selectedDough: action.dough
      }
    }
    default: return state
  }
}

//Action-creators:
export const setDough = (dough) => ({type: SET_DOUGH, dough})
