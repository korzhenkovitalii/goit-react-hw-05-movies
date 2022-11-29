import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesById } from 'services/services';

export const useFetchMovies = () => {
  const [movie, setMovies] = useState(null);

  const { id } = useParams();
  

  useEffect(() => {
    fetchMoviesById(id).then(res => (console.log(res), setMovies(res)));
    fetchMoviesById(id).then(res => (console.log(res), setMovies(res)));
  }, [id]);
  
  return movie;
};
