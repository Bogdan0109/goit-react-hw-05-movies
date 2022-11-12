import axios from 'axios';

const KEY = 'e7f9efb80ccf0ba9ba4df2587d484fba';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w300';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = {
  api_key: KEY,
  //   q: query,
  //   image_type: 'photo',
  //   orientation: 'horizontal',
  //   page: page,
  //   per_page: 12,
};

export const getTrendingMovies = async () => {
  const response = await axios.get('/trending/movie/week', { params });
  return response.data.results;
};

export const searchMovies = async query => {
  const allParams = { ...params, query };
  const response = await axios.get('/search/movie', { params: allParams });

  return response.data.results;
};

export const getMovieById = async id => {
  const response = await axios.get(`/movie/${id}`, { params });

  return normalizeMovieInfo(response.data);
};

export const getMovieCastById = async id => {
  const response = await axios.get(`/movie/${id}/credits`, { params });

  return response.data.cast;
};

export const getMovieReviewsById = async id => {
  const response = await axios.get(`/movie/${id}/reviews`, { params });

  return response.data.results;
};

export const normalizeMovieInfo = movieInfo => {
  const { poster_path, title, release_date, vote_average, genres, overview } =
    movieInfo;

  const genresList = genres.map(({ name }) => name).join(', ');
  const userScore = Math.floor(vote_average * 10);
  const releaseYear = parseInt(release_date);
  const posterUrl = poster_path && IMAGE_BASE_URL + poster_path;

  return {
    posterUrl,
    title,
    releaseYear,
    userScore,
    genresList,
    overview,
  };
};
