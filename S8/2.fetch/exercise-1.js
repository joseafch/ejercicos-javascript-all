let contenedor=document.querySelector('div')
let traerApi=()=>{
    fetch('https://api.agify.io?name=michael')
    .then(res => 
        // console.log(res))
    res.json()
    )
.then(datos => console.log(datos))
}
  traerApi()