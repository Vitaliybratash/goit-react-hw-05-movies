import { Link, useLocation } from 'react-router-dom';
export const MoviesList = ({ movies }) => {
  const location = useLocation();
  const path = location.pathname.includes('movies') ? '' : '/movies/'
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`${path}${movie.id}`} state={location}>
              {movie.title ?? movie.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
