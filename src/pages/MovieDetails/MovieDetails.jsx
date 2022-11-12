import MovieDetailsList from 'components/MovieDetailsList';
import MovieInfo from 'components/MovieInfo';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import './MovieDetails.scss';

import { MovieLink } from '../../components/App.styled';
import { getMovieById } from 'services/api-themoviedb';

const MovieDetails = () => {
  const [movies, setMovies] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getMovieById(movieId)
      .then(setMovies)
      .catch(error => console.log('Error', error));
  }, [movieId]);

  if (movies.langth === 0) return;

  // const { poster_path, title, release_date, vote_average, genres, overview } =
  //   movies;
  // const genresList = genres && genres.map(({ name }) => name).join(', ');
  // const releaseYear = parseInt(release_date);
  // const userScore = Math.floor(vote_average * 10);
  // const posterUrl = poster_path ? IMAGE_BASE_URL + poster_path : null;

  // const allMovies = {
  //   title,
  //   posterUrl,
  //   genresList,
  //   releaseYear,
  //   userScore,
  //   overview,
  // };

  return (
    movies && (
      <main>
        <MovieLink to={backLinkHref} className="go-back">
          Go back
        </MovieLink>
        <MovieInfo movies={movies} />
        <MovieDetailsList />
        <Outlet />
      </main>
    )
  );
};

export default MovieDetails;
