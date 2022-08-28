import {counterReducer} from "./counterReducer";
import {combineReducers} from "redux";

const RootReducer =  combineReducers({
     counter: counterReducer
})

export default RootReducer