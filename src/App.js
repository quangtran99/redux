import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from "./components/Box"

function App() {
  const boxColors = useSelector(state => state.boxColors);
  const dispatch = useDispatch()
  const count = useSelector((state) => state.count)

  const increment = () => {
    dispatch({ type: "INCREMENT"})
  }

  const decrement = () => {
    dispatch({ type: "DECREMENT" })
  }

  const reset = () => {
    dispatch({ type: "RESET" })
  }
  const renderBoxes = () => {
    let boxArray = [];

    for (let i = 0; i < count; i++) {
      boxArray.push(<Box number={i} />);
    }
    return boxArray;
  };

  const changeColor = (e) => {
    dispatch({ type: "CHANGE_COLOR", payload: e.target.value })
  }

  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={() => increment()}>increment</button>
      <button onClick={() => decrement()}>decrement</button>
      <button onClick={() => reset()}>reset</button>
      <input
          onChange={e =>
            dispatch({ type: "CHANGE_COLOR", payload: e.target.value })
          }
        ></input>

    {renderBoxes() }
    </div>
  );
}

export default App;
