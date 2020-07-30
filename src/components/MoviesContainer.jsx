import React, { useContext } from "react";
import MovieCard from "./MovieCard";
import MovieContext from "../MoviesContext";

function MoviesContainer() {
  const { movies, filter, filteredMovies } = useContext(MovieContext);

  const displayedMovies = filter ? filteredMovies : movies;

  return (
    <section className='MoviesContainer'>
      {displayedMovies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </section>
  );
}

export default MoviesContainer;
