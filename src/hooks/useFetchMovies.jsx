import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesById } from 'services/services';

export const useFetchMovies = () => {
  const [movie, setMovie] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchMoviesById(id).then(setMovie);
  }, [id]);

  console.log(movie);
  return [movie];
};
