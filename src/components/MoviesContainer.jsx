import React from "react";
import MovieCard from "./MovieCard";

function MoviesContainer({ movies, rateMovie }) {
  return (
    <section className='MoviesContainer'>
      {movies.map((movie) => (
        <MovieCard rateMovie={rateMovie} key={movie.id} {...movie} />
      ))}
    </section>
  );
}

export default MoviesContainer;
