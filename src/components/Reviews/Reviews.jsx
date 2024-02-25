import { getByReviews } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    getByReviews(movieId).then(data => {
      setReviews(data.results);
    });
  }, [movieId]);

  return (
    <section>
      {reviews.length === 0 ? (
        <p>There are no reviews yet</p>
      ) : (
        <ul>
          {reviews.map(item => (
            <li key={item.id}>
              <p>{item.author}</p>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
