import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./lib/store/index";
import { Provider } from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import { BrowserRouter } from "react-router-dom";

import "./lib/styles/styles.scss";
import "masonry-layout";

import SmoothScroll from "smooth-scroll";
const isSafari =
  navigator.vendor.match(/apple/i) &&
  !navigator.userAgent.match(/crios/i) &&
  !navigator.userAgent.match(/fxios/i) &&
  !navigator.userAgent.match(/Opera|OPT\//);
if (isSafari) {
  new SmoothScroll('a[href*="#"]');
}

ReactDOM.render(
  <Provider store={store}>
    <ToastProvider
      autoDismiss
      autoDismissTimeout={6000}
      placement={"bottom-center"}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToastProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
