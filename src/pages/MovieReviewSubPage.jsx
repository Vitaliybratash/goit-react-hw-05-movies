import { useGetMovieReviews } from 'hooks/useGetReviews';
import { useParams } from 'react-router-dom';
export const MovieReviewSubPage = () => {
  const { movieId } = useParams();
  const review = useGetMovieReviews(movieId);
  console.log(review);
  if (!review || review.results.length === 0) return <div>No review information</div>;

  return (
    <ul>
      {review.results.map(el => {
        return (
          <li key={el.id}>
            <h2>{el.author}</h2>
            <p>{el.content}</p>
          </li>
        );
      })}
    </ul>
  );
};
