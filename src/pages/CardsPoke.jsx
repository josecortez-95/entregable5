import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CardsPoke = ({ url }) => {

    const navegar = useNavigate()
    const [pokemons, setpokemons] = useState()
    useEffect(() => {
        const URL = url
        axios.get(URL)
            .then(res => setpokemons(res.data))
            .catch(err => console.log(err))

    }, [])

    const handleNvigate = () => {
        navegar(`/pokedex/${pokemons.id}`)
    }


    return (
        <div className='card' onClick={handleNvigate}>

            <div className='cabecera-card'>
                <img src={pokemons?.sprites.other["official-artwork"].front_default} alt="" />
                <h2 > {pokemons?.name}</h2>
                <div className='cuerpo-card'>
                    {
                        pokemons?.types.map(type => (
                            <h3 key={type.slot}>{type.type.name}</h3>
                        ))
                    }
                </div>
                 <div className='cuerpo2'> 
                {
                pokemons?.stats.map(stat => (
                    <aside  key={stat.stat.name}>
                           {stat.stat.name}
                        {stat.base_stat}
                    
                    </aside>
                   
                ))
            }

            </div>
            </div>
           
            






        </div>
    )
}

export default CardsPoke