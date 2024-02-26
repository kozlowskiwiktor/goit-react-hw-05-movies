import { getByID } from 'api';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

import css from './MoviesDetails.module.css';

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
          <li className={css.list_item}>
            Title: {details.title}{' '}
            {details.range_date ? details.range_date : ''}
          </li>
          <li className={css.list_item}>
            User score: {Math.round(details.vote_average * 10)}%
          </li>
          <li className={css.list_item}>
            <p>Overview:</p>
            {''}
            <p>{details.overview}</p>
          </li>
          <li className={css.list_item}>
            <div>
              <li className={css.list_item}>
                <ul>
                  <p>
                    Genres:
                    {details.genres.map(item => {
                      return <li key={item.id}>{item.name}</li>;
                    })}
                  </p>
                </ul>
              </li>
              <li className={css.list_item}>
                <ul>
                  <p>Additional information:</p>
                  <li className={css.list_item}>
                    <Link className={css.info} to="cast">
                      Cast
                    </Link>
                    <Link className={css.info} to="reviews">
                      Reviews
                    </Link>
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
