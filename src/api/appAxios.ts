import axios from 'axios';
import {API_ENDPOINT} from "../config/moviesAPIConfig";

const instanceAppAxios = axios.create({
  baseURL: API_ENDPOINT
});

export { instanceAppAxios as appAxios };