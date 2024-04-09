import "server-only";

const movieList = () =>
  import("../lib/data.json").then((module) => module.default);

export const getMovieList = async () => movieList();

export const getMovieWithId = async (id) => {
  const movies = await getMovieList();
  return movies.results.find((movie) => movie.id === parseInt(id));
};
