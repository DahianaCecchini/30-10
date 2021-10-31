import React from "react";
import { ChecksBox } from "../SegundaColumna/ChecksBox";


export function Formulario () {
    return(
        <div className="formulario">
        <form>
            <input className="nombre" type="text" id="name" placeholder="NOMBRE/IDENTIFICADOR"/>
            <span id="identificador"></span>
            <input className="direccion" type="text" id="domicilio" placeholder="DIRECCION"/> 
            <span id="direccion"></span>
            <input className="numero" type="number" id="number" placeholder="N°" minlength="1" maxlength="4"/>
            <span id="n"/><span> 
            <input className="telefono" id="celular" type="text" placeholder="CELULAR"/>
            <span id="celular2"/></span>
            <input className="adicional" type="text" id="info" placeholder="INFO ADICIONAL"/>
            <span id="info2"></span>
        </form>
    <ChecksBox></ChecksBox>
    </div> 
    )
}