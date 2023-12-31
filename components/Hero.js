const Hero = ({ image }) => {
  // An image is received with a width of 1280
  const heroImageSize = "w1280";
  const heroImageURL = `https://image.tmdb.org/t/p/${heroImageSize}${image}`;

  // Setting up designs for hero image
  const heroStyles = {
    overflow: 'hidden',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImageURL})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    // Rendering hero
    <div className="flex flex-col justify-center items-center text-center text-white h-[300px] md:h-[400px] lg:h-[400px] max-w-7xl mx-auto tracking-widest rounded-md" style={heroStyles}>
      <h1 className=" font-bold text-5xl">Welcome.</h1>
      <p className=" text-2xl" >Millions of movies and people to discover. Explore now.</p>
    </div>
  );
};

export default Hero;
