import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import MyApp from './App';
import Router from "./routes";
// import { store } from "./store/store";
ReactDOM.render(
  
    <MyApp />
 
  ,
  document.getElementById('root')
);
// import { store } from "./store/store";
// ReactDOM.render(
//   <Provider store={store}>
//     <MyApp />
// </Provider>,
//   document.getElementById('root')
// );

