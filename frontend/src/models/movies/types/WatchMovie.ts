/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: WatchMovie
// ====================================================

export interface WatchMovie_watchMovie {
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

export interface WatchMovie {
  watchMovie: (WatchMovie_watchMovie | null)[];
}

export interface WatchMovieVariables {
  movieID: string;
}
