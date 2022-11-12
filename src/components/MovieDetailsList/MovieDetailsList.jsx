import { MovieLink } from '../App.styled';

const MovieDetailsList = () => {
  return (
    <>
      <h2>Additional information:</h2>
      <ul>
        <li>
          <MovieLink to="cast">Cast</MovieLink>
        </li>
        <li>
          <MovieLink to="reviews">Review</MovieLink>
        </li>
      </ul>
    </>
  );
};

export default MovieDetailsList;
