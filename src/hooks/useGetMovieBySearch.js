import { fetchMoviesBySearch } from 'services/Api';
import { useState, useEffect } from 'react';
export const useGetMovieBySearch = search => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
   if (search !== '') {
    fetchMoviesBySearch(search)
    .then(setMovies)
    .catch(e => console.log(e.message));
   }
  }, [search]);
  return movies;
};
