import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-700" >
        <div className=" font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest">
            <Link href="/">
            <span className="text-base md:text-2xl">TMDB</span>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar