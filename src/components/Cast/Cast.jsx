import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCastById } from 'services/api-themoviedb';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w300';

export const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  console.log('🚀 ~ file: Cast.jsx ~ line 8 ~ Cast ~ movieCast', movieCast);

  useEffect(() => {
    getMovieCastById(movieId)
      .then(setMovieCast)
      .catch(error => console.log('Error', error));
  }, [movieId]);

  if (movieCast.length === 0) return;

  return (
    <ul>
      {movieCast.map(({ id, character, name, profile_path }) => (
        <li key={id}>
          <h1>{name}</h1>
          <p>Character: {character}</p>
          <img src={IMAGE_BASE_URL + profile_path} alt={name} />
        </li>
      ))}
    </ul>
  );
};
