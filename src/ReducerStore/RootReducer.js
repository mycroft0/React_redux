import {counterReducer} from "./counterReducer";
import {ToDoReducer} from "./ToDoReducer"
import {combineReducers} from "redux";

const RootReducer =  combineReducers({
     counter: counterReducer,
     input: ToDoReducer
})

export default RootReducer