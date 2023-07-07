import React from 'react'
import MovieCard from './MovieCard'

const PopularMovie = ({ movies, title}) => {
  let titleAdapted = title.charAt(0).toUpperCase() + title.slice(1);
    if(titleAdapted === 'Top_rated'){
      titleAdapted = 'Top Rated'
    }else if(titleAdapted=== 'Now_playing'){
      titleAdapted = 'Now Playing'
    }
  return (
    <div className="  container max-w-7xl mx-auto pb-10 px-4">
      <h1 className=" text-gray-700 text-2xl mt-8 mb-5">{titleAdapted}</h1>
      <div className=" grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5" >
        {movies.map(movie => <MovieCard movie={movie} key={movie.id} list={title}/>)}
      </div>

    </div>
  )
}

export default PopularMovie