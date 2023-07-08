import React from 'react'

const Crew = ({credits}) => {
    console.log( "credits at crew component" ,credits);
  return (
    <div>
        {credits.topBilledCast.map((person, index) => (
            <p key={index}>{person.name}</p>
        ))}
    </div>
  )
}

export default Crew