import React from "react";
// import { Images } from "../../constants/images";

const buildMessages = (messages, username) => {
  return messages.map(message => {
    return (
      <li
        className={username === message.username ? "me-chat" : "another-chat"}
      >
        <div className="avatar">
          {/* <img src={Images[message.receiver_id]} draggable="false" /> */}
        </div>
        <div className="msg">
          <p>{message.msg}</p>
          <time>{message.username}</time>
        </div>
      </li>
    );
  });
};

const Messages = props => {
  const { messages, username } = props;
  console.log(props);
  return <ol className="chat">{buildMessages(messages, username)}</ol>;
};

export default Messages;
