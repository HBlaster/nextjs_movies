import Image from 'next/image';
import React from 'react'

const CastCard = ({credit}) => {
  return (
    <div className=" bg-white shadow-sm rounded-md cursor-pointer">
        <Image src={`https://image.tmdb.org/t/p/w500${credit.profile_path}`} width={700} height={800} className=" rounded-t-md" />
        <div className="px-6 py-2" >
          <div className="font-bold text-xl mb-1">
            Title
          </div>
          <span className="text-gray-700 text-base font-bold mb-1">
            genres
            {/* {movie.genres.reduce((acc, genre, index) => {
              if (index === 0) {
                return genre.name;
              } else if (index === movie.genres.length - 1) {
                return acc + " & " + genre.name;
              } else {
                return acc + ", " + genre.name;
              }
            }, "")} */}
          </span>
          {/* <p className=" text-gray-700 text-base mb-1" >{movie.release_date}</p> */}
          <p className=" text-gray-700 text-base mb-1" >releases</p>
          {/* <p className=" text-gray-700 text-base mb-1" > Vote Average: {movie.vote_average} ⭐</p> */}
          <p className=" text-gray-700 text-base mb-1" > Vote Average</p>





        </div>
      </div>
  )
}

export default CastCard