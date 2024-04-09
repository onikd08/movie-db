import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import { getMovieList } from "@/lib/movies";
import MovieCard from "./MovieCard";

const MovieList = async ({ lang }) => {
  const movies = await getMovieList();
  const dict = await getDictionary(lang);
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies?.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} dict={dict} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
