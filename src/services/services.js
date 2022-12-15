import axios from 'axios';

const API_KEY = 'a7cdca3ac9a73d688c9dec2c3c2e067b';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

//Cписок самых популярных фильмов на сегодня
export async function fetchPopularMovies() {
  const response = await axios(`trending/movie/day`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
}

//Запрос полной информации о фильме для страницы кинофильма
export async function fetchMoviesById(id) {
  const response = await axios(`movie/${id}?api_key=${API_KEY}`);
  return response.data;
}

//Запрос информации о актёрском составе для страницы кинофильма
export async function fetchMovieCredits(id) {
  const response = await axios(
    `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
}

//Запрос обзоров для страницы кинофильма
export async function fetchMovieReviews(id) {
  const response = await axios(
    `movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
}

//Поиск фильмов по имени
export async function fetchMoviesByName(query) {
  const response = await axios(
    `search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  // console.log(response.data.results);
  return response.data.results;
}
