import React, { useEffect, useState } from 'react'
import PokemonThumb from './components/PokemonThumb'
import axios from 'axios'
 
const App = () => {

  const [allPokemons, setAllPokemons] = useState()
  const [loadMore, setLoadMore] = useState(0)

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${loadMore}`)
      .then(res => setAllPokemons(res.data))
  }, [loadMore])

  useEffect(() => {
    setLoadMore(10)
  },[])

  return (
    <div className="app-contaner">
      <h1>Pokemon Evolution</h1>
      <div className="pokemon-container">
        <div className="all-container">
          {
            allPokemons &&
            allPokemons?.results.map( (pokemonStats, index) => 
            <PokemonThumb
              key={index}
              url={pokemonStats.url}
            />)}
          
        </div>
          <button className="load-more" onClick={() => setLoadMore(loadMore + 10)}>Load more</button>
      </div>
    </div>
  );
}

export default App;