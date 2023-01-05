let boton=document.querySelector('.btnToClick')
boton.textContent = 'pincha aqui'
let call= () => {
   return console.log('hago un evento que al darle click sobre un boron imprime este console-log');

}
// boton.onclick= "saludar"
boton.addEventListener("click",call)