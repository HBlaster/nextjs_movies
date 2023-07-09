import Image from 'next/image'
import Link from 'next/link'

const MovieCard = ({ movie, list}) => {
  const { id,poster_path, title, genres, release_date, vote_average  } = movie;
  return (
    // Rendering movies in cards
    <Link href={`/movie/${list}/${id}`} >
      <div className=" bg-white  rounded-md cursor-pointer">
        <Image src={`https://image.tmdb.org/t/p/w500${poster_path}`} width={700} height={800} className=" rounded-t-md" alt="{title}" />
        <div className="px-6 py-2" >
          <div className="font-bold text-xl mb-1">
            {title}
          </div>
          <span className="text-gray-700 text-base font-bold mb-1">
            {genres.reduce((acc, genre, index) => {
              if (index === 0) {
                return genre.name;
              } else if (index === movie.genres.length - 1) {
                return acc + " & " + genre.name;
              } else {
                return acc + ", " + genre.name;
              }
            }, "")}
          </span>
          <p className=" text-gray-700 text-base mb-1" >{release_date}</p>
          <p className=" text-gray-700 text-base mb-1" > ⭐ {vote_average} </p>





        </div>
      </div>
    </Link>

  )
  
}

export default MovieCard


