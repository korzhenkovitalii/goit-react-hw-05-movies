import { Home } from 'pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="movies" element={<div>Movies</div>}>
          <Route path="movies/:id" element={<div>Render by id</div>} />
          <Route path="/movies/:id/cast" element={<div>Cast</div>} />
          <Route path="/movies/:id/reviews" element={<div>Reviews</div>} />
        </Route>
      </Route>
      <Route path="*" element={<div>NotFound</div>} />
    </Routes>
  );  
};
