import React, { useState } from 'react'
import useBebidas from '../hooks/useBebidas'
import Bebida from './Bebida';

function BebidasFavoritas({mostrarFavorito}) {
    
    
    const{bebidas}=useBebidas();
    const bebidasFav=JSON.parse(localStorage.getItem('Favoritos'));

    const [fav,setFav]=useState(bebidasFav);
    

    console.log("Desde BebidasFavoritas: ",fav,mostrarFavorito);
    
    return (
    <div>
    <h2>Listado de favoritos</h2>
        {mostrarFavorito==false?'':<div>
        {fav.map(b=>(
            <Bebida bebida={b}></Bebida>
    ))}
        </div>
    }
    </div>
  )
}

export default BebidasFavoritas