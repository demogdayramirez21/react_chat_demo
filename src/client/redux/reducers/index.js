import {
  SET_LOGIN,
  SET_LOGOUT,
  GET_MESSAGES,
  SET_MESSAGES,
  SET_ONE_MESSAGE,
  SET_KEYWORDS_SEARCH,
  SET_EMPTY_SEARCH
} from "../../constants/actionTypes";

const initialState = {
  messages: [],
  username: "",
  isLoged: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN: {
      const { username } = action.payload;
      return {
        ...state,
        username,
        isLogged: true
      };
    }

    case SET_LOGOUT: {
      return {
        ...state,
        username: "",
        isLoged: false
      };
    }
    // case SET_EMPTY_SEARCH: {
    //   state.search = "";
    //   return {
    //     ...state
    //   };
    // }
    // case SET_KEYWORDS_SEARCH: {
    //   state.search = action.payload;
    //   return {
    //     ...state
    //   };
    // }
    // case GET_MESSAGES: {
    //   return { ...state };
    // }
    // case SET_MESSAGES: {
    //   return {
    //     ...state,
    //     messages: action.payload
    //   };
    // }
    case SET_ONE_MESSAGE: {
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    }
    default: {
      return { ...state };
    }
  }
}
