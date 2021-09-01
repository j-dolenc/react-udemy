import ReactDOM from "react-dom";
import { Provider } from "react";
import "./index.css";
import App from "./App";
import store from './store/index';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
