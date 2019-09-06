import React from "react";

import { Movie } from "../../index"
import {
  MovieCardStyled,
  MoviePosterWrapper,
  PosterOverlay,
  MovieTitle,
  MovieInfoContainer,
  Director,
  Rating
} from "./styles";

interface IMovieCardProps {
  movie: Movie;
  onMovieClick(movie: Movie): void;
}

const MovieCard: React.FC<IMovieCardProps> = ({ movie, onMovieClick }) => {
  return (
    <MovieCardStyled>
      <MoviePosterWrapper>
        <img src={movie.thumbnail} alt={`poster for ${movie.title}`} />
        <PosterOverlay onClick={() => onMovieClick(movie)}>
          <p>Watch</p>
        </PosterOverlay>
      </MoviePosterWrapper>
      <MovieInfoContainer>
        <MovieTitle>{movie.title}</MovieTitle>
        <Director>{movie.director}</Director>
        <Rating>
          <span role="img" aria-label="movie rating">
            ⭐
          </span>
          {movie.imdbRating}
        </Rating>
        <p>
          <span role="img" aria-label="movie duration">
            🕐
          </span>
          {movie.runTime}
        </p>
      </MovieInfoContainer>
    </MovieCardStyled>
  );
};

export default MovieCard;
