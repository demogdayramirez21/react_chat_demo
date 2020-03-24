import {
  GET_MESSAGES,
  SET_MESSAGES,
  SET_ONE_MESSAGE,
  SET_KEYWORDS_SEARCH,
  SET_EMPTY_SEARCH
} from "../../constants/actionTypes";

import { getChats } from "../../request/chats";
/**
 * @description Por cada cambio que haga en usuario dentro de field mensaje
 * este debera refrescarse en el estado
 * @param {String} keywords
 */
export const setKeywordsSearch = keywords => {
  return {
    type: SET_KEYWORDS_SEARCH,
    payload: keywords
  };
};
/**
 * @description Dejar vacio el field de mensaje
 */
export const setEmptySearch = () => {
  return {
    type: SET_EMPTY_SEARCH
  };
};

export const getMessages = () => {
  return {
    type: GET_MESSAGES
  };
};

/**
 * @description Guardar un arreglo de mensajes en el estadp
 * @param {Array} messages
 */
export const setMessages = messages => {
  return {
    type: SET_MESSAGES,
    payload: messages
  };
};

/**
 * @description Agregar a mensajes un mensaje
 * @param {Object} message
 */
export const setOneMessage = message => {
  return {
    type: SET_ONE_MESSAGE,
    payload: message
  };
};

/**
 * @description Primer Request para obtener mensajes
 */
export const fetchGetMessages = () => dispatch => {
  getChats().then(messages => {
    if (Array.isArray(messages)) {
      dispatch(setMessages(messages));
    }
  });
};
