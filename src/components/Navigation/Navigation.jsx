import { Link, NavList } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <NavList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </NavList>
    </nav>
  );
};
