import { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  useRouteMatch,
  Link,
  Route,
  // useHistory,
  useLocation,
} from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { getMovieDetails } from '../Api/Api';

import styles from './MovieDetailsPage.module.css';

const Cast = lazy(() =>
  import('../components/Cast' /*webpackChunkName: "cast" */),
);
const Reviews = lazy(() =>
  import('../components/Reviews' /*webpackChunkName: "reviews" */),
);

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [showLoader, setShowLoader] = useState(false);
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  // const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        setShowLoader(true);
        const movieInfo = await getMovieDetails(movieId);

        setMovie({ ...movieInfo });
      } catch (error) {
        toast.error(error.message, { theme: 'colored' });
      } finally {
        setShowLoader(false);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

// 1. не сохраняется запрос поиска
  // const onGoBack = () => { history.push(location?.state?.from ?? '/movies');};
// 2. сохраняется запрос 
  const [onGoBack] = useState(location?.state?.from ?? '/',);

  return (
    <>
      {showLoader && (
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      )}

      {movie && (
        <>
          {/* 1 */}
          {/* <button type="button" style={{ marginBottom: '20px' }} onClick={onGoBack}>Go back</button> */}

          {/* 2 */}
          <Link type="button" className={styles.goBack} to={onGoBack}>Go back</Link>

          <div>
            <div className={styles.Wrapper}>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                  className={styles.Image}
                />
              </div>
              <div className={styles.Description}>
                <h2>
                  Title: {movie.title}{' '}
                  <span>({movie.release_date.split('-')[0]})</span>
                </h2>
                <h2>Overview:</h2>
                <p>{movie.overview}</p>
                <h3>Popularity:</h3>
                <span>{movie.popularity}</span>
                <h3>Genres:</h3>
                <span>{movie.genres?.map(({ name }) => name).join(', ')}</span>
              </div>
            </div>
            <h2>Additional information:</h2>
            <ul>
              <li>
                <Link to={`${url}/cast`}>
                  <h3>Cast</h3>
                </Link>
              </li>
              <li>
                <Link to={`${url}/reviews`}>
                  <h3>Reviews</h3>
                </Link>
              </li>
            </ul>
            <Suspense
              fallback={
                <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
              }
            >
              <Route path={`${url}/cast`}>
                <Cast movieId={movie.id} />
              </Route>
              <Route path={`${url}/reviews`}>
                <Reviews movieId={movie.id} />
              </Route>
            </Suspense>
          </div>
        </>
      )}
    </>
  );
}
