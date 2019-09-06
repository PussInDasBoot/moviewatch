/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getWatchList
// ====================================================

export interface getWatchList_watchlist {
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

export interface getWatchList {
  watchlist: (getWatchList_watchlist | null)[] | null;
}
