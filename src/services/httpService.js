import axios from "axios";
import { toast } from "react-toastify";
import logger from "./logService";

// this module is responsible for making http requests to the backend

//get API URl vom .env file
// env.REACT_APP_API_URL gets replaced by build time according to what we build
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast.error("An unexpacted error occurred.");
  }
  return Promise.reject(error);
});

// to get ride of dependency to authService
export function setJwt(jwt) {
  // for configuring default headers - tells axios ti include this in the header request
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
