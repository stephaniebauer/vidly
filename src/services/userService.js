import httpService from "./httpService";

const API_ENDPOINT = "/users";

export function register(user) {
  return httpService.post(API_ENDPOINT, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}

export default {
  register,
};
