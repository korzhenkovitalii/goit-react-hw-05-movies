import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { fetchPopularMovies } from 'services/services';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchPopularMovies().then(res => setMovies(res));
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.title}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location.pathname }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
