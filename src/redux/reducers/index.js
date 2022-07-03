import { combineReducers } from "redux";
import productListReducer from "./productListReducer";
import cartReducer from "./cartReducer";
const rootReducer = combineReducers({
    productListReducer,
    cartReducer
})


export default rootReducer;