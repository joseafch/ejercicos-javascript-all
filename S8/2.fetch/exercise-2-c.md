En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno de los p que hayas insertado y que si el usuario hace click en este botón eliminemos el parrafo asociado.
const baseUrl = 'https://api.nationalize.io?name=';

let buscar = () =>{
    const input$$ = document.querySelector('input')

    fetch(baseUrl + input$$.value)
    .then(respuesta=> respuesta.json())
    .then(datos =>{
        crearPersonaje=(datos)
    })
   
}
let crearPersonaje=(datos)=> {
    let texto=`el nombre ${datos.name}tiene`;

    for (const pais of datos.country) {
        const porcentage = Math.floor(pais.probability * 100)
         texto += `un ${porcentage} porciento de ser de ${pais.country_id}`;
    } 
let div$$=document.createElement('div');
let p$$=document.createElement('p');
let boton$$=document.createElement('button');

p$$.textContent = texto;

// boton$$.textContent ='eliminar';

document.body.appendChild(div$$);
div$$.appendChild(p$$);
div$$.appendChild(boton$$);
boton$$.addEventListener('click',()=>{ removerp(div$$)})
}

let removerp=(elemento$$)=>{
    elemento$$.remove()
}
let button$$=document.querySelector('button')
 button$$.addEventListener('click',buscar)
console.log('patatas');