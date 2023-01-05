const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let div$$=document.querySelector('[data-function]');

let ul$$=document.createElement('ul')
div$$.appendChild(ul$$)
for (let i = 0; i< cars.length; i++) {
    const element = cars[i];
    let li$$=document.createElement('li')
    ul$$.appendChild(li$$)
    li$$.textContent= element
      }
      