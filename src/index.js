import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import App from "./App";
import "./styles/index.scss";
import rootReducer from "./reducers";
import { getFiles } from "./actions/file.action";
import { getUser } from "./actions/user.action";
import { getCategories } from "./actions/category.action";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
//Au démarrage de l'appli, récupère l'utilisateur et les fiches
store.dispatch(getFiles());
store.dispatch(getUser());
store.dispatch(getCategories());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
