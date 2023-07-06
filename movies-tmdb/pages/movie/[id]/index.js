import axios from 'axios';
import React from 'react';
import { server } from '../../../config/index';

const Movie = ({movie}) => {
    console.log(movie);
  return (
    <div>Movie Detail</div>
  )
}

// REVISAR PORQUE ESTO FALLA
// export async function getStaticProps() {
//     const res = await axios(`${server}/569094?api_key=${process.env.API_KEY}`);
//     const movie = res.data;
  
//     return {
//       props:{movie}
//     }
//   }

export async function getStaticPaths (){
    const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}`);
    const movies = res.data.results;

    const ids = movies.map(movie => movie.id);
    const paths = ids.map(id => ({ params: {id: id.toString()} }))
  
    return {
      paths,
      fallback:false
    }
}

export default Movie