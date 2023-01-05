
let busqueda=()=>{
    let input$=document.querySelector('input');
    fetch(baseUrl + '?name=' +input$.value)
    // console.log(fetch);
    .then(respuesta=> respuesta.json())
    // console.log(respuestas);
    .then(datos => {
    createp(datos)
    })
}

    let createp=(datos)=>{
        let p$$= document.createElement('p')
        let texto= `el nombre ${datos.name} tiene`;
        for (const pais of datos.country) {
            let porcentage = Math.floor(pais.probability * 100)
            texto +=`un porcentaje ${porcentage} porciento de ser ${pais.country_id}`
        }
        document.body.appendChild(p$$)

        p$$.textContent = texto
    }

    let boton$$=document.querySelector('button')
    boton$$.addEventListener('click', busqueda)