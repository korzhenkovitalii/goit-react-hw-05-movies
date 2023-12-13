import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjBhYWM2ZmRkZTkwOGFjNGM0NTA1MDVkNjA1ZWE4ZCIsInN1YiI6IjYzODI3ZTE0MWIxNTdkMDA5NzE2MDcxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OTb6wn8kS8rg1yxjyH2-zb-9BXejRXQNWte851zlj0w';

async function getTrendingMovies() {
  try {
    const response = await axios.get('/trending/all/day?language=en-US', {
      headers: {
        Authorization: `Authorization: Bearer ${API_KEY}`,
        accept: 'application/json',
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

async function getMovieById(id) {
  try {
    const response = await axios.get(`/movie/${id}?language=en-US`, {
      headers: {
        Authorization: `Authorization: Bearer ${API_KEY}`,
        accept: 'application/json',
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {}
}

export { getTrendingMovies, getMovieById };
