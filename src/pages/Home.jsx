import React from 'react'
import {useDispatch}from "react-redux"
import { useNavigate } from 'react-router-dom'
import{setUserNameGlobal}from "../store/slices/userName.slice"

const Home = () => {

  const dispatch = useDispatch()
  const navigate =useNavigate()
  const submit = e => {
    e.preventDefault()
    dispatch( setUserNameGlobal( e.target.firstChild.value.trim()))
    navigate("/pokedex")

  }

  return (
    
    <div className='Inicio'>
      <h1 className='Inicio-titulo'> Pokedex</h1>
      <h2 className='Inicio-subtitulo'> Hola entrenador</h2>
      <p className='Inicio-parrafo'> para comenzar dame tu nombre </p>
      <form onSubmit={submit} className='Inicio-formulario'>
        <input className='Inicio-input-formulario' type="text" placeholder='ingresa tu nombre' />
        <button className='Inicio-boton-formulario' >comenzar</button>
      </form>

    </div>
  )
}

export default Home