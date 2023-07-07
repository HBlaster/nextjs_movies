import React from 'react'
import MovieCard from './MovieCard'

const PopularMovie = ({ movies, title}) => {
  return (
    // <div className=" bg-gray-700 container max-w-7xl mx-auto pb-10 px-4">
    <div className="  container max-w-7xl mx-auto pb-10 px-4">
      <h1 className=" text-gray-700 text-2xl mt-8 mb-5">{title}</h1>
      <div className=" grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5" >
        {movies.map(movie => <MovieCard movie={movie} />)}
      </div>

    </div>
  )
}

export default PopularMovie