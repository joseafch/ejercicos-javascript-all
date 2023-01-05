const baseUrl = 'https://api.nationalize.io?name=';

let input$$=document.querySelector('input')

let busqueda=()=>{
fetch(baseUrl  + input$$.value)
// console.log(fetch);
.then(respuesta=> respuesta.json())
// console.log(respuestas);
.then(datos => console.log(datos) )
}
// busqueda()
let boton$$=document.querySelector('button')
boton$$.addEventListener('click',busqueda)