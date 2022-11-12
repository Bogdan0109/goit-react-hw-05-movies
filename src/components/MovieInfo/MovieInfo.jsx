import './MovieInfo.scss';

const MovieInfo = ({ movies }) => {
  const { posterUrl, title, releaseYear, userScore, genresList, overview } =
    movies;

  return (
    <div className="movie-info">
      <img src={posterUrl} alt={title} />
      <div>
        <h1>
          {title} ({releaseYear})
        </h1>
        <p>User Score {userScore}%</p>
        <h2>Overview:</h2>
        <p>{overview}</p>
        <h3>Genres:</h3>
        <p>{genresList}</p>
      </div>
    </div>
  );
};

export default MovieInfo;
// title,
//   posterUrl,
//   genresList,
//   releaseYear,
//   userScore,
//   overview,
