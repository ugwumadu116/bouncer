import React from "react";
import ReactDOM from "react-dom";

import "./styles/index.css";
import "./styles/utils.css";
import "./styles/animate.css";
import store from "./store";
import Root from "./routes/Root";
import "izitoast/dist/js/iziToast.min";
import "izitoast/dist/css/iziToast.min.css";
// import register from "./serviceWorker";

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// register();
