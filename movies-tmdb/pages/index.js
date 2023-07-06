import axios from "axios";
import Hero from "../components/Hero";
import { server } from '../config/index';
import PopularMovie from "../components/PopularMovie";

export default function Home({movies}) {
  console.log(movies);
  return (
    <div className=" bg-gray-700">
      <Hero/>
      <PopularMovie movies={movies.results}/>
    </div>
  )
}

export async function getStaticProps() {
  const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}`);
  const movies = res.data;

  return {
    props:{movies}
  }
}
