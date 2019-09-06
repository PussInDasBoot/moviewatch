/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMovies
// ====================================================

export interface getMovies_movies {
  __typename: "Movie";
  id: string;
  title: string;
  thumbnail: string;
  imdbRating: number;
  director: string;
  description: string;
  runTime: number;
  year: number;
}

export interface getMovies {
  movies: (getMovies_movies | null)[] | null;
}
