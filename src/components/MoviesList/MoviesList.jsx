import { Link } from 'react-router-dom';

export const MoviesList = ({ movies, location }) => {

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location.pathname + location.search }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
