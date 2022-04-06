import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configStore';
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configStore";

//그 다음에는 App.js에서 원래 BrowserRouter와 Route를 써서 컴포넌트에 주입하던 history를 ConnectedRouter를 써서 리덕스랑 같은 history를 사용하도록 해줄게요. ( 히스토리를 공유하겠죠!)

ReactDOM.render(
  <Provider store={store}> {/*store 주입*/}
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
