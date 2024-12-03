import axios from "axios";
import { getAuthenticationToken, getServerURL } from "./localStorageUtils";

const BASE_URL = getServerURL();

export async function login(requestBody) {
    let result = {};
    
    await axios
      .post(`${BASE_URL}/users/login`, requestBody)
      .then((response) => {
        result = response.data;
        if (response.data.token) {
          localStorage.setItem("authToken", response.data.token); 
        }
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error logging in user:", error);
      });
    return result;
  }

  export async function addContentOwner(requestBody) {
    let result = {};
    const token = getAuthenticationToken();

    if (!token) {
      console.error("No authentication token found!");
      return result;
    }

    await axios
      .post(`${BASE_URL}/users`, requestBody, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        result = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error logging in user:", error);
      });
    return result;
}

export async function getContentOwners() {
  let result = [];
  const token = getAuthenticationToken();

    if (!token) {
        console.error("No authentication token found!");
        return result;
    }

  await axios
    .get(`${BASE_URL}/users/getAllContentOwners`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      result = response.data;
    })
    .catch((error) => {
      if (error.response) {
        console.error("Status:", error.response.status); // e.g., 401
        console.error("Data:", error.response.data); // Error details from the server
      }
    });

  return result;
}