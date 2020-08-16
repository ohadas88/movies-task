import React from "react";

// interface card {
//   Title: string;
//   Year: string;
//   imdbID: string;
//   Type: string;
//   Poster: string;
//   rank: number;
// }

interface MoviesData {
  movies: any;
}

export function allMovies(props: MoviesData) {
  console.log(props);
}
