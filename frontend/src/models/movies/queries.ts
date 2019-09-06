import { gql } from "apollo-boost";

export const GET_MOVIES = gql`
  query getMovies {
    movies {
      id
      title
      thumbnail
      imdbRating
      director
      description
      runTime
      year
    }
  }

`;
export const GET_WATCH_LIST = gql`
  query getWatchList {
  watchlist {
    id
    title
    thumbnail
    imdbRating
    director
    description
    runTime
    year
  }
}
`;
