import Image from "next/image";

const MovieDetails = ({ movie, dict }) => {
  const {
    overview,
    backdrop_path,
    title,
    poster_path,
    release_date,
    vote_average,
    vote_count,
    popularity,
  } = movie;
  return (
    <section>
      <div>
        <Image
          className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
          src={backdrop_path}
          alt={title}
          height={300}
          width={300}
        />
      </div>

      <div className="grid grid-cols-12 py-12 gap-8">
        <div className="col-span-2">
          <Image src={poster_path} alt={title} height={135} width={202} />
        </div>
        <div className="col-span-8">
          <h2 className="font-bold text-slate-300 text-2xl">{title}</h2>
          <p className="my-2 text-slate-400 italic">{overview}</p>
          <ul className="text-slate-300 space-y-2 my-8">
            <li>
              {dict.release_date} : {release_date}
            </li>
            <li>
              {dict.vote_average} : {vote_average}
            </li>
            <li>
              {dict.vote_count} : {vote_count}
            </li>
            <li>
              {dict.popularity} : {popularity}
            </li>
          </ul>
        </div>
        <div className="col-span-2 space-y-4">
          <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            {dict.streamHD}
          </button>
          <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            {dict.downloadHD}
          </button>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
