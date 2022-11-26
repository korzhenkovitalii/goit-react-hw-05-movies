import { useState, useEffect } from 'react';
import { fetchPopularMovies } from 'services/services';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies().then(res => setMovies(res));
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.title}>{movie.title}</li>
        ))}
      </ul>
    </>
  );
};
