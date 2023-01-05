const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

let namecar= 'mazda'
let itvs= [2015,2011,2020]

let {name} = car
let {itv}= car
let años=car.itv[0]
let años1=car.itv[1]
let años2=car.itv[2]
console.log('coche: ',name +'.Años de las itv: ',itv);
console.log('segunda itv ',años);
console.log('primer itv ',años1);
console.log('tercera itv ','tercera itv ',años2);