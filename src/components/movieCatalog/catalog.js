import React, { useState } from 'react'
import RentedMovie from './rentedMovie';
import Movie from './movie'
import './movie.css';



export default function Catalog({movies , rented , unrented , rentedMovie , budget}) {
  
  const [text , setText] = useState("")
  let rent = "rent"

  function updateText(event){
    setText(event.target.value)
  }
  return (
    <div className='catalog'>
      <input type="text" value={text} onChange={updateText} placeholder="Search Movie..."></input>
      <h2>Budget: {budget}$</h2>
      <div className='catalog-item'>
      {rentedMovie.length > 0 ? <div><h2>RentedMovie</h2><RentedMovie rentedMovie={rentedMovie} text={text} unrented={unrented}/></div> : null}
      </div>
      <div className='catalog-item'>
        <h2>Catalog</h2>
      { text === "" ? movies.map((m) => <Movie movie={m} rented={rented} buttoncontent={rent}/> )
      :movies.map((m) => m.title.toLowerCase().includes(text) ? <Movie movie={m} buttoncontent={rent}/> 
      : null )} 
      </div>

    </div>
  )
}
