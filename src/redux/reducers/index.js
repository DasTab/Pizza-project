import { combineReducers } from "redux";

import filterReducer from "./filters";
import pizzaReducer from "./pizzas";
import cart from "./cart"

const rootReducer = combineReducers({
  filters: filterReducer, // название filterReducer меняем на filter (ключ-значение)
  pizzas: pizzaReducer,
  cart
});

export default rootReducer;
