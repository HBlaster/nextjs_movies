// import Image from 'next/image';
// import Link from 'next/link';

const Hero = ({image}) => {
  const heroImageSize = "w1280";
  const heroImageURL = `https://image.tmdb.org/t/p/${heroImageSize}${image}`;

  const heroStyles = {
    height: '600px',
    overflow: 'hidden',
    backgroundImage: `url(${heroImageURL})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'brightness(30%)',
  };



  return (
    <div className="text-center " style={heroStyles}>
    </div>
  );
};

export default Hero;
