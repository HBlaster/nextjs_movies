import Image from 'next/image';
import React from 'react'

const CastCard = ({credit}) => {
  return (
    <div className=" bg-white shadow-sm rounded-md cursor-pointer">
        <Image src={`https://image.tmdb.org/t/p/w500${credit.profile_path}`} width={700} height={800} className=" rounded-t-md" alt="{credit.name}"/>
        <div className="px-6 py-2" >
          <div className="font-bold text-xl mb-1">
            {credit.name}
          </div>
          <span className="text-gray-700 text-base font-bold mb-1">
          character: {credit.character}
          </span>
       
        </div>
      </div>
  )
}

export default CastCard