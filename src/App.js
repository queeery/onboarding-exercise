import React, { useState, useEffect, createContext } from "react";
import logo from "./queeery-logo.png";
import MoviesContainer from "../src/components/MoviesContainer";
import "./App.css";
import * as movieData from "./movies";

// export const MoviesContext = createContext();

function App() {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  const handleFilterChange = ({ target: { value } }) => {
    const lowercaseValue = value.toLowerCase();
    setFilter(value);
    const filtered = movies.filter(({ title }) => {
      const cleanedTitle = title.toLowerCase();
      return cleanedTitle.indexOf(lowercaseValue) !== -1;
    });
    setFilteredMovies(filtered);
  };

  function rateMovie(type, direction, uid) {
    // find movie with id and update rating. Direction determined by whether button has already been clicked to stop rate spamming.

    const updatedMovies = movies.map((movie) => {
      if (uid === movie.id && direction === "add") {
        type === "up" ? movie.likes++ : movie.dislikes++;
        return movie;
      }

      if (uid === movie.id && direction === "subtract") {
        type === "up" ? movie.likes-- : movie.dislikes--;
        return movie;
      }

      return movie;
    });
    setMovies(updatedMovies);
  }

  useEffect(() => {
    const getMovies = () => {
      movieData.movies$
        .then((data) => {
          setMovies(data);
        })
        .catch((err) => {
          // display UI err
          // throw err;
          console.log(err);
        });
    };
    getMovies();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <form className='filter'>
          <input
            className='filter-input'
            type='text'
            value={filter}
            onChange={handleFilterChange}
          />
        </form>
      </header>
      <h1 className='main__heading'>Streaming Now</h1>
      <section className='main'>
        <MoviesContainer
          rateMovie={rateMovie}
          movies={filter ? filteredMovies : movies}
        />
      </section>
    </div>
  );
}

export default App;
