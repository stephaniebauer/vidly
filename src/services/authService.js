import jwtDecode from "jwt-decode";
import httpService from "./httpService";

const API_ENDPOINT = "/auth";
const TOKEN_KEY = "token";

httpService.setJwt(getJwt());

export async function login(email, password) {
  const { data: jwt } = await httpService.post(API_ENDPOINT, {
    email,
    password,
  });
  // store in local storage
  localStorage.setItem(TOKEN_KEY, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(TOKEN_KEY, jwt);
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(TOKEN_KEY);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(TOKEN_KEY);
}

// with default export you can use an import statment to import an object which has these methods
export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};
