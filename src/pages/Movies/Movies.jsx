import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByName } from 'services/services';

export const Movies = () => {
  const [movies, setMovies] = useState([]);

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

          // value={searchQuery}
          // onChange={handleSearchQueryChange}
        />

        <button>Search</button>
      </form>
      <ul>
        {movies.map(item => (
          <li key={item.id}>{item.original_title}</li>
        ))}
      </ul>
    </>
  );
};
