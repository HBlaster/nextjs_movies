import axios from "axios";
import Hero from "../components/Hero";
import { server } from '../config/index';
import PopularMovie from "../components/PopularMovie";

export default function Home({movies}) {
  console.log(movies);
  return (
    <div className=" bg-gray-700">
      <Hero/>
      <PopularMovie movies={movies}/>
    </div>
  )
}

export async function getStaticProps() {
  const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}`);
  const movies = res.data;
  const resGenres = await axios(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}`);
  const genres = resGenres.data.genres;

  

  // Mapear los géneros a las películas
  const moviesWithGenres = movies.results.map(movie => {
    const movieGenres = movie.genre_ids.map(id => genres.find(genre => genre.id === id));
    return { ...movie, genres: movieGenres };
  });

  return {
    props: { movies: moviesWithGenres }
  };
}

