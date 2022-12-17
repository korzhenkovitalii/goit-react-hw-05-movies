import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesByName } from 'services/services';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
 

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search');

  const onFormSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.search.value;
    setSearchParams({ search: value });
  };

  useEffect(() => {
    if (!query) return;

    fetchMoviesByName(query).then(setMovies);
  }, [query]);

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          name="search"
          autoComplete="off"
        />

        <button>Search</button>
      </form>
      {movies && <MoviesList movies={movies} location={location} />}
    </>
  );
};
