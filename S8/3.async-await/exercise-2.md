Convierte la siguiente función con un fetch utilizando async-await. Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;

````js
async function getCharacters () {
   let response= await fetch('https://rickandmortyapi.com/api/character') //console.log(response);
   let res = await response.json()
//    console.log (res)
}

getCharacters();
````
