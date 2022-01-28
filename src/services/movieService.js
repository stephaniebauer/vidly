import httpService from "./httpService";

const API_ENDPOINT = "/movies";

function movieUrl(id) {
  //return API_ENDPOINT + "/" + id;
  // this will me dynamically replaced by runtime
  return `${API_ENDPOINT}/${id}`;
}

export function getMovies() {
  return httpService.get(API_ENDPOINT);
}

export function getMovie(movieId) {
  return httpService.get(movieUrl(movieId));
}

export function deleteMovie(movieId) {
  return httpService.delete(movieUrl(movieId));
}

export function saveMovie(movie) {
  console.log("movie", movie);
  // update exisiting movie
  if (movie._id) {
    // removing id
    const body = { ...movie };
    delete body._id;
    return httpService.put(movieUrl(movie._id), body);
  }
  // post a new movie
  console.log("movie", movie);
  return httpService.post(API_ENDPOINT, movie);
}

export default {
  getMovies,
  deleteMovie,
  saveMovie,
};
