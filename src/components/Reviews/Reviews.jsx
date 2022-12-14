import { fetchMovieReviews } from 'services/services';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieReviews(id).then(setReviews);
  }, [id]);
  console.log(reviews);

  return (
    reviews && (
      <div>
        {reviews.results.length === 0 ? (
          <p>We don't have any reviews for this movie</p>
        ) : (
          <ul>
            {reviews.results.map(item => (
              <li key={item.author}>
                <p>{item.author}</p>
                <p>{item.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  );
};
