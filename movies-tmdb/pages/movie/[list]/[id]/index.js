import axios from 'axios';
import React from 'react';
import { server } from '../../../../config/index';
import Image from 'next/image';
import Meta from '../../../../components/Meta';

const Movie = ({movie}) => {
    console.log(movie);
  return (
    <div className="container max-w-4xl mx-auto pt-6" >
      <Meta title={movie.title} />
      <div className="px-3">
        <Image src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} width={1000} height={600} className=" rounded-md"/>
        <h1 className="font-bold text-xl my-2" > {movie.title}</h1>
        <p className="text-gray-600 text-sm mt-4" > {movie.overview} </p>
        <p className="mt-5 text-gray-600 text-sm" > Genres: <span className="font-bold">{movie.genres.map(genre => genre.name).join(', ')}</span> </p>
        <p className="text-gray-600 text-sm">Release Date: <span className="font-bold">{movie.release_date}</span></p>
      </div>
    </div>
  )
}

// export async function getStaticProps(context) {
//     const {id} = context.params; 
//     const res = await axios(`${server}/${id}?api_key=${process.env.API_KEY}`);
//     const movie = res.data;
  
//     return {
//       props:{movie}
//     }
//   }

// export async function getStaticPaths (){
//     // const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}`);
//     const res = await axios(`${server}/${list}?api_key=${process.env.API_KEY}`);
//     const movies = res.data.results;
    

//     const ids = movies.map(movie => movie.id);
//     // const paths = ids.map(id => ({ params: {id: id.toString()} }))
//     const lists = ['top_rated', 'popular', 'upcoming', 'now_playing'];

//   const paths = lists.flatMap(list =>
//     movies.map(movie => ({ params: { list, id: movie.id.toString() } }))
//   );
  
//     return {
//       paths,
//       fallback:false
//     }
// }
export async function getStaticProps(context) {
  const { id, list } = context.params;
  const res = await axios(`${server}/${id}?api_key=${process.env.API_KEY}`);
  const movie = res.data;

  return {
    props: { movie }
  };
}

export async function getStaticPaths() {
  const lists = ['top_rated', 'popular', 'upcoming', 'now_playing'];

  const paths = [];

  for (const list of lists) {
    const res = await axios(`${server}/${list}?api_key=${process.env.API_KEY}`);
    const movies = res.data.results;

    const ids = movies.map(movie => movie.id);
    const listPaths = ids.map(id => ({ params: { list, id: id.toString() } }));

    paths.push(...listPaths);
  }

  return {
    paths,
    fallback: false
  };
}
export default Movie