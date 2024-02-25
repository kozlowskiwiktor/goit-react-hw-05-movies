import { MovieList } from 'components/MovieList/MovieList';

const { getTrending } = require('api');
const { useEffect, useState } = require('react');

export const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getTrending().then(data => setTrending(data));
  }, []);

  return (
    <div>
      <header>
        <h1>Trending Today</h1>
      </header>
      <main>{trending && <MovieList movies={trending} />}</main>
    </div>
  );
};
