import {combineReducers} from "redux";
import {doughReducer} from "./reducers/doughReducer";
import {sizeReducer} from "./reducers/sizeReducer";

export const rootReducer = combineReducers({
  dough: doughReducer,
  size: sizeReducer
})
