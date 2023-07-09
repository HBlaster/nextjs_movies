import React from 'react'
import MovieCard from './MovieCard'

const Movies = ({ movies, title }) => {

  // Rewriting received titles
  const titleMap = {
    popular: 'Popular',
    top_rated: 'Top Rated',
    upcoming: 'Upcoming',
    now_playing: 'Now Playing'
  };

  const titleAdapted = titleMap[title] || '';
  return (
    // Grid layout for rendering movies
    <div className="  container max-w-7xl mx-auto pb-10 px-4">
      <h1 className=" text-gray-700 text-2xl mt-8 mb-5">{titleAdapted}</h1>
      <div className=" grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5" >
        {movies.map(movie => <MovieCard movie={movie} key={movie.id} list={title} />)}
      </div>

    </div>
  )
}

export default Movies