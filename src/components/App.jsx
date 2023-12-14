import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout.jsx';
import { Home } from 'pages/Home/Home.jsx';
import { Movie } from '../pages/Movies/Movies.jsx';
import { MovieId } from '../pages/MovieId/MovieId.jsx';
import { Cast } from './Cast/Cast.jsx';
import { Review } from './Review/Review.jsx';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movie />} />
        <Route path="movies/:id" element={<MovieId />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Review />} />
        </Route>
      </Route>
    </Routes>
  );
};
