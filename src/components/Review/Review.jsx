import { useParams } from 'react-router-dom';

import { getMovieReview } from '../../API';
import { useEffect, useState } from 'react';

import { ReviewTitle, Author } from './Review.styled';

export const Review = () => {
  const [review, setReview] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getMovieReview(id).then(data => setReview(data));
  }, [id]);
  return (
    <>
      {review.length === 0 ? (
        <div>We don`t have any reviews for this movie yet.</div>
      ) : null}
      {review.length > 1
        ? review.map(el => (
            <li key={el.id}>
              <ReviewTitle>
                Author:<Author>{el.author}</Author>
              </ReviewTitle>
              <p>{el.content}</p>
            </li>
          ))
        : null}
    </>
  );
};
