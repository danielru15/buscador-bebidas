import axios from 'axios'
import { useState , useEffect , createContext } from 'react'

 const CategoriasContext = createContext()

 const CategoriasProvider = ({children}) => {
     const [Categorias, setCategorias] = useState([])

     const obtenerCategorias  = async () => {
         try {
             const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

             const { data } = await axios.get(url)
             setCategorias(data.drinks)
         } catch (error) {
             console.log(error)
         }
     }
    useEffect(() => {
      obtenerCategorias()
    
      
    }, [])
    

    return (
        <CategoriasContext.Provider value={{Categorias}}>
            {children}
        </CategoriasContext.Provider>
    )

}
export {
    CategoriasProvider
}

export default CategoriasContext