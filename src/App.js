import {useSelector, useDispatch} from "react-redux";
import {decrement} from "./ReducerStore/counterActions";
import {increment} from "./ReducerStore/counterActions";
import {RootReducer} from "./ReducerStore/RootReducer";



function App() {

  const selector = useSelector((s)=>s.counter)
  const dispatch = useDispatch();

  return (
    <div className="App">
        <button onClick={()=>dispatch(decrement())}>-</button>
        <span>{selector}</span>
      <button onClick={()=>dispatch(increment())}>+</button>
    </div>
  );
}

export default App;
