import axios from "axios";
import { getServerURL } from "./localStorageUtils";

const BASE_URL = getServerURL();

export async function login(requestBody) {
    let result = {};
    
    await axios
      .post(`${BASE_URL}/users/login`, requestBody)
      .then((response) => {
        result = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error logging in user:", error);
      });
    return result;
  }
