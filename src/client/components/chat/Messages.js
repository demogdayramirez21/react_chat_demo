import React from "react";
import { connect } from "react-redux";
import { Images } from "../../constants/images";

const buildMessages = messages => {
  return messages.map(message => {
    return (
      <li class="other">
        <div class="avatar">
          <img src={Images[message.receiver_id]} draggable="false" />
        </div>
        <div class="msg">
          <p>{message.message}</p>
          <time>{message.user.name}</time>
        </div>
      </li>
    );
  });
};

const Messages = props => {
  const { messages } = props;
  console.log(props);
  return <ol class="another-chat">{buildMessages(messages)}</ol>;
};

const mapStateToProps = state => ({
  messages: state.messages
});

export default connect(mapStateToProps, {})(Messages);
