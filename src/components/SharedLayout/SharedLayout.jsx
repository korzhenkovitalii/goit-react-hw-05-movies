import { Container, Header, Link, Main, Footer } from './SharedLayout';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>

      <Main>
        <Outlet />
      </Main>

      <Footer>
        <div>Vitalii Korzhenko</div>
        <a href="mailto:v.korzhenko85@gmail.com">v.korzhenko85@gmail.com</a>
        <a href="tel:+15879684866">+1 587 96 84 866</a>
      </Footer>
    </Container>
  );
};
