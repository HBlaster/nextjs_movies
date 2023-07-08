import axios from "axios";
import Hero from "../components/Hero";
import { server } from '../config/index';
import { genre } from '../config/index';
import Movies from "../components/Movies";

export default function Home({movies}) {
  console.log(movies);
  const firstImage = movies[0].poster_path;
  const title = 'now_playing';
  return (
    <div >
      <Hero image={firstImage}/>
      <Movies movies={movies} title={title}/>
    </div>
  )
}

export async function getStaticProps() {
  const res = await axios(`${server}/now_playing?api_key=${process.env.API_KEY}`);
  const movies = res.data;
  const resGenres = await axios(`${genre}?api_key=${process.env.API_KEY}`);
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

