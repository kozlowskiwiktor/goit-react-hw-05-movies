import { getByCast } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import css from './Cast.module.css';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    getByCast(movieId).then(data => {
      setCast(data.cast);
    });
  }, [movieId]);
  if (!cast) {
    return null;
  }
  return (
    <section>
      <div className={css.list}>
        {cast &&
          cast.map(item => {
            return (
              <li className={css.list_item} key={item.id}>
                {item.profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${item.profile_path}`}
                    alt={item.name}
                  />
                )}
                <p>{item.name}</p>
                <p>
                  <span>Character: {item.character}</span>
                </p>
              </li>
            );
          })}
      </div>
    </section>
  );
};
