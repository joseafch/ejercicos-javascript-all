const userAnwsers = [];

function confirmExample(description){
   return confirm(description)
}

function promptExample(description){
   return prompt(description)
}

function father(description,callback){
    userAnwsers.push(callback(description))

}

father('hola esto es un mesaje de confirmacion', confirmExample);
father('esto es un prompt', promptExample);

console.log(userAnwsers);