import axios from "axios";
import Hero from "../components/Hero";
import { server } from '../config/index';

export default function Home({movies}) {
  console.log(movies);
  return (
    <div className="">
      <Hero/>
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

