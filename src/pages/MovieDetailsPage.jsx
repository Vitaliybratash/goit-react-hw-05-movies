import { Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useGetMovieById } from 'hooks/useGetMovieById';

const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';
export const MovieDetailsPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)
  const { movieId } = useParams();
  const movie = useGetMovieById(movieId);
  if (!movie) return <div>Wrong movie</div>;
  return (
    <>
    <button type='button' onClick={()=>navigate(location.state?? '/')}>Go back</button>
      <img src={imgBaseUrl + movie.poster_path} alt="" />
      <h1>
        {movie.title ?? movie.name} ({movie.release_date.split('-')[0]})
      </h1>
      <p>User score: {Math.round(movie.vote_average * 10)}% </p>
      <h2>Overview</h2>
      <p>{movie.overview}</p>
      <h2>Genres</h2>
      <p>{movie.genres.map(el => el.name + ' ')}</p>

      <div>
        <h3>Additional information</h3>
        <NavLink to="cast" state={location.state}>Cast </NavLink>
        <NavLink to="reviews" state={location.state}>Reviews</NavLink>
      </div>
      <Outlet />
    </>
  );
};
