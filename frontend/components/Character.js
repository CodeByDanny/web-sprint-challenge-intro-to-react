import React from 'react'
import { useState } from 'react'

function Character(props) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [showPlanet, setShowPlanet] = useState(false);
  const handleClick = () => {
    setShowPlanet(!showPlanet)
  }
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
    <div className="character-card" onClick={handleClick}>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className="character-name">{props.name}</h3>
      {showPlanet && <p>Planet: <span className="character-planet">{props.planet}</span></p>}
    </div>
  )
}

export default Character
