import axios from 'axios';
import React from 'react';
import { server } from '../../../../config/index';
import Image from 'next/image';
import Meta from '../../../../components/Meta';
import Crew from '../../../../components/crew';

const Movie = ({ movie, movieDetails }) => {
  console.log("esscritor en producers", movieDetails.producers);
  return (
    <>
      <div className="container max-w-8xl mx-auto pt-6 flex">
        <div className="w-1/3">
          <img
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.backdrop_path}`}
            layout="responsive"
            width={5}
            height={5}
            style={{ width: "100%", display: "block", maxHeight: "100vh", objectFit: "cover" }}
            className="rounded-md"
            alt={movie.title} />
        </div>
        <div className="w-2/3 px-3" style={{ marginTop: 'auto', marginBottom: 'auto' }}>
          <Meta title={movie.title} />
          <h1 className="font-bold text-gray-600 text-xl my-1">{movie.title}</h1>
          <p className=" text-gray-600 text-xl">{movie.genres.reduce((acc, genre, index) => {
            if (index === 0) {
              return genre.name;
            } else if (index === movie.genres.length - 1) {
              return acc + " & " + genre.name;
            } else {
              return acc + ", " + genre.name;
            }
          }, "")}</p>
          <p className="text-gray-600 text-xl">{movie.release_date}</p>

          <p className="text-gray-600 text-xl mt-4">{movie.overview}</p>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <p className="text-gray-600 text-xl">Director: <span className="font-bold">{movieDetails.director.name}</span></p>
            <p className="text-gray-600 text-xl">Writer: <span className="font-bold">{movieDetails.writers.name}</span></p>
            <p className="text-gray-600 text-xl">Producer: <span className="font-bold">{movieDetails.producers.name}</span></p>
          </div>
        </div>

      </div>
      <div className=" container max-w-5xl mx-auto">
        <Crew credits={movieDetails.topBilledCast}></Crew>
      </div>
    </>
  )
}
export async function getStaticProps(context) {

  const { id } = context.params;
  const [movieRes, creditsRes] = await Promise.all([
    axios(`${server}/${id}?api_key=${process.env.API_KEY}`),
    axios(`${server}/${id}/credits?api_key=${process.env.API_KEY}`)
  ]);

  const movie = movieRes.data;
  const credits = creditsRes.data;
  const topBilledCast = credits.cast.filter(actor => actor.order <= 4);
  const director = credits.crew.find(member => member.job === "Director");
  const writers = credits.crew.find(member => member.department === "Writing");
  const producers = credits.crew.find(member => member.department === "Production");

  const movieDetails = {
    topBilledCast,
    director,
    writers,
    producers
  };

  return {
    props: { movie, movieDetails }
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