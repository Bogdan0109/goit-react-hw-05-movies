const MovieInfo = ({ movies }) => {
  const { posterUrl, title, releaseYear, userScore, genresList, overview } =
    movies;

  return (
    <div>
      <img src={posterUrl} alt={title} />
      <h1>
        {title} ({releaseYear})
      </h1>
      <p>User Score {userScore}%</p>
      <h2>Overview:</h2>
      <p>{overview}</p>
      <h3>Genres:</h3>
      <p>{genresList}</p>
      <h2>Additional information:</h2>
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
