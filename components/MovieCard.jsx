import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ movie }) => {
  return (
    <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
      <Image
        className="w-full object-cover"
        src={movie.poster_path}
        alt={movie.title}
        height={100}
        width={100}
      />
      <figcaption className="pt-4">
        <h3 className="text-xl mb-1">{movie.title}</h3>
        <p className="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
        <div className="flex items-center space-x-1 mb-5">
          <Image src="/assets/star.svg" width="14" height="14" alt="star" />
          <Image src="/assets/star.svg" width="14" height="14" alt="star" />
          <Image src="/assets/star.svg" width="14" height="14" alt="star" />
          <Image src="/assets/star.svg" width="14" height="14" alt="star" />
          <Image src="/assets/star.svg" width="14" height="14" alt="star" />
        </div>
        <Link
          className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          href={`/movies/${movie.id}`}
        >
          <Image src="/assets/tag.svg" alt="" width={20} height={20} />
          <span>Details</span>
        </Link>
      </figcaption>
    </figure>
  );
};

export default MovieCard;
