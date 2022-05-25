import {combineReducers} from "redux";
import {pizzaConstructorReducer} from "./reducers/pizzaConstructorReducer";

export const rootReducer = combineReducers({
  pizzaConstructor: pizzaConstructorReducer
})
