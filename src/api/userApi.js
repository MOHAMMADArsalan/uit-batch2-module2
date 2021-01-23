import axios from "axios";

import { GET_USER } from "./urls";

export const getUserByName = (username) => {
  return new Promise((resolve, reject ) => {
    axios.get(`${GET_USER}${username}`)
    .then(resolve)
    .catch(reject)
  })
 };
