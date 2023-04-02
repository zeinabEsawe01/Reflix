import React from 'react'
import { useParams } from 'react-router-dom';
import './movie.css'

export default function MovieDetails({getSpecificMovie}) {
    const {id} = useParams();
    const movie = getSpecificMovie(id)
    console.log(id);
    console.log(movie);
  return (
    <div className="catalog-item">
    <img className='movie-image' src={movie.img} alt={movie.title} />
    <div className="catalog-item-info">
      <h2>{movie.title}</h2>
      <p className="catalog-item-description">{movie.descrShort}</p>
        <p className="catalog-item-year">Year: {movie.year}</p>
    </div>
  </div>
  )
}
