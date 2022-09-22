import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducer/productReducer";
import categoryReducer from "./reducer/categoryReducer";
import logger from "./middleware/logger";

const rootReducer = combineReducers({
  productReducer, categoryReducer
})

let store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
