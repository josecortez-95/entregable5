import React from 'react'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import axios from "axios"
import CardsPoke from './CardsPoke'
import InputSerch from './InputSerch'
import Select from './Select'

const Pokedex = () => {

  const userName = useSelector(state => state.userName)
  const URL = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0.`
  const [pokemon, setPokemon] = useState()
  const [selectValor, setselectValor] = useState("todoslosvalores")
  useEffect(() => {

    if (selectValor !== "todoslosvalores") {
      axios.get(selectValor)
        .then(res => {
          const resultado = res.data.pokemon.map(e => e.pokemon)
          setPokemon(resultado)
        })
        .catch(err => console.log(err))
    }
    else {
      axios.get(URL)
        .then(res => setPokemon(res.data.results))
        .catch(err => console.log(err))
    }

  }, [selectValor])

  return (
    <div className='principal'>
      <div className='menus'>
        <h1>Pokedex</h1>
        <p>Bienvenido <span>{userName}</span> elige tu poquemon favorito</p>
      </div>

      <aside className='inputs'>
        <InputSerch />
        <Select setselectValor={setselectValor} />
      </aside>
      <div className='padre'>
          {
        pokemon?.map(poke => (
          <CardsPoke key={poke.url} url={poke.url} />
        ))
      }
      </div>
    
    </div>
  )
}

export default Pokedex
