import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const PokedexById = () => {

  const { id } = useParams()
  const [pokeid, setpokeid] = useState()
  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
    .then(res => setpokeid(res.data))
    .catch(err => console.log(err))

  }, [])

 
  return (
    <div>
      <img src={pokeid?.sprites.other["official-artwork"].front_default} alt="" />
      <h2>{pokeid?.name}</h2>
    </div>
  )
}

export default PokedexById