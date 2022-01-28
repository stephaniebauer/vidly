import httpService from "./httpService";

const API_ENDPOINT = "/genres";

export function getGenres() {
  //filter fehlt hier? Im Vergleich zu fakeGenreService
  return httpService.get(API_ENDPOINT);
}

export default {
  getGenres,
};
