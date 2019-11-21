import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

//-- Service Worker --//
import * as serviceWorker from "./serviceWorker";

//-- Components --//
import App from "./App";

//-- Store --//
import { store } from "./redux/store/store";

//-- Styles --//
import 'bootstrap/dist/css/bootstrap.min.css';
import "tachyons";
import "./index.css";

//-------------------------------------------------------------//
//-------------------------------------------------------------//

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
