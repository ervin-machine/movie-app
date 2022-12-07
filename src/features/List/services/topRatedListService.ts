import { TMDB_KEY } from "../../../config/index"
import axiosClient from "../../../utils/axiosClient";

const TOP_10_MOVIES_ENDPOINT = `/movie/top_rated?api_key`
const TOP_10_TVSHOWS_ENDPOINT = `/tv/top_rated?api_key`
const SEARCH_MOVIES_ENDPOINT = `/search/movie?api_key`
const SEARCH_TVSHOWS_ENDPOINT = `/search/tv?api_key`

const topRatedListService = {
    async getTopRatedMovies(){
        var response=await axiosClient().get(`${TOP_10_MOVIES_ENDPOINT}=${TMDB_KEY}&language=en-US&page=1`);
        return response.data;
    },

    async getSearchedMovies(data: string){
        var response=await axiosClient().get(`${SEARCH_MOVIES_ENDPOINT}=${TMDB_KEY}&language=en-US&query=${data}&page=1`);
        return response.data;
    },

    async getTopRatedTVShow(){
        var response=await axiosClient().get(`${TOP_10_TVSHOWS_ENDPOINT}=${TMDB_KEY}&language=en-US&page=1`);
        return response.data;
    },

    async getSearchedTVShows(data: string){
        var response=await axiosClient().get(`${SEARCH_TVSHOWS_ENDPOINT}=${TMDB_KEY}&language=en-US&query=${data}&page=1`);
        return response.data;
    },
}

export default topRatedListService