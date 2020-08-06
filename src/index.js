import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore } from "redux";


const initialState = {
  count: 1,
  color: 'blue',
  boxColors: null,
}

function reducer(state = initialState, action) {
  //switch case
  switch (action.type) {
    case "CHANGE_COLOR":
      state.color = action.payload;
      break;

    case "INCREMENT":
      state.count++;
      break;

    case "DECREMENT":
      state.count--;
      if (state.count <= 0) {
        state.count = 0
      }
      break;
    case "RESET":
      state.count = 0;
      break;
    
    // case "CHANGE_SPECIFIC_BOX":
    //   const boxColors = state.boxColors
    //   boxColors[action.payload.index] = action.payload.color
    //   // boxColors: boxColors
    //   break;
  }



  return { ...state } // copy value of state, make new state
}


const store = createStore(reducer);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
