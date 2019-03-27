import axios, { AxiosResponse, AxiosError } from "axios";
import { API_ENDPOINT } from "../config/moviesAPIConfig";

const instanceAppAxios = axios.create({
  baseURL: API_ENDPOINT
});

instanceAppAxios.interceptors.response.use(
  function(response: AxiosResponse) {
    return response;
  },
  function(error: AxiosError) {
    if (error && error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({ status_code: 404, status_message: "Not Found" });
  }
);

export { instanceAppAxios as appAxios };
