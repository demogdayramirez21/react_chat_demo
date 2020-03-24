import React, { useState } from "react";

const InputMessage = props => {
  const [message, setMessage] = useState("");

  const handleKeyPressed = ({ key, target }) => {
    if (key === "Enter" && target.value) {
      props.handleSubmitMessage({ msg: target.value });
      setMessage("");
    }
  };
  return (
    <input
      className="textarea"
      type="text"
      placeholder="Escribir mensaje, pulsar enter"
      value={message}
      onChange={({ target }) => setMessage(target.value)}
      onKeyDown={event => handleKeyPressed(event)}
    />
  );
};

export default InputMessage;
