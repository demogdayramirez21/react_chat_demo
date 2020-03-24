import React from "react";
import { connect } from "react-redux";
import {
  setOneMessage,
  setKeywordsSearch,
  setEmptySearch
} from "../../redux/actions";

const InputMessage = props => {
  return (
    <input
      className="textarea"
      type="text"
      placeholder="Type here!"
      value={props.search}
      onChange={event => props.setKeywordsSearch(event.target.value)}
      onKeyDown={event => handleKeyPressed(event, props)}
    />
  );
};

const handleKeyPressed = ({ key, target }, props) => {
  if (key === "Enter" && target.value) {
    props.setOneMessage({
      message: target.value,
      receiver_id: 1,
      user: {
        id: 2,
        name: "Pickle Rick",
        username: "pickle_rick"
      }
    });
    props.setEmptySearch();
  }
};

const mapStateToProps = state => ({
  messages: state.messages,
  search: state.search
});

export default connect(
  mapStateToProps,
  { setOneMessage, setKeywordsSearch, setEmptySearch }
)(InputMessage);
