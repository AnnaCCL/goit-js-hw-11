const API_KEY = '44067691-76497e8def9c6eb00e23cd4a0';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImg(searchQuery) {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data.hits;
    });
}
