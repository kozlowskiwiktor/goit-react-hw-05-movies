import { getByID } from 'api';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    getByID(movieId).then(data => setDetails(data));
  }, [movieId]);

  if (!details) {
    return null;
  }
  return (
    <main>
      {''}
      <button onClick={() => window.history.back()}>Go back</button>
      <div>
        <ul>
          <li>
            {details.title} ({details.range_date})
          </li>
          <li>User score: {Math.round(details.vote_average * 10)}%</li>
          <li>
            <p>Overview:</p>
            {''}
            <p>{details.overview}</p>
          </li>
          <li>
            <div>
              <li>
                <ul>
                  <p>
                    Genres:
                    {details.genres.map(item => {
                      return <li key={item.id}>{item.name}</li>;
                    })}
                  </p>
                </ul>
              </li>
              <li>
                <ul>
                  <p>Additional information:</p>
                  <li>
                    <Link to="cast">Cast</Link>
                    <Link to="reviews">Reviews</Link>
                  </li>
                </ul>
              </li>
            </div>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};
