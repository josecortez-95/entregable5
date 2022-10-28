import React from 'react'
import { useNavigate } from 'react-router-dom'

const InputSerch = () => {
    const navegar=useNavigate()
    const  butonBuscar= e => {
        e.preventDefault()
        navegar(`/pokedex/${e.target.buscar.value.trim()}`)
    }
  return (
    <div>
        <form  onSubmit={butonBuscar}>
            <input type="text" placeholder='busca tu pokemon' id='buscar'  />
            <button> buscar</button>
        </form>
    </div>
  )
}

export default InputSerch
