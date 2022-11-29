import { useFetchMovies } from 'hooks/useFetchMovies';
import { Outlet } from 'react-router-dom';

export const MovieById = () => {
  const movie = useFetchMovies();

  return (
    movie && (
      <div style={{ display: 'flex' }}>
        <div>
          <button type="button">Go back</button>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            height={`600px`}
            alt="poster"
          />
        </div>
        <div>
          <h2>{movie.title}</h2>
          <p>User Score: {movie.vote_average * 10} % </p>
          <h3>Overview:</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map(genres => genres.name)}</p>
        </div>
      </div>
    )
  );
};
