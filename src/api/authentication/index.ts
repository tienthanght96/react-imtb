import { appAxios } from "../appAxios";
import { authenticationPaths as apiPaths } from "./paths";
import { ENDPOINT_API_KEY } from "../../config/moviesAPIConfig";

export const authenticationApiServices = {
   requestNewToken: async () => {
     try {
       const { data } = await  appAxios.get(`${apiPaths.request_new_token}${ENDPOINT_API_KEY}`);
       return data;
     }
     catch (error) {
      throw  error;
     }
   },
  userLogin: async (request_token: string) => {
    try {
      const params = {
        "username": "patricklagger",
        "password": "31121995",
        "request_token": request_token
      };
      const { data } = await  appAxios.post(`${apiPaths.user_login_with_request_token}${ENDPOINT_API_KEY}`, { params });
      return data;
    }
    catch (error) {
      throw  error;
    }
  },
};
