import React from 'react';
import {increment,decrement,reset} from "../features/counterSlice";
import { useSelector, useDispatch } from 'react-redux';
function Counter() {
    const dispatch = useDispatch();
    const value = useSelector((state)=> state.counter);
    const handleIncrement = () => {
        dispatch(increment());
    }
    const handleDecrement = () => {
        dispatch(decrement());
    }
    const handleReset = () => {
        dispatch(reset());
    }
    return <>
      <strong>Counter</strong>
      <p>Current Counter value {value}</p>
      <br /><br />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </>
}
export default Counter;
