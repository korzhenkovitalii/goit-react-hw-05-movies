import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchPopularMovies } from 'services/services';

export const Home = () => {
const [movies, setMovies] = useState([]);
  const location = useLocation();
  console.log(location)
  

  useEffect(() => {
    fetchPopularMovies().then(res => setMovies(res));
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <MoviesList movies={movies} location={location} />
    </>
  );
};
