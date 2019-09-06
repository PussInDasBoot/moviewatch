import React from "react";

import { MoviesPage } from "./styles";
import MovieCard from "./components/MovieCard";
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_MOVIES } from "../../models/movies/queries"
import { ADD_TO_WATCH_LIST } from "../../models/movies/mutations";

export interface Movie {
  id: number;
  title: string;
  thumbnail: string;
  imdbRating: number;
  director: string;
  description: string;
  runTime: number;
  year: number;
}

export interface MovieData {
  movies: Movie[];
}

interface MovieDetails {
  movieID: number;
}

const Movies = () => {
  const { data, loading } = useQuery<MovieData>(GET_MOVIES);
  const [addToWatchList] = useMutation<
    { addToWatchList: MovieData },
    MovieDetails
  >(ADD_TO_WATCH_LIST)
  const handleMovieClick = (movie: Movie) => {
    addToWatchList({
      variables: {
        movieID: movie.id
      }
    })
  };

  if (loading) {
    return <div>loading...</div>
  }

  return (
    <MoviesPage>
      {data && data.movies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={handleMovieClick}
        />
      ))}
    </MoviesPage>
  );
};

export default Movies;
