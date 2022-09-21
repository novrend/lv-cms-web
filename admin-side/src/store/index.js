import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducer/productReducer";
import categoryReducer from "./reducer/categoryReducer";


const rootReducer = combineReducers({
  productReducer, categoryReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
