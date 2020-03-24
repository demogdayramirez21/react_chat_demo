import {
  SET_ONE_MESSAGE,
  SET_LOGOUT,
  SET_LOGIN
} from "../../constants/actionTypes";

export const setLogin = payload => ({
  type: SET_LOGIN,
  payload
});

export const setLogout = () => ({
  type: SET_LOGOUT
});

/**
 * @description Agregar un mensaje
 * @param {Object} message
 */
export const setOneMessage = message => {
  return {
    type: SET_ONE_MESSAGE,
    payload: message
  };
};
