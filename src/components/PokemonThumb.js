import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PokemonThumb = ({url}) => {
    
    const [pokemon, setPokemon] = useState()
    useEffect(() => {
      axios.get(url)
        .then(res => setPokemon(res.data))
    },[url])

    const style = pokemon?.types[0].type.name + " thumb-container";
    return (
        <div className={style}>
            <div className="number"><small>#0{pokemon?.id}</small></div>
            <img src={pokemon && pokemon?.sprites.other.dream_world.front_default} alt={pokemon?.name} />
            <div className="detail-wrapper">
                <h3>{pokemon?.name}</h3>
                <small>Type: {pokemon?.types[0].type.name}</small>
            </div>
        </div>
    )
}

export default PokemonThumb