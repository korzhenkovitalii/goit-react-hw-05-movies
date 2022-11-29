import { Home } from 'pages/Home/Home';
import { MovieById } from 'pages/MovieById/MovieById';
import { Movies } from 'pages/Movies/Movies';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieById/>}>
          <Route path="/movies/:id/cast" element={<div>Cast</div>} />
          <Route path="/movies/:id/reviews" element={<div>Reviews</div>} />
        </Route>
      </Route>
      <Route path="*" element={<div>NotFound</div>} />
    </Routes>
  );
};
