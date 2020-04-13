import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { store } from "./redux/storeConfig/store";
import "antd/dist/antd.css";
import * as serviceWorker from "./serviceWorker";
import LoadingSpinner from "./components/LoadingSpiner/LoadingSpinner";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Suspense fallback={<LoadingSpinner />}>
        <App />
      </Suspense>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
