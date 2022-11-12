import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, MovieLink } from '../App.styled';
import { Header } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <MovieLink to="/" end>
            Home
          </MovieLink>
          <MovieLink to="/movies">Movies</MovieLink>
        </nav>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
