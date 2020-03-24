import React, { Component } from "react";
import Messages from "./Messages";
import InputMessage from "./InputMessage";
import { connect } from "react-redux";
import { fetchGetMessages } from "../../redux/actions";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => this.props.fetchGetMessages();

  render() {
    console.log("===>", this.props);
    return (
      <div id="wrapper">
        <header id="header">
          <h1>
            <a href="index.html">Chat</a>
          </h1>
        </header>
        <div id="main">
          <article className="post">
            <Messages />
            <InputMessage />
          </article>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages
});

export default connect(mapStateToProps, { fetchGetMessages })(Main);
