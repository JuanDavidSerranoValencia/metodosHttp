/*let obtener = async()=>{
    let peticion = await fetch("https://64f202d20e1e60602d2490bc.mockapi.io/usuario");
    let res  = await peticion.json();
    
}

obtener();*/
/*
let enviar = async()=>{
    let obj ={
        "cedula": 22,
        "nombre": "Juan",
        "apellido": "Serrano",
        "edad": 20,
        
    };
    let config={
        method:"POST",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(obj)

    }
    let peticion = await fetch("https://64f202d20e1e60602d2490bc.mockapi.io/usuario",config);
    let res = await peticion.json();
    console.log(res)
    
}

enviar();*/


let eliminar = async()=>{

    let id="3";
    let config={
        method:"DELETE",
        headers: {'Content-type': 'application/json'},
       
    }
    let peticion = await fetch( `https://64f202d20e1e60602d2490bc.mockapi.io/usuario/`+id,config);
    let res = await peticion.json();
    console.log(res)
}
eliminar();


let actualizar = async()=>{
    let id = "5";
    let obj = {
        "cedula": 22,
        "nombre": "carlos",
        "apellido": "suarez",
        "edad": 22,
        
    }
    let config={
        method:"PUT",
        headers:{'Content-type': 'application/json'},
        body:JSON.stringify(obj)
    }

    let peticion = await fetch(`https://64f202d20e1e60602d2490bc.mockapi.io/usuario/`+id,config)
    let res = await peticion.json();
    console.log(res);
    
}

actualizar();