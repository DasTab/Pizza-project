import { combineReducers } from "redux";

import filterReducer from "./filters";
import pizzaReducer from "./pizzas";

const rootReducer = combineReducers({
  filters: filterReducer, // название filterReducer меняем на filter (ключ-значение)
  pizzas: pizzaReducer,
});

export default rootReducer;
