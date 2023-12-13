import { Container, Header, Link,Main, Footer } from './SharedLayout';
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
        <div>My contacts</div>
        <div>My name</div>
      </Footer>
    </Container>
  );
};
