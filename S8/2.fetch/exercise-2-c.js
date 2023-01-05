const baseUrl = 'https://api.nationalize.io';


let buscar = () =>{
    const input$$ = document.querySelector('input')

    fetch(baseUrl + '?name=' + input$$.value).then(respuesta=> respuesta.json()).then(datos =>{
        crearPersonaje(datos)
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

boton$$.textContent ='eliminar';

document.body.appendChild(div$$);
div$$.appendChild(p$$);
div$$.appendChild(boton$$);
boton$$.addEventListener('click',()=>{ removerp(div$$)})
}

let removerp=(elemento$$)=>{
    elemento$$.remove()
}
let botton$$=document.querySelector('button');

botton$$.addEventListener('click', buscar);

console.log('patatas');
