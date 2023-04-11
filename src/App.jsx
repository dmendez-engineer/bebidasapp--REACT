import { useState } from 'react'
import {Button, Container} from "react-bootstrap"
import Formulario from './components/Formulario'
import { CategoriasProvider } from './context/CategoriasProvider'
import { BebidasProvider } from './context/BebidasProvider'
import ListadoBebidas from './components/ListadoBebidas'
import ModalBebida from './components/ModalBebida'
import useBebidas from './hooks/useBebidas'
import BebidasFavoritas from './components/BebidasFavoritas'


function App() {

  const[mostrarFavorito,setMostrarFavorito]=useState(false);

  const handleMostarFavorito=()=>{
    setMostrarFavorito(!mostrarFavorito);
  }
  return (
    <BebidasProvider>
      <CategoriasProvider>
        <header className="py-5">
          <h1 className='mb-5'>Buscador de bebidas</h1>
          
          </header>
          <div className='float-end'>
         
          </div>
        

        <Container className='mt-5'>
            <Formulario/>

            <ListadoBebidas/>
          {/*
          <BebidasFavoritas
            mostrarFavorito={mostrarFavorito}
            />
          */ 
         }
            
            <ModalBebida/>

            

        </Container>
      </CategoriasProvider>
    </BebidasProvider>
  )
}

export default App
