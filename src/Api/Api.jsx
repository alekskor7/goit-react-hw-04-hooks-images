const API_KEY = '23523272-7e7e55898992c75b8603edf48';
const IMAGES_PER_PAGE = 12;

function fetchImagesByQuery(query, page = 1) {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${IMAGES_PER_PAGE}`,
  ).then(r => {
    if (r.ok) {
      return r.json();
    }
    return Promise.reject(new Error(`Can't get images for ${query}`));
  });
}

export { fetchImagesByQuery, IMAGES_PER_PAGE };