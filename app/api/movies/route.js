import { getMovieList } from "@/lib/movies";
import { NextResponse } from "next/server";

export async function GET(_request) {
  const allMovies = await getMovieList();
  return NextResponse.json(allMovies);
}
