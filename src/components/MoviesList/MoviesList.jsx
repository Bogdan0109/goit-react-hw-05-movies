import { MovieLink } from '../App.styled';

const MoviesList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <MovieLink to={`${id}`} state={{ from: location }}>
            {title}
          </MovieLink>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
