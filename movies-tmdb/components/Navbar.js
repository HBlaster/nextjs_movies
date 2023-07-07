import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    
    <nav className="bg-[#0d253f]">
    <div className="flex items-center justify-between font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest">
        <Link href="/">
            <span className="text-base md:text-2xl">TMDB</span>
        </Link>
        <div className="flex space-x-4">
            <Link href="/" className="text-neutral-100 hover:text-neutral-200">Upcoming</Link>
            <Link href="/" className="text-neutral-100 hover:text-neutral-200">Popular</Link>
            <Link href="/" className="text-neutral-100 hover:text-neutral-200">Top Rated</Link>
        </div>
    </div>
</nav>
)
}

export default Navbar