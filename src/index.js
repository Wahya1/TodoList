import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
/* <React.StrictMode> <App /> </React.StrictMode>  strict mode is a dev mode used to detect side effects like anything that happens 
outside of React’s main rendering process 
like fetching data or event listners or timers ....
*/
root.render(
  <Provider store={store} >

      <App />

  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
