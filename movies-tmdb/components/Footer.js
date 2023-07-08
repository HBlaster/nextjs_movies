import React from 'react'

const Footer = () => {

  const linkStyle = {
    display: 'block'
  };

  return (
    <div className='bg-[#0d253f]'>
      <div className=" text-white text-left  flex items-center justify-between container max-w-4xl mx-auto text-xl">
        <div >
        <a href="#" className="font-bold text-base md:text-2xl" style={linkStyle}>TMDB</a>
        </div>
        <div>
          <p className="font-bold">THE BASICS
          </p>
          <a href="#" style={linkStyle}>About TMBD</a>
          <a href="#" style={linkStyle}>Contact Us</a>
          <a href="#" style={linkStyle}>Support Forums</a>
          <a href="#" style={linkStyle}>API</a>
          <a href="#" style={linkStyle}>System Status</a>
          
        </div>
        <div>
          <p className="font-bold">GET INVOLVED
          </p>
        </div>
        <div>
          <p className="font-bold">COMMUNITY</p>
        </div>
      <div>
        <p className="font-bold">LEGAL</p>
      </div>
    </div>
    </div >
  )
}

export default Footer