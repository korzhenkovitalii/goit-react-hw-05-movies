import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjBhYWM2ZmRkZTkwOGFjNGM0NTA1MDVkNjA1ZWE4ZCIsInN1YiI6IjYzODI3ZTE0MWIxNTdkMDA5NzE2MDcxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OTb6wn8kS8rg1yxjyH2-zb-9BXejRXQNWte851zlj0w';
const headers = {
  headers: {
    Authorization: `Authorization: Bearer ${API_KEY}`,
    accept: 'application/json',
  },
};

async function getTrendingMovies() {
  try {
    const response = await axios.get(
      '/trending/all/day?language=en-US',
      headers
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

async function getMovieById(id) {
  try {
    const response = await axios.get(`/movie/${id}?language=en-US`, headers);

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function getMovieCast(id) {
  try {
    const response = await axios.get(
      `/movie/${id}/credits?language=en-US`,
      headers
    );
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
}

async function getMovieReview(id) {
  try {
    const response = await axios.get(
      `movie/${id}/reviews?language=en-US&page=1`,
      headers
    );
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

async function getMovieByQuery(query) {
  try {
    const response = await axios.get(
      `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      headers
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

export {
  getTrendingMovies,
  getMovieById,
  getMovieCast,
  getMovieReview,
  getMovieByQuery,
};
