import React from 'react'
import { Modal,Image,Button } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

const ModalBebida = () => {
    const {modal,handleModalClick,receta,cargando,bebidaId,agregarFavoritos}=useBebidas();
    
    const mostrarIngrediente=()=>{
        let ingredientes=[];

        for(let i =1;i<16;i++){
            if(receta[ `strIngredient${i}`]){
                ingredientes.push(
                    <li>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredientes;
    }
    const agregar=(bebidaId)=>{
       
        agregarFavoritos(bebidaId);
    }
    return (
    !cargando && (<Modal key={receta.strDrink} show={modal} onHide={()=>handleModalClick()}>
       
        <Image src={receta.strDrinkThumb} alt='Imagen receta' />    
        <Modal.Header>
            <Modal.Title>{receta.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='p-3'>
                <h2>Instrucciones</h2>
                {receta.strInstructions}
                <h2>Ingredientes y Cantidades</h2>
                {mostrarIngrediente(bebidaId)}
            </div>
        
        </Modal.Body>
    </Modal>
    )
  )
}

export default ModalBebida