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
import Chats from "./containers/Chats";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Provider store={store}>
        <Chats />
      </Provider>
    );
  }
}

export default App;
