import { useFetchMovies } from 'hooks/useFetchMovies';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  MovieImage,
  Button,
  MovieInformation,
  Wrapper,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const [movie] = useFetchMovies();

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  return (
    movie && (
      <>
        <Button type="button" onClick={() => navigate(location?.state?.from)}>
          &#8592;Go back
        </Button>
        <Wrapper>
          <MovieImage
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="poster"
          />

          <MovieInformation>
            <h2>{movie.title}</h2>
            <p>User Score: {movie.vote_average.toFixed(2) * 10} % </p>
            <h3>Overview:</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{movie.genres.map(genres => genres.name)}</p>
          </MovieInformation>
        </Wrapper>
        <div>
          <p>Additional information</p>
          <ul>
            <li>
              <Link to="cast" state={{ from: location.state.from }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: location.state.from }}>
                Review
              </Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </>
    )
  );
};
