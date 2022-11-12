import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviewsById } from 'services/api-themoviedb';

export const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    getMovieReviewsById(movieId)
      .then(setMovieReviews)
      .catch(error => console.log('Error', error));
  }, [movieId]);

  if (movieReviews.length === 0)
    return <h1>We don`t have any reviews for this movie</h1>;

  return (
    <ul>
      {movieReviews.map(({ id, author, content }) => (
        <li key={id}>
          <h1>Author: {author}</h1>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
