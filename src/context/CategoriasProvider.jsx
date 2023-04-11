import axios from "axios";
import {createContext,useState,useEffect} from "react"

const CategoriasContext=createContext();

const CategoriasProvider=({children})=>{

    const[categorias,setCategorias]=useState([]);

    const obtenerCategorias=async ()=>{
        try{
            //const url=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`;
            const url=`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
            const {data}=await axios(url);
           
            setCategorias(data.drinks);
        }catch(error){
            console.log("Error: ",error);
        }
    }
    useEffect(()=>{
        obtenerCategorias();
    },[]);



    return(
        <CategoriasContext.Provider
        value={{
            categorias:categorias
        }}
        >
            {children}
        </CategoriasContext.Provider>
    )
}
export {
    CategoriasProvider
}
export default CategoriasContext