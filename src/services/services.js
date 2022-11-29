import axios from 'axios';

const API_KEY = 'a7cdca3ac9a73d688c9dec2c3c2e067b';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchPopularMovies() {
  const response = await axios(`trending/movie/day`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results
}
 

export async function fetchMoviesById(id) {
  const response = await axios(`/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
}