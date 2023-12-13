import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout.jsx';
import { Home } from 'pages/Home/Home.jsx';
import { MovieId } from '../pages/MovieId/MovieId.jsx';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<div>MOVIE ID</div>} />
        <Route path="movie/:id" element={<MovieId />} />
      </Route>
    </Routes>
  );
};
