import { getMovieList } from "@/lib/movies";
import MovieCard from "./MovieCard";

const MovieList = async () => {
  const movies = await getMovieList();
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies?.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
