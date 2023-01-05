let div$$= document.querySelectorAll('.fn-insert-here')
// let parff$$= div$$.createElement('p')
// parff$$.textContent='voy dentro'

for (let i = 0; i < div$$.length; i++) {
    const element = div$$[i];
    let parff$$= document.createElement('p')
    element.appendChild(parff$$)
    parff$$.textContent='voy dentro'
}




// for (const insert of div$$) {
//     console.log(div$$);
//     let parff$$= document.createElement('p')
//     div$$.appendChild(parff$$)
// parff$$.textContent='voy dentro'
  

// }
console.log(div$$);