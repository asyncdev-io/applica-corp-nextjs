/* eslint-disable @next/next/no-img-element */
import { IMovie } from "@/redux/api/search.types";
import Link from "next/link";

interface ICardProps extends React.HTMLAttributes<HTMLAnchorElement> {
  movie: IMovie;
}

const MovieCard: React.FC<ICardProps> = ({ movie }) => {
  let posterPath;

  if (movie.poster_path === null) {
    posterPath = "https://fakeimg.pl/600x800";
  } else {
    posterPath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  }

  return (
    <Link
      href="/"
      aria-label={movie.title}
      className="bg-white shadow-md rounded-2xl overflow-hidden"
    >
      <img src={posterPath} alt={movie.title} className="w-full rounded-2xl " />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{movie.title}</h3>
        <p className="text-gray-600">
          Fecha: {movie.release_date ? movie.release_date : "TBD"}
        </p>
      </div>
    </Link>
  );
};

export default MovieCard;
