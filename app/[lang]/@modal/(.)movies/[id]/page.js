import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import Modal from "@/components/Modal";
import MovieDetails from "@/components/MovieDetails";
import { getMovieWithId } from "@/lib/movies";

export default async function MovieDetailsModal({ params: { lang, id } }) {
  const dict = await getDictionary(lang);
  const movie = await getMovieWithId(id);
  return (
    <Modal>
      <MovieDetails dict={dict} movie={movie}></MovieDetails>
    </Modal>
  );
}
