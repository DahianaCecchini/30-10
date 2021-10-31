import { useEffect, useState } from "react"
import { fetchDatos } from "../Js/conjuntoApi"
import { Product } from "../Js/Product"
import { ProductRenderer } from "../Productos jsx/ProductRenderer"

export const Productos = () => {
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState([0])

    const agregarCarrito = (paramentro) => {
        console.log(paramentro)
    }

useEffect(()=>{
    fetchDatos('http://localhost/4000/pizzasGrandes',{},(data)=>setProducts(
        data.map(value => {
            return new Product(value.nombre,value.categoria,value.id)
        })),
        error => console.log(error))
},[])
return (
    <div id="pizzas">
        {
         products.length == 0 ? 
            (
                <>
                    INICIANDO
                </>
            ):
                            (
                                products.map(product => 
                                    <ProductRenderer 
                                        product={product} 
                                        addToCart={addToCart}>
                                    </ProductRenderer>
                                )
                            )
                        }
     
    </div>
)}