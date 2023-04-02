import React from 'react'
import Movie from './movie'

export default function RentedMovie({rentedMovie, text , unrented}) {
    let unrent = "Un-rent"
  return (
    <div>
        { text === "" ? rentedMovie.map((m) => <Movie movie={m} buttoncontent={unrent} unrented={unrented}/> )
      :rentedMovie.map((m) => m.title.toLowerCase().includes(text) ? <Movie movie={m}  buttoncontent={unrent} unrented={unrented}/> 
      : null )}
    </div>
  )
}
