// import Link from 'next/link'
// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus, faGlobe, faSearch, faSignInAlt } from '@fortawesome/free-solid-svg-icons';


// const Navbar = () => {
//     const iconStyle = { width: '20px' };
//     return (

//         <nav className="bg-[#0d253f]">
//             <div className="flex items-center justify-between font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest">
//                 <div className="flex items-center space-x-4">
//                     <Link href="/">
//                         <span className="text-base md:text-2xl">TMDB</span>
//                     </Link>
//                     <div className="flex space-x-4">
//                         <Link href="/category/upcoming" className="text-neutral-100 hover:text-neutral-200">Upcoming</Link>
//                         <Link href="/category/popular" className="text-neutral-100 hover:text-neutral-200">Popular</Link>
//                         <Link href="/category/top_rated" className="text-neutral-100 hover:text-neutral-200">Top Rated</Link>
//                     </div>
//                 </div>
//                 <div className='flex items-center space-x-4' >

//                     <FontAwesomeIcon icon={faPlus} style={iconStyle} />
//                     <FontAwesomeIcon icon={faGlobe} style={iconStyle} />
//                     <FontAwesomeIcon icon={faSignInAlt} style={iconStyle} />
//                     <FontAwesomeIcon icon={faSearch} style={iconStyle} />
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default Navbar
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faGlobe, faSearch, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const iconStyle = { width: '20px' };
    return (

        <nav className="bg-[#0d253f]">
            <div className="flex items-center justify-between font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest">
                <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-2 md:space-y-0">
                    <Link href="/">
                        <span className="text-base md:text-2xl">TMDB</span>
                    </Link>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                        <Link href="/category/upcoming" className="text-neutral-100 hover:text-neutral-200">Upcoming</Link>
                        <Link href="/category/popular" className="text-neutral-100 hover:text-neutral-200">Popular</Link>
                        <Link href="/category/top_rated" className="text-neutral-100 hover:text-neutral-200">Top Rated</Link>
                    </div>
                </div>
                <div className='flex flex-row space-x-2 md:space-x-4' >
                    <Link href={'#'}><FontAwesomeIcon icon={faPlus} style={iconStyle} /></Link>
                    
                    <Link href={'#'} ><FontAwesomeIcon icon={faGlobe} style={iconStyle} /></Link >
                    <Link href={'#'}><FontAwesomeIcon icon={faSignInAlt} style={iconStyle} /></Link >
                    <Link href={'#'}><FontAwesomeIcon icon={faSearch} style={iconStyle} /></Link>
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar
