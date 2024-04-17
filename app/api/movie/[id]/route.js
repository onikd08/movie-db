import { getMovieList, getMovieWithId } from "@/lib/movies";
import { NextResponse } from "next/server";

export async function GET(_request, { params }) {
  const { id } = params;
  const movie = await getMovieWithId(id);
  if (movie) {
    return NextResponse.json(movie);
  }
  return new Response("Movie not found");
}

export async function PATCH(request, { params }) {
  const { id } = params;
  const selectedMovie = await getMovieWithId(id);
  const update = await request.json();
  if (selectedMovie) {
    selectedMovie.title = update.title;
    selectedMovie.original_title = update.title;
    return NextResponse.json(selectedMovie);
  }
  return new Response("Movie not found");
}

export async function DELETE(_request, { params }) {
  const id = params.id;
  const allMovies = await getMovieList();
  const index = allMovies.results.findIndex(
    (movie) => movie.id === parseInt(id)
  );
  if (index >= 0) {
    const selectedMovie = allMovies.results[index];
    allMovies.results.splice(index, 1);
    return NextResponse.json(selectedMovie);
  }
  return new Response("Movie not found");
}
