import { gql } from "apollo-boost";

export const ADD_TO_WATCH_LIST = gql`
  mutation WatchMovie($movieID: ID!) {
    watchMovie(movieID: $movieID) {
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
