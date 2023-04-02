import { useState } from 'react';
import './App.css';
import { MOVIES , USERS } from './CONSTANTS';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/landing';
import NavBar from './components/navBar';
import Catalog from './components/movieCatalog/catalog';
import MovieDetails from './components/movieCatalog/movieDetails';

function App() {

  const [moviesList , setMovies] = useState(MOVIES)
  const [users , setUsers] = useState(USERS)
  const [rentedMovie , setRentedMovie] = useState([])
  const [budget , setBudget] = useState(100)

  function getSpecificMovie(movieId){
   return moviesList.find(movie => movie.id ===parseInt(movieId)) ||
    rentedMovie.find(movie => movie.id ===parseInt(movieId))
  }

  function rented(movie){
    let newRent = [...rentedMovie]
    newRent.push(movie)
    setRentedMovie(newRent)
    let newBudget = budget
    setBudget(newBudget-3)
    deleteMovie(movie)
  }

  function unrented(movie) {
    let movieIndex = rentedMovie.findIndex(m => m.id === movie.id)
    let newRentedList = [...rentedMovie]
    newRentedList.splice(movieIndex,1)
    setRentedMovie(newRentedList)
    let newBudget = budget
    setBudget(newBudget+3)
    addToMovieList(movie)
  }

  function deleteMovie(movie){
    let movieIndex = moviesList.findIndex(m => m.id === movie.id)
    let newMovieList = [...moviesList]
    newMovieList.splice(movieIndex,1)
    setMovies(newMovieList)
  }

  function addToMovieList(movie){
    let newMovie = [...moviesList]
    newMovie.push(movie)
    setMovies(newMovie)
  }
  
  return (

    <Router>
    <div className="App">
      <NavBar/>
    </div>
      <Routes>
        <Route path="/" element={<Landing users={users} />} />
        <Route path="/catalog" element={<Catalog movies={moviesList} rentedMovie = {rentedMovie} rented={rented} unrented = {unrented} budget={budget}/>} />
        <Route path="/movies/:id" element={<MovieDetails getSpecificMovie={getSpecificMovie}/>} />
        </Routes>
    </Router>
  );
}

export default App;
