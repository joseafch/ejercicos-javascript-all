const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

let viaje=cities.map(lugares =>lugares.isVisited === true ? lugares.name + ' '+ 'visitado' : lugares)

console.log(viaje);