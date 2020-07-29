import React from "react";
import MovieCard from "./MovieCard";

function MoviesContainer({ movies }) {
  return (
    <section className='MoviesContainer'>
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </section>
  );
}

export default MoviesContainer;
