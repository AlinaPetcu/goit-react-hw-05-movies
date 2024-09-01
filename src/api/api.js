import axios from 'axios';

const apiKey = '33c0e8d86ed5af0d833de610364d7060'; 
const baseUrl = 'https://api.themoviedb.org/3';

export const fetchMovieDetails = async movieId => {
  try {
    const response = await axios.get(`${baseUrl}/movie/${movieId}`, {
      params: {
        api_key: apiKey,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${baseUrl}/movie/popular`, {
      params: {
        api_key: apiKey,
      },
    });
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const searchMovies = async query => {
  try {
    const response = await axios.get(`${baseUrl}/search/movie`, {
      params: {
        api_key: apiKey,
        query: query,
      },
    });
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const getDetails = async movieId => {
  try {
    const response = await axios.get(`${baseUrl}/movie/${movieId}`, {
      params: { api_key: apiKey },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCredits = async movieId => {
  try {
    const response = await axios.get(`${baseUrl}/movie/${movieId}/credits`, {
      params: { api_key: apiKey },
    });
    return response.data.cast;
  } catch (error) {
    throw error;
  }
};

export const getReviews = async movieId => {
  try {
    const response = await axios.get(`${baseUrl}/movie/${movieId}/reviews`, {
      params: { api_key: apiKey },
    });
    return response.data.results;
  } catch (error) {
    throw error;
  }
};