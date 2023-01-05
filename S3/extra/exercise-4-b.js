const countries = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];

let ul$$=document.createElement('ul')
document.body.appendChild(ul$$)
let bton=document.querySelector('button')


for (const links of countries) {
  let li$$=document.createElement('li')
  ul$$.append(li$$)
    let div$$= document.createElement('div')
li$$.appendChild(div$$)
let h4$$= document.createElement('h4')
div$$.appendChild(h4$$)
h4$$.textContent=links.title
let img$$= document.createElement('img')
div$$.appendChild(img$$)
img$$.src= links.imgUrl


}
let eliminate=()=>{
    
    let lastli= ul$$.lastElementChild

lastli.remove()
}
bton.addEventListener('click',eliminate)