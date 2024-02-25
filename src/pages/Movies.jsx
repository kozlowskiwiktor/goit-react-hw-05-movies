import { getByTitle } from 'api';
import { useState } from 'react';

const { MovieList } = require('components/MovieList/MovieList');
const { Searchbar } = require('components/Searchbar/Searchbar');
const { useSearchParams } = require('react-router-dom');

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('query') || ''
  );
  const [searchedMovies, setSearchedMovies] = useState([]);

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: searchParams });

    getByTitle(searchQuery).then(data => setSearchedMovies(data.results));
  };
  return (
    <div>
      <main>
        <Searchbar
          searchQuery={searchQuery}
          handleChange={handleChange}
          onSubmit={handleSubmit}
        />
        <div>{searchedMovies && <MovieList movies={searchedMovies} />}</div>
      </main>
    </div>
  );
};
