import HomeList from 'components/HomeList';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
        <HomeList movies={movies} location={location} />
      ) : null}
    </main>
  );
};

export default Home;
