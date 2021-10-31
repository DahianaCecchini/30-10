export const fetchDatos = (API, options, exito, fallo) => 
    fetch(API, options).then(response =>{
        if(response.status.toString().startsWith("20")){ 
            return response.json().then(exito)
        }else{
            return response.json().then(fallo)
        }
    }).catch(fallo)