let input$$=document.querySelector('input')
let call=()=>{
    return console.log(text);
}

input$$.addEventListener('focus',(elemento)=>{
console.log((input$$.value));
elemento.target.style.background = "yellow" // si quires darle un stilo o x tienes de poner. target para que seleccione el elemento

})