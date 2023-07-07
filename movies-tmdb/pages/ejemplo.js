// Para cambiar la lista de películas en función del enlace en el que se hace clic, necesitarás hacer un manejo dinámico de rutas y una solicitud a la API en función del enlace clicado.

// El enfoque más común en Next.js sería crear una página dinámica que reciba la categoría de películas como parámetro y luego en base a eso haga la solicitud a la API correspondiente.

// Aquí te muestro los cambios que necesitas hacer en tu código:

// Modifica los enlaces en tu NavBar:
// jsx
//  <Copy code>
// components/navbar.js
<Link href="/category/upcoming" className="text-neutral-100 hover:text-neutral-200">Upcoming</Link>
<Link href="/category/popular" className="text-neutral-100 hover:text-neutral-200">Popular</Link>
<Link href="/category/top_rated" className="text-neutral-100 hover:text-neutral-200">Top Rated</Link>


// Crea una nueva página dinámica en pages/category/[category].js:
// jsx
// Copy code
// pages/category/[category].js
import axios from "axios";
import { server } from '../../config/index';
import Hero from "../../components/Hero";
import PopularMovie from "../../components/PopularMovie";
import { useRouter } from 'next/router'

export default function Category({movies}) {
  const router = useRouter();
  const { category } = router.query;
  
  console.log(movies);
  const firstImage = movies[0]?.poster_path;
  
  return (
    <div>
      <Hero image={firstImage}/>
      <PopularMovie movies={movies} title={category}/>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { category: 'upcoming' } },
      { params: { category: 'popular' } },
      { params: { category: 'top_rated' } },
    ],
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const res = await axios(`${server}/${params.category}?api_key=${process.env.API_KEY}`);
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
// En el código anterior, la función getStaticPaths define las rutas que se pregenerarán en tiempo de construcción. La función getStaticProps obtiene los datos de la película para la categoría especificada en la URL.

// Ahora, cuando hagas clic en los enlaces de tu Navbar, serás dirigido a la página de la categoría correspondiente, donde se mostrará la lista de películas correspondiente a la categoría seleccionada.