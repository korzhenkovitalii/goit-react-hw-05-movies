import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  fetchMovieCredits,
  fetchMovieReviews,
  fetchMoviesById,
} from 'services/services';

export const useFetchMovies = () => {
  const [movie, setMovie] = useState(null);
  const [casts, setCasts] = useState('');
  const [reviews, setReviews] = useState('');

  const { id } = useParams();

  useEffect(() => {
    fetchMoviesById(id).then(setMovie);
    fetchMovieCredits(id).then(setCasts);
    fetchMovieReviews(id).then(setReviews);
  }, [id]);

  console.log(casts);
  return [movie, casts, reviews];
};
