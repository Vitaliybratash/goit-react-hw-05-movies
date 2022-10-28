import { fetchMovieReviews } from '../services/Api';
import { useEffect, useState } from 'react';
export const useGetMovieReviews = id => {
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    fetchMovieReviews(id)
      .then(setReviews)
      .catch(e => console.log(e.message));
  }, [id]);
  return reviews;
};
