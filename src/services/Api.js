import axios from 'axios';
const api_key = '6575c67e2b137def5a131e4e0e130af2';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (page = 1) => {
  const config = {
    url: '/trending/all/day',
    params: {
      api_key,
      page,
    },
  };

  const response = await axios(config);

  return response?.data.results;
};
export const fetchMoviesById = async id => {
  const config = {
    url: `/movie/${id}`,
    params: {
      api_key,
      id,
    },
  };

  const response = await axios(config);

  return response?.data;
};
export const fetchMovieCast = async id => {
  const config = {
    url: `/movie/${id}/credits`,
    params: {
      api_key,
      id,
    },
  };

  const response = await axios(config);

  return response?.data;
};

export const fetchMovieReviews = async id => {
  const config = {
    url: `/movie/${id}/reviews`,
    params: {
      api_key,
      id,
    },
  };

  const response = await axios(config);

  return response?.data;
};

export const fetchMoviesBySearch = async search => {
  const config = {
    url: '/search/movie',
    params: {
      api_key,
      query:search
    },
  };

  const response = await axios(config);

  return response?.data.results;
}