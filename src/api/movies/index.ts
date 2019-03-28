import { appAxios } from "../appAxios";
import { moviesPaths as apiPaths } from "./paths";
import { ENDPOINT_API_KEY, API_KEY } from "../../config/moviesAPIConfig";

export const MoviesApiServices = {
   getLatestedMovies: async () => {
     try {
       const { data } = await  appAxios.get(`${apiPaths.movie_latest}${ENDPOINT_API_KEY}`);
       return data;
     }
     catch (error) {
      throw  error;
     }
   },
  getPopularMovies: async (page: number) => {
    try {
      const params = {
        api_key: API_KEY,
        language: "en-US",
        page
      };
      const { data } = await  appAxios.get(apiPaths.movie_popular, { params });
      return data;
    }
    catch (error) {
      throw  error;
    }
  },
  getTopRatedMovies: async (page: number) => {
    try {
      const params = {
        api_key: API_KEY,
        language: "en-US",
        page
      };
      const { data } = await  appAxios.get(apiPaths.movie_top_rated, { params });
      return data;
    }
    catch (error) {
      throw  error;
    }
  },
  getTopUpCommingMovies: async (page: number) => {
    try {
      const params = {
        api_key: API_KEY,
        language: "en-US",
        page
      };
      const { data } = await  appAxios.get(apiPaths.movie_up_comming, { params });
      return data;
    }
    catch (error) {
      throw  error;
    }
  },
  getNowPlayingMovies: async (page: number) => {
    try {
      const params = {
        api_key: API_KEY,
        language: "en-US",
        page
      };
      const { data } = await  appAxios.get(apiPaths.movie_now_playing, { params });
      return data;
    }
    catch (error) {
      throw  error;
    }
  },
};
