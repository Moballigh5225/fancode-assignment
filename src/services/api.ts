import axios from "axios";

const API_KEY = process.env.API_KEY; //imbd key
const BASE_URL = "https://api.themoviedb.org/3/";

/*
 *Feteches a list of Movies
 *@params year the primary release years of movies to fetch.
 *@params page The page number of results to fetch.
 *return A promise that resolve to the fetched movie data
 */

export const fetchMoviesData = async (year: number, page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        sort_by: "popular.desc",
        primary_release_year: year,
        page: page,
        vote_count_gte: 100,
      },
    });
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
