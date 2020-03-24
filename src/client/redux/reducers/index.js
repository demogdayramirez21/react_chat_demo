import {
  SET_LOGIN,
  SET_LOGOUT,
  SET_ONE_MESSAGE
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
