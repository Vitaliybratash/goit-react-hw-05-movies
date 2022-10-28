import { MoviesList } from 'components/MoviesList';
import { SearchForm } from 'components/SearchForm';
import { useSearchParams } from 'react-router-dom';
import { useGetMovieBySearch } from '../hooks/useGetMovieBySearch'
export const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams('');
  const search = searchParams.get('query') ?? '';
  const movies = useGetMovieBySearch(search);
  const submitHandler = search => {
   setSearchParams({query:search})
    
  };
  return (
    <>
      <SearchForm submitHandler={submitHandler} />
      {movies && <MoviesList movies={movies} />} 
    </>
  );
};
