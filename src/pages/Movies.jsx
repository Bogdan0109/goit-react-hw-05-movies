import { useState, useEffect } from 'react';
import { SearchMovies } from 'components/SearchMovies/SearchMovies';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/api-themoviedb';

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

  const changeFilter = value => {
    setSearchParams(value !== '' ? { filter: value } : {});
  };

  return (
    <main>
      <SearchMovies onChange={changeFilter} value={filter} />
      {movies.length > 0 && filter !== '' ? (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </main>
  );
};

export default Movies;
