import Image from 'next/image';
import React from 'react'

const CastCard = ({credit}) => {
  const {profile_path, name, character} = credit
  return (
    // Card for main actors' information
    <div className=" bg-white rounded-md cursor-pointer">
        <Image src={`https://image.tmdb.org/t/p/w500${profile_path}`} width={700} height={800} className=" rounded-t-md" alt="{name}"/>
        <div className="px-6 py-2" >
          <div className="font-bold text-xl mb-1">
            {name}
          </div>
          <span className="text-gray-700 text-base font-bold mb-1">
          character: {character}
          </span>
        </div>
      </div>
  )
}

export default CastCard