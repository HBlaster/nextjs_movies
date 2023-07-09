import axios from 'axios';
import React from 'react';
import { server } from '../../../config/index';
import { genre } from '../../../config/index';
import { useRouter } from 'next/router';
import Movies from '../../../components/Movies';


const Category = ({movies}) => {
  //Retrieve the movie category data to render the title
    const router = useRouter();
    const {category} = router.query; 

  return (
    //Send the obtained data to the Movies component
    <Movies movies={movies} title={category}/>
  )
}

export async function getStaticPaths() {
    // Define the possible values for [category]
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
  
    // Perform the query using the [category] parameter
    const res = await axios(`${server}/${category}?api_key=${process.env.API_KEY}`);


    const movies = res.data;
    const resGenres = await axios(`${genre}?api_key=${process.env.API_KEY}`);
    const genres = resGenres.data.genres;
  
    // Map the genres to the movies
    const moviesWithGenres = movies.results.map(movie => {
      const movieGenres = movie.genre_ids.map(id => genres.find(genre => genre.id === id));
      return { ...movie, genres: movieGenres };
    });
  
    return {
      props: { movies: moviesWithGenres },
    };
  }
  


export default Category