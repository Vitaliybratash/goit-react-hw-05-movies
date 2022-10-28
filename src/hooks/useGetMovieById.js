import { fetchMoviesById } from '../services/Api';
import { useEffect, useState } from 'react';
export const useGetMovieById = id => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetchMoviesById(id)
      .then(setMovie)
      .catch(e => console.log(e.message));
  }, [id]);
  return movie;
};
