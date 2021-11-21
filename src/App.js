import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { fetchImagesByQuery, IMAGES_PER_PAGE } from './Api/Api';
import Button from './components/Button/Button';
import Style from "./App.module.css";

const Status = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
  NEED_LOADING: 'needLoading',
};

export default function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isMoreAvailable, setIsMoreAvailable] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (status === Status.NEED_LOADING) {
      setStatus(Status.PENDING);

      fetchImagesByQuery(query, page)
        .then(results => {
          const resultsCount = results.hits.length;
          if (resultsCount === 0) {
            setError(new Error(`No search results for ${query}`));
            setStatus(Status.REJECTED);
            return;
          }

          setImages(prev => [...images, ...results.hits]);
          setIsMoreAvailable(checkAvailability(resultsCount));
          setStatus(Status.RESOLVED);
        })
        .then(() => {
          if (page !== 1) {
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: 'smooth',
            });
          }
        })
        .catch(error => {
          setError(error);
          setStatus(Status.REJECTED);
        });
    }
  }, [images, page, query, status]);

  const handleSearchSubmit = query => {
    setImages([]);
    setQuery(query);
    setPage(1);
    setStatus(Status.NEED_LOADING);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
    setStatus(Status.NEED_LOADING);
  };

  const checkAvailability = itemsLength => {
    return !(itemsLength < IMAGES_PER_PAGE);
  };

  return (
    <div className={Style.App}>
      <Searchbar onSubmit={handleSearchSubmit} />
      {status === Status.REJECTED && <div>{error.message}</div>}
      <ImageGallery items={images} />
      {status === Status.PENDING && (
        <div className={Style.Loader}>
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        </div>
      )}
      {status === Status.RESOLVED && isMoreAvailable && (
        <Button onClick={handleLoadMore}>Load more</Button>
      )}
    </div>
  );
}