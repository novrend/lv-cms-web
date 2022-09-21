import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducer/productReducer";

const rootReducer = combineReducers({
  productReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
