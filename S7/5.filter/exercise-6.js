const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

let toxico=streamers.filter(manco=>

    (manco.age > 35 &&  manco.gameMorePlayed.includes('Legends'))? manco.gameMorePlayed = manco.gameMorePlayed.toUpperCase() : '' || manco.gameMorePlayed.includes('Legends') 
    // si edad es mayor que 35 y incluye legens . si es asi psara legen todo a mayusculas,si no es asi no hara nada O tambien filtrara los que incluya legens

)

console.log(toxico);