import { fetchMovies } from '../services/Api';
import { useEffect, useState } from 'react';
export const useGetTrending = (page = 1) => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    fetchMovies(page)
      .then(setMovies)
      .catch(e => console.log(e.message));
  }, [page]);
  return movies
};
