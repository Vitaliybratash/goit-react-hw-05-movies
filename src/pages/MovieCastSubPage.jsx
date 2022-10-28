import { useGetMovieCast } from 'hooks/useGetMovieCast';
import { useParams } from 'react-router-dom';
const imgBaseUrl = 'https://image.tmdb.org/t/p/w200';
export const MovieCastSubPage = () => {
  const { movieId } = useParams();
  const cast  = useGetMovieCast(movieId);
  console.log(cast);
  if (!cast) return <div>No cast information</div>;
  
  return (
    <ul>
      {cast.cast.map(el => {
        return (
          <li key={el.id}>
            <img src = {el.profile_path?imgBaseUrl + el.profile_path : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/200px-Unknown_person.jpg'}  alt="" />
            <p>{el.name}</p>
            <p>{el.character}</p>
          </li>
        );
      })}
    </ul>
  );
};
