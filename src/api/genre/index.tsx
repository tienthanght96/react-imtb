import { appAxios } from "../appAxios";
import { genrePaths as apiPaths } from "./paths";
import { API_KEY } from "../../config/moviesAPIConfig";

export const GenerApiServices = {
   getGenerMovies: async () => {
     try {
      const params = {
        api_key: API_KEY,
        language: "en-US",
      };
       const { data } = await  appAxios.get(apiPaths.genre_list_movies, { params });
       return data;
     }
     catch (error) {
      throw  error;
     }
   },
  getGenerTVs: async () => {
    try {
      const params = {
        api_key: API_KEY,
        language: "en-US",
      };
      const { data } = await  appAxios.get(apiPaths.genre_list_tv, { params });
      return data;
    }
    catch (error) {
      throw  error;
    }
  },
};
