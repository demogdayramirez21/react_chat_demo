import React, { Component } from "react";
import Messages from "../components/Chats/Messages";
import InputMessage from "../components/Chats/InputMessage";
import Register from "../components/Register";
import { connect } from "react-redux";
import sicketIO from "socket.io-client";

import { setLogin, setOneMessage } from "../redux/actions";

const client = sicketIO.connect("http://localhost:3001");

class Chats extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    const { onSetLogin, onSetOneMessage } = this.props;
    client.on("INIT", username => onSetLogin({ username }));
    client.on("NOTIFY", msg => onSetOneMessage(msg));
  };

  handleSubmitMessage = ({ msg, date }) => {
    const { username } = this.props;
    client.emit("NOTIFY", { username, msg, date: new Date().toISOString() });
  };

  handleEnterChat = username => {
    client.emit("INIT", { username });
  };

  render() {
    const { isLogged, messages, username } = this.props;
    if (isLogged)
      return (
        <div id="wrapper">
          <div id="main">
            <article className="post">
              <Messages username={username} messages={messages} />
              <InputMessage handleSubmitMessage={this.handleSubmitMessage} />
            </article>
          </div>
        </div>
      );
    else return <Register handleEnterChat={this.handleEnterChat} />;
  }
}

const mapStateToProps = state => ({
  username: state.username,
  messages: state.messages,
  isLogged: state.isLogged
});

const mapDispatchToProps = dispatch => ({
  onSetLogin: payload => dispatch(setLogin(payload)),
  onSetOneMessage: payload => dispatch(setOneMessage(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
