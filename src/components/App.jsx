import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { MoviesPage } from 'pages/MoviesPage';
import { HomePage } from 'pages/HomePage';
import { MovieDetailsPage } from 'pages/MovieDetailsPage';
import { MovieCastSubPage } from 'pages/MovieCastSubPage';
import { MovieReviewSubPage } from 'pages/MovieReviewSubPage';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCastSubPage />} />
          <Route path="reviews" element={<MovieReviewSubPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
