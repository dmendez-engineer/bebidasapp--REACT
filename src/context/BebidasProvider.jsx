import axios from "axios";
import {createContext,useState,useEffect} from "react"

const BebidasContext=createContext();

const BebidasProvider=({children})=>{
    const [bebidas,setBebidas]=useState([]);
    const [modal,setModal]=useState(false);
    const[bebidaId,setBebidaId]=useState(null);
    const [receta,setReceta]=useState({});
    const [cargando,setCargando]=useState(false);
    const [mostrarFavoritos,setMostrarFavoritos]=useState(false);
    const[bebidasFavoritas,setBebidasFavoritas]=useState([]);
    const arrayFavorito=[];
    const handleMostrarFavoritos=()=>{
        setMostrarFavoritos(!mostrarFavoritos);
    }
   
    const consultarBebidas=async(datos)=>{

     
        try{
            const url= `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`;

            const {data}=await axios(url);
           
            setBebidas(data.drinks);
        }catch(error){
            console.log("Error:",error);
        }
    }

    const handleModalClick=()=>{
        setModal(!modal);
    }
    const handleBebidaIdClick=(id)=>{
        setBebidaId(id);
    }
    const agregarFavoritos= async (id)=>{
       const url= `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
      
       const {data}=await axios(url);
       
      // console.log(bebidasFavoritas.length);
      
        /*if(bebidasFavoritas.length==0){
           console.log("ACA ENTRA; ",data.drinks[0]);
          
        }
        else{
            setBebidasFavoritas([...bebidasFavoritas,data.drinks[0]]);
        }*/
       // arrayFavorito.push(data.drinks[0]);
       setBebidasFavoritas([...bebidasFavoritas,data.drinks[0]]);
       // console.log("bebidaAgregar: ",bebidaAgregar);
       //console.log("FAVORITOS: ",arrayFavorito);
       localStorage.setItem('Favoritos',JSON.stringify(bebidasFavoritas));
    }
    useEffect(()=>{
        setCargando(true);
        const obtenerReceta=async()=>{
            if(!bebidaId){
                return;
            }
            else{
                try{
                    const url= `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`;
                    const {data}=await axios(url);
                    console.log(data.drinks[0]);
                    setReceta(data.drinks[0]);
                }catch(error){
                    console.log(error);
                }finally{
                    setCargando(false);
                }
            }
        }
        obtenerReceta();
    },[bebidaId]);

    return(
        <BebidasContext.Provider
        value={{
            consultarBebidas:consultarBebidas,
            bebidas:bebidas,
            handleModalClick:handleModalClick,
            modal:modal,
            handleBebidaIdClick:handleBebidaIdClick,
            receta:receta,
            setReceta:setReceta,
            cargando:cargando,
            handleMostrarFavoritos:handleMostrarFavoritos,
            mostrarFavoritos:mostrarFavoritos,
            bebidaId:bebidaId,
            agregarFavoritos:agregarFavoritos
        }}
        >
            {children}
        </BebidasContext.Provider>
    )
}
export {
    BebidasProvider
}
export default BebidasContext