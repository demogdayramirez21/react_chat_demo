import axios from "axios";
import { GET_CHATS } from "../constants/host";

export const getChats = () => {
  return new Promise(resolve => {
    axios
      .get(GET_CHATS)
      .then(data => {
        if (data && data.data && data.data.messages) {
          resolve(data.data.messages);
        } else if (data && data.messages) {
          resolve(data.messages);
        } else resolve([]);
      })
      .catch(() => []);
  });
};
