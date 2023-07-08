import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (

        <nav className="bg-[#0d253f]">
            <div className="flex items-center justify-between font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest">
                <div className="flex items-center space-x-4">
                    <Link href="/">
                        <span className="text-base md:text-2xl">TMDB</span>
                    </Link>
                    <div className="flex space-x-4">
                        <Link href="/category/upcoming" className="text-neutral-100 hover:text-neutral-200">Upcoming</Link>
                        <Link href="/category/popular" className="text-neutral-100 hover:text-neutral-200">Popular</Link>
                        <Link href="/category/top_rated" className="text-neutral-100 hover:text-neutral-200">Top Rated</Link>
                    </div>
                </div>
                <div className='flex items-center space-x-4' >
                    <p>Plus</p>
                    <p>Lang</p>
                    <p>Join TMDB</p>
                    <p>Lupa</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar