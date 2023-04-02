import React from 'react';
import { Link } from 'react-router-dom';
import './movie.css';

export default function Movie({ movie, rented, unrented, buttoncontent }) {
  return (
    <div className="movie-container">
      <div className="movie-item">
        <Link to={`/movies/${movie.id}`}>
          <img src={movie.img} alt={movie.title} className="movie-image" />
        </Link>
        <div className="movie-details">
          <h2 className="movie-title">{movie.title}</h2>
          <p className="movie-status"></p>
          {buttoncontent === 'rent' ? (
            <button className="movie-button" onClick={() => rented(movie)}>
              {buttoncontent}
            </button>
          ) : (
            <button className="movie-button" onClick={() => unrented(movie)}>
              {buttoncontent}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}