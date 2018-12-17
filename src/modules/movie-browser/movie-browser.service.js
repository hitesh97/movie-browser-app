// Ideally this would come from environment variable or build pipeline!
import { MOVIE_DB_API_KEY } from '../../api-keys';

const MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/3';

// creates full API URL for ALL calls
const createMovieDbUrl = (relativeUrl, queryParams) => {
  let baseUrl = `${MOVIE_DB_BASE_URL}${relativeUrl}?api_key=${MOVIE_DB_API_KEY}&language=en-US`;
  if (queryParams) {
    Object.keys(queryParams).forEach(
      paramName => (baseUrl += `&${paramName}=${queryParams[paramName]}`)
    );
  }
  return baseUrl;
};

// Must pass parameters like this: ({param1, param2})
// that is to help async action creator helper to work
// Call Now Playing API using fetch
export const getNowPlayingMovies = async ({ page }) => {
  const fullUrl = createMovieDbUrl('/movie/now_playing', {
    page
  });
  return fetch(fullUrl);
};

// Call genres API using fetch
export const getGenresList = async () => {
  const fullUrl = createMovieDbUrl('/genre/movie/list', {});
  return fetch(fullUrl);
};
