import { fetchMovieCast } from '../services/Api';
import { useEffect, useState } from 'react';
export const useGetMovieCast = id => {
  const [cast, setCast] = useState(null);
  useEffect(() => {
    fetchMovieCast(id)
      .then(setCast)
      .catch(e => console.log(e.message));
  }, [id]);
  return cast;
};
