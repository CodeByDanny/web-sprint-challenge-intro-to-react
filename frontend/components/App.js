import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  const [planet, setPlanet] = useState()
  const [people, setPeople] = useState()
  // ❗ Create effects to fetch the data and put it in state
  useEffect(() => {
    function getPlanets(){
      axios.get(urlPlanets)
        .then(res => {
          setPlanet(res.data)
        })
        .catch(err => {
          console.log(err.message)
        })
    }
    function getPeople(){
      axios.get(urlPeople)
        .then(res => {
          setPeople(res.data)
        })
        .catch(err => {
          console.log(err.message)
        })
    }
    getPlanets();
    getPeople();

  },[])
  if (!planet || !people) return "Loading"
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {planet.map((plt) => {
        people.map((per) => {
          if(plt.id === per.homeworld) {
            per.homeworld = plt.name
          }
        })
      })}
      {people.map((person) => {
        return (
          <Character 
          name={person.name}
          key={person.id}
          planet={person.homeworld}
          />
        )
      })}
      
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
