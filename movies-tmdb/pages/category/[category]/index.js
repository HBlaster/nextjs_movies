import axios from 'axios';
import React from 'react';
import { server } from '../../../config/index';
import { genre } from '../../../config/index';
import PopularMovie from '../../../components/PopularMovie';
import { useRouter } from 'next/router';


const Category = ({movies}) => {
    console.log(movies);
    const router = useRouter();
    const {category} = router.query; 

  return (
    <PopularMovie movies={movies} title={category}/>
  )
}

export async function getStaticPaths() {
    // Define los posibles valores para [category]
    const paths = [
      { params: { category: 'upcoming' } },
      { params: { category: 'popular' } },
      { params: { category: 'top_rated' } },
    ];
  
    return {
      paths,
      fallback: false,
    };
  }

  export async function getStaticProps({ params }) {
    const { category } = params;
    console.log("categoria recibida",{category});
  
    // Realiza la consulta utilizando el parámetro [category]
    const res = await axios(`${server}/${category}?api_key=${process.env.API_KEY}`);


    const movies = res.data;
    const resGenres = await axios(`${genre}?api_key=${process.env.API_KEY}`);
    const genres = resGenres.data.genres;
  
    // Mapear los géneros a las películas
    const moviesWithGenres = movies.results.map(movie => {
      const movieGenres = movie.genre_ids.map(id => genres.find(genre => genre.id === id));
      return { ...movie, genres: movieGenres };
    });
  
    return {
      props: { movies: moviesWithGenres },
    };
  }
  


export default Category