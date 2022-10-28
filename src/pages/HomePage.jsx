import { MoviesList } from 'components/MoviesList';
import { useGetTrending } from '../hooks/useGetTrending';
export const HomePage = () => {
  const movies = useGetTrending();
  return (
    <>
      <h1>Trending today</h1>
      {movies && <MoviesList movies={movies} />}
    </>
  );
};
