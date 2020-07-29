import React, { useState, useEffect, createContext } from "react";
import logo from "./queeery-logo.png";
import MoviesContainer from "../src/components/MoviesContainer";
import "./App.css";
import * as movieData from "./movies";

// export const MoviesContext = createContext();

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      movieData.movies$
        .then((data) => {
          setMovies(data);
        })
        .catch((err) => {
          // display UI err
          throw err;
        });
    };
    getMovies();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <h1 className='main__heading'>Streaming Now</h1>
      <section className='main'>
        <MoviesContainer movies={movies} />
      </section>
    </div>
  );
}

export default App;
