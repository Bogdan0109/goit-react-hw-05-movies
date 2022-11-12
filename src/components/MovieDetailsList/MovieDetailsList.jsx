import { MovieLink } from '../App.styled';

const MovieDetailsList = () => {
  return (
    <ul>
      <li>
        <MovieLink to="cast">Cast</MovieLink>
      </li>
      <li>
        <MovieLink to="reviews">Review</MovieLink>
      </li>
    </ul>
  );
};

export default MovieDetailsList;
