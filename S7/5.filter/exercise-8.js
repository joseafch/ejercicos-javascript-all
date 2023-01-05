const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];
let inpur$$=document.querySelector('input');
let button$$=document.querySelector('button')
let buscador=(event) =>{
    let searsh=event.target.previousElementSibling; // target del evento seria como un input$$ value
    let filtro=streamers.filter(stream => stream.name.toLowerCase().includes(searsh.value.toLowerCase()))
    console.log(filtro);
    // console.log(event); con esto vemos si recivimos un evento cada ves q escrivamos algo en el input
}

button$$.addEventListener('click',buscador);