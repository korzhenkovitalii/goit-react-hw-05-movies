import { useParams } from 'react-router-dom';
import { getMovieById } from '../../API';
import { useEffect, useState } from 'react';

import { MovieInfoWrapper, Poster, MovieDiscription } from './MovieId.styled';

export const MovieId = () => {
  const [movieById, setMovieById] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getMovieById(id).then(data => setMovieById(data));
  }, [id]);

  return (
    <>
      <button type="button">Go back</button>
      {movieById && (
        <>
          <MovieInfoWrapper>
            <Poster
              src={`https://image.tmdb.org/t/p/w200/${movieById.poster_path}`}
              alt={movieById.name}
            />
            <MovieDiscription>
              <h3>{movieById.title || movieById.name}</h3>
              <div>User score: {movieById.popularity}</div>
              <h3>Overview</h3>
              <div>{movieById.overview}</div>
              <h3>Genres</h3>
              <div>
                {movieById.genres.map(el => (
                  <span key={el.id} style={{ marginRight: '10px' }}>
                    {el.name}
                  </span>
                ))}
              </div>
            </MovieDiscription>
          </MovieInfoWrapper>
          <div
            style={{
              padding: '8px 0',
              borderTop: '2px solid rgba(0,0,0,0.5)',
              borderBottom: '2px solid rgba(0,0,0,0.5)',
            }}
          >
            Additional information
          </div>
        </>
      )}
    </>
  );
};
