import { Link } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <div>
                <Link to={`/movies/${movie.id}`}>
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
