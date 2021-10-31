import React from 'react'; 
import { Carrito } from '../SegundaColumna/Carrito';

export const Productos = () => {
let categories = ['MUZZA', 'SIMPLES', 'GOURMET', 'SUPER GUSTOS']
let categoria = ['CARNE CEB. Y MORRON', 'JAMON Y QUESO', 'QUESO Y ACEITUNAS', 'QUESO Y CEBOLLA', 'CAPRESSE', 'VERDURA']
let categoryPapas = ['GRANDES', 'PEQUEÑAS', 'CHEDDAR', 'GRAMAJO']
let categorySandw = ['COMUN', 'MUZZA', 'NAPO', 'ESPECIAL']
let categoryBebidas = ['COCA COLA', 'LATA', 'LITRO', 'STELLA', 'HEINEKEN']
let categoryExtras = ['ALIOLI', 'GUSTO EXTRA', 'MAS']

return(
<section>
<div className="productos">
  
<h1>PIZZAS GRANDES</h1>
<div id="pizzas">{
    categories.map( element =>{
        return(
        <button>{element}</button>)})}
</div>

<h1>PIZZAS MEDIANAS</h1>
<div id="pizzasM">{
    categories.map( element =>{
        return(
        <button>{element}</button>)})}
</div>

<h1>PIZZAS CHICAS</h1>
<div id="pizzasCh">{
    categories.map( element =>{
        return(
        <button>{element}</button>)})}
</div>

<h1>EMPANADAS</h1>
<div id="empanadas">{
    categoria.map( element =>{
        return(
        <button>{element}</button>)})}
</div>

<h1>PAPAS FRITAS</h1>
<div id="fritas">{
categoryPapas.map( element =>{
        return(
        <button>{element}</button>)})}
</div>

<h1>SANDWICHES CALIENTES</h1>
<div id="sandwiches">{
categorySandw.map( element =>{
        return(
        <button>{element}</button>)})}
</div>

<h1>BEBIDAS</h1>
<div id="bebidas">{
categoryBebidas.map( element =>{
        return(
        <button>{element}</button>)})}
</div>

<h1>EXTRAS</h1>
<div id="extras">{
categoryExtras.map( element =>{
        return(
        <button>{element}</button>)})}

</div>
</div>
<Carrito></Carrito>
</section>)
}



    