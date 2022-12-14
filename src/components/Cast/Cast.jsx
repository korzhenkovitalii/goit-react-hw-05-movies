import { fetchMovieCredits } from 'services/services';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [casts, setCasts] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieCredits(id).then(setCasts);
  }, [id]);

  console.log(casts);

  return (
    casts && (
      <>
        <ul>
          {casts.cast.map(item => (
            <li key={item.name}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`}
                alt={item.name}
              />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </>
    )
  );
};
