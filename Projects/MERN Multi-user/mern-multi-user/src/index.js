import React from 'react';
//import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Route traffic between device and internet
import { BrowserRouter } from "react-router-dom"

//Provider makes redux store available to nested components 
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"

import store from './store';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
