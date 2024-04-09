import Modal from "@/components/Modal";
import MovieDetails from "@/components/MovieDetails";
import { getMovieWithId } from "@/lib/movies";
import { getDictionary } from "../../dictionaries/dictionaries";

export default async function MovieDetailsModal({ params: { lang, id } }) {
  const dict = await getDictionary(lang);
  const movie = await getMovieWithId(id);
  return (
    <Modal>
      <MovieDetails dict={dict} movie={movie} />
    </Modal>
  );
}
