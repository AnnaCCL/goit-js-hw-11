const API_KEY = '43962344-60bb6936b0a285a198b0045a6';
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
