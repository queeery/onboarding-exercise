import React, { useContext } from "react";
import MovieCard from "./MovieCard";
import MovieContext from "../MoviesContext";

function MoviesContainer({ rateMovie }) {
  const movies = useContext(MovieContext);
  return (
    <section className='MoviesContainer'>
      {movies.map((movie) => (
        <MovieCard rateMovie={rateMovie} key={movie.id} {...movie} />
      ))}
    </section>
  );
}

export default MoviesContainer;
