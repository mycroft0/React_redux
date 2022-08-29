import {useSelector, useDispatch} from "react-redux";
import {addTodo, decrement} from "./ReducerStore/counterActions";
import {increment} from "./ReducerStore/counterActions";
import {useState} from "react";

function App() {

    const selector = useSelector((s) => s.counter)
    const todo = useSelector((selector)=>selector.input)
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState("");

    const onChangeHandler = event => {
        setInputValue(event.target.value);
    };


    return (
        <div className="App">
            <div className="counter">
                <button onClick={() => dispatch(decrement())}>-</button>
                <span>{selector}</span>
                <button onClick={() => dispatch(increment())}>+</button>
            </div>

            <input id='input' type="text" onChange={onChangeHandler} value={inputValue}></input>
            <button id="btn" onClick={()=>dispatch(addTodo(inputValue))}>Add ToDo</button>
            <span>{todo}</span>

        </div>
    );
}

export default App;
