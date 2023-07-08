import React from 'react'
import CastCard from './CastCard';

const Crew = ({credits}) => {
    console.log( "credits at crew component" ,credits);
    const title = 'Top Billed Cast'
    return (
        <div className="  container center max-w-7xl mx-auto pb-10 px-4">
          <h1 className=" text-gray-700 text-2xl mt-8 mb-5">{title}</h1>
          <div className=" grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5" >
            {credits.map(credit => <CastCard credit={credit} key={credit.id} />)}
          </div>
    
        </div>
      )
}


export default Crew