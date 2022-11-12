import { useState, useEffect } from 'react';
import { SearchMovies } from 'components/SearchMovies/SearchMovies';
import { useLocation, useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/api-themoviedb';
import MoviesList from 'components/MoviesList';

const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const filter = searchParams.get('filter') ?? '';

  useEffect(() => {
    if (filter === '') return;

    searchMovies(filter)
      .then(setMovies)
      .catch(error => console.log('Error', error));
  }, [filter]);

  const submitFilter = value => {
    setSearchParams(value !== '' ? { filter: value } : {});
  };

  return (
    <main>
      <SearchMovies onSubmit={submitFilter} />
      {movies.length > 0 && filter !== '' ? (
        <MoviesList movies={movies} location={location} />
      ) : null}
    </main>
  );
};

export default Movies;
