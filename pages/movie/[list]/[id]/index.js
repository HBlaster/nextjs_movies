import axios from 'axios';
import React from 'react';
import { server } from '../../../../config/index';
import Meta from '../../../../components/Meta';
import Image from 'next/image';
import Crew from '../../../../components/Crew';

const Movie = ({ movie, movieDetails }) => {
  const { backdrop_path, genres, title, release_date, overview } = movie;
  const { topBilledCast, director, writers, producers } = movieDetails;

  return (

    // Rendering movie image, overview, director, writer, and producer data
    <>
      <div className="container mx-auto pt-6 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3">
          <Image
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${backdrop_path}`}
            layout="responsive"
            width={5}
            height={5}
            style={{ width: "100%", display: "block", maxHeight: "100vh", objectFit: "cover" }}
            className="rounded-md"
            alt={title}
          />
        </div>

        <div className="w-full lg:w-2/3 px-3 mt-6 lg:mt-0" style={{ marginTop: 'auto', marginBottom: 'auto' }}>
          <Meta title={movie.title} />
          <h1 className="font-bold text-gray-600 text-xl my-1">{title}</h1>
          <p className="text-gray-600 text-xl">{genres.reduce((acc, genre, index) => {
            if (index === 0) {
              return genre.name;
            } else if (index === genres.length - 1) {
              return acc + " y " + genre.name;
            } else {
              return acc + ", " + genre.name;
            }
          }, "")}</p>
          <p className="text-gray-600 text-xl">{release_date}</p>
          <p className="text-gray-600 text-xl mt-4">{overview}</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
            <p className="text-gray-600 text-xl">Director: <span className="font-bold">{director.name}</span></p>
            <p className="text-gray-600 text-xl">Escritor: <span className="font-bold">{writers.name}</span></p>
            <p className="text-gray-600 text-xl">Productor: <span className="font-bold">{producers.name}</span></p>
          </div>
        </div>
      </div>


      {/* Sending actor data to the Crew component */}

      <div className=" container max-w-5xl mx-auto">
        <Crew credits={topBilledCast}></Crew>
      </div>
    </>
  )
}
export async function getStaticProps(context) {

  const { id } = context.params;
  // Queries to receive movie data and credits
  const [movieRes, creditsRes] = await Promise.all([
    axios(`${server}/${id}?api_key=${process.env.API_KEY}`),
    axios(`${server}/${id}/credits?api_key=${process.env.API_KEY}`)
  ]);

  //Retrieve the data from the query of the movie details
  const movie = movieRes.data;
  const credits = creditsRes.data;

  // Prepare movie credits data for sending to components
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

  // Define a list of different movie categories
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