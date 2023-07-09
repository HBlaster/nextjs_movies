import React from 'react'

const Footer = () => {

  const linkStyle = {
    display: 'block'
  };

  return (
    <div className="bg-[#0d253f] p-8">
  <div className="text-white text-left flex justify-between container max-w-4xl mx-auto text-sm">
    <div className="flex items-center">
      <a href="#" className="font-bold text-base md:text-2xl" style={linkStyle}>
        TMDB
      </a>
    </div>
    <div>
      <p className="font-bold">THE BASICS</p>
      <nav>
        <ul>
          <li><a href="#" style={linkStyle}>About TMBD</a></li>
          <li><a href="#" style={linkStyle}>Contact Us</a></li>
          <li><a href="#" style={linkStyle}>Support Forums</a></li>
          <li><a href="#" style={linkStyle}>API</a></li>
          <li><a href="#" style={linkStyle}>System Status</a></li>
        </ul>
      </nav>
    </div>
    <div>
      <p className="font-bold">GET INVOLVED</p>
      <nav>
        <ul>
          <li><a href="#" style={linkStyle}>Contribution Bible</a></li>
          <li><a href="#" style={linkStyle}>Add New Movie</a></li>
          <li><a href="#" style={linkStyle}>Add New Tv Show</a></li>
        </ul>
      </nav>
    </div>
    <div>
      <p className="font-bold">COMMUNITY</p>
      <nav>
        <ul>
          <li><a href="#" style={linkStyle}>Guidelines</a></li>
          <li><a href="#" style={linkStyle}>Discussions</a></li>
          <li><a href="#" style={linkStyle}>Leaderboard</a></li>
          <li><a href="#" style={linkStyle}>Twitter</a></li>
        </ul>
      </nav>
    </div>
    <div>
      <p className="font-bold">LEGAL</p>
      <nav>
        <ul>
          <li><a href="#" style={linkStyle}>Terms of Use</a></li>
          <li><a href="#" style={linkStyle}>API Terms of Use</a></li>
          <li><a href="#" style={linkStyle}>Privacy Policy</a></li>
        </ul>
      </nav>
    </div>
  </div>
</div>
  )
}

export default Footer