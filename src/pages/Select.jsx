import axios from 'axios'
import React from 'react'
import { useEffect ,useState} from 'react'


const Select = ({setselectValor}) => {

   const [select, setselect] = useState() 

   useEffect(() => {
      const  URL = `https://pokeapi.co/api/v2/type`
      axios.get(URL)
      .then(res => setselect(res.data.results))
      .catch(err=>console.log(err))
   }, [])
   const onChanges = e =>{
    setselectValor(e.target.value)
   }
 

  return (
    <div>
        <select onChange={onChanges}>
            <option value="todoslosvalores">Todos Los Pokemons</option>
           {
              select?.map(e=>(
                <option key={e.url} value={e.url}>{e.name}</option>
              ))
           }
        </select>
    </div>
  )
}

export default Select