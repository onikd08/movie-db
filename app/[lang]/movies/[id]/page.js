import MovieDetails from "@/components/MovieDetails";
import { getMovieWithId } from "@/lib/movies";
import { getDictionary } from "../../dictionaries/dictionaries";

export default async function MovieDetailsPage({ params: { id, lang } }) {
  const dict = await getDictionary(lang);
  const movie = await getMovieWithId(id);
  console.log(movie);
  return <MovieDetails movie={movie} dict={dict} />;
}
