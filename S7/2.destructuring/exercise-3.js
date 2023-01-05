const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

let {name, race}=animalFunction()
// let {race}=animalFunction()
console.log('animal: ',name);
console.log('raza: ',race);


// let newObeject={...animalFunction()}
// console.log(newObeject);