import { Link } from 'react-router-dom';

import css from './MovieList.module.css';

export const MovieList = ({ movies }) => {
  return (
    <div class="container">
      <ul className={css.list}>
        {movies.map(movie => {
          return (
            <li className={css.list_item} key={movie.id}>
              <div className={css.list_item}>
                <Link
                  className={css.list_item_movie}
                  to={`/movies/${movie.id}`}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <p>{movie.title}</p>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
