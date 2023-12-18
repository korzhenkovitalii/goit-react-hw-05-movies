import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getMovieById } from '../../API';
import { useEffect, useState } from 'react';

import {
  Back,
  MovieInfoWrapper,
  Poster,
  Genre,
  Link,
  MainMovieDescription,
  AdditionalMovieDescription,
} from './MovieId.styled';

export const MovieId = () => {
  const [movieById, setMovieById] = useState(null);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const { id } = useParams();

  useEffect(() => {
    getMovieById(id).then(data => setMovieById(data));
  }, [id]);

  return (
    <>
      <Back to={backLinkHref}>Go back</Back>
      {movieById && (
        <>
          <MovieInfoWrapper>
            <Poster
              src={`https://image.tmdb.org/t/p/w200/${movieById.poster_path}`}
              alt={movieById.name}
            />
            <MainMovieDescription>
              <h2>{movieById.title || movieById.name}</h2>
              <div>User score: {movieById.popularity}</div>
              <h3>Overview</h3>
              <div>{movieById.overview}</div>
              <h3>Genres</h3>
              <div>
                {movieById.genres.map(el => (
                  <Genre key={el.id}>{el.name}</Genre>
                ))}
              </div>
            </MainMovieDescription>
          </MovieInfoWrapper>
          <AdditionalMovieDescription>
            <h3>Additional information</h3>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
            <Outlet />
          </AdditionalMovieDescription>
        </>
      )}
    </>
  );
};
