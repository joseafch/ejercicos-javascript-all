const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];
let a='anacleto'
let cambio= users.map(usuario=>(
//    console.log(usuario.name)
    usuario.name.includes('A') ?  'anacleto'  : usuario.name
))
console.log(cambio);