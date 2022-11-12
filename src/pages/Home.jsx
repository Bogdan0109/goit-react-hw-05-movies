import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'services/api-themoviedb';

const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(setMovies)
      .catch(error => console.log('Error', error));
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {movies.length > 0 ? (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </main>
  );
};

export default Home;
