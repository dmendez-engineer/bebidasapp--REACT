import {Button,Form,Row,Col,Alert} from "react-bootstrap"
import {React,useState} from 'react'
import useCategorias from "../hooks/useCategorias"
import useBebidas from "../hooks/useBebidas"

const Formulario = () => {
   
    const{consultarBebidas}=useBebidas();
   
    const{categorias}=useCategorias();
    const [alerta,setAlerta]=useState('');
    const [busqueda,setBusqueda]=useState({
        nombre:'',
        categoria:''
    });

    const handleSubmit=(e)=>{
        e.preventDefault();


        if(Object.values(busqueda).includes('')){
            setAlerta('Todos los campos son obligatorios');
            return;
        }
        setAlerta('');
        consultarBebidas(busqueda);
    }

    return (
    <Form onSubmit={(e)=>handleSubmit(e)}>
    {alert && <Alert variant='danger' className='text-center'>{alerta}</Alert>}
        <Row>
            <Col md={6}>
                <Form.Group className="mb-3">
                    <Form.Label
                    htmlFor="nombre"
                    >
                        Categoria Bebida
                    </Form.Label>
                    <Form.Control
                    id="nombre"
                    type="text"
                    placeholder="Ej: Tequila, Vodka, etc"
                    name="nombre"
                    value={busqueda.nombre}
                    onChange={(e)=>setBusqueda({
                        ...busqueda,
                        [e.target.name]:e.target.value
                    })}
                    />
                </Form.Group>
            </Col>
            <Col md={6}>
                
            <Form.Group className="mb-3">
            <Form.Label
            htmlFor="categoria"
            >
                Categoria Bebida
            </Form.Label>
            <Form.Select id="categoria" name="categoria"
                    value={busqueda.categoria}
                    onChange={(e)=>setBusqueda({
                        ...busqueda,
                        [e.target.name]:e.target.value
                    })}
            >
                <option value="">Selecciona Categoria</option>
                {categorias.map((c)=>(
                    <option key={c.strCategory}
                    value={c.strCategory}
                    >
                    {c.strCategory}
                    </option>
                ))}
            </Form.Select>
        </Form.Group>


            </Col>
        </Row>
        <Row className="justify-content-end">
                <Col md={3}>
                    <Button
                    variant="danger"
                    className="text-uppercase w-100"
                    type="submit"
                    >
                    Buscar Bebidas
                    </Button>
                </Col>
        </Row>
    </Form>
  )
}

export default Formulario