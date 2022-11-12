import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'services/api-themoviedb';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w300';

const MovieDetails = () => {
  const [movies, setMovies] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieById(movieId)
      .then(setMovies)
      .catch(error => console.log('Error', error));
  }, [movieId]);

  if (movies.langth === 0) return;

  const { poster_path, title, release_date, vote_average, genres, overview } =
    movies;
  const genresList = genres && genres.map(({ name }) => name).join(', ');
  const releaseYear = parseInt(release_date);
  const userScore = Math.floor(vote_average * 10);
  const posterUrl = poster_path ? IMAGE_BASE_URL + poster_path : null;
  const backLinkHref = location.state?.from ?? '/';

  return (
    movies && (
      <main>
        <Link to={backLinkHref}>Go back</Link>
        <img src={posterUrl} alt={title} />
        <h1>
          {title} ({releaseYear})
        </h1>
        <p>User Score {userScore}%</p>
        <h2>Overview:</h2>
        <p>{overview}</p>
        <h3>Genres:</h3>
        <p>{genresList}</p>
      </main>
    )
  );
};

export default MovieDetails;
