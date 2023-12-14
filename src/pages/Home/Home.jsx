import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../API.js';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(data => setTrendingMovies(data));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {trendingMovies?.map(el => (
        <li key={el.id}>
          <Link to={`movies/${el.id}`} key={el.id}>{el.title || el.name}</Link>
        </li>
      ))}
    </>
  );
};
