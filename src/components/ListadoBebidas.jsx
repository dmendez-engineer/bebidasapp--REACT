import React from 'react'
import useBebidas from '../hooks/useBebidas'
import { Row } from 'react-bootstrap';
import Bebida from './Bebida';

const ListadoBebidas = () => {
    const {bebidas}=useBebidas([]);
  
    return (

   <Row className='mt-5'>
        {bebidas.map(b=>(
            <Bebida
            key={b.idDrink}
            bebida={b}
            />
        ))}
   </Row>
  )
}

export default ListadoBebidas