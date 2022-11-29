import { useFetchMovies } from 'hooks/useFetchMovies';

export const MovieById = () => {
  const movie = useFetchMovies();

  return <div>{movie}</div>;
};
