import axios from 'axios';

const KEY = 'e7f9efb80ccf0ba9ba4df2587d484fba';

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

  return response.data;
};
