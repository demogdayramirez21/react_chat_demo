import React from "react";
import { Provider } from "react-redux";
/**
 * Redux Store
 */
import store from "./store";
/**
 * Main CSS Styles
 */
import "./styles/main.css";
import Main from "./components/chat/Main";

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
