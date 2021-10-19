// PRACTICE SESSION

// ARRAY OF OBJECTS

// ARRAY
// ACCESS = INDEX
// const days = [23, "mon", true];
// days[1];

// OBJECT
// ACCESS = KEY
// const person = { firstName: "Tanjirou", age: 17 };
// person.firstName;
// person["firstName"];

// ARRAY OF OBJECTS
// const products = [
//   { id: 1, type: "Food", name: "Rice", expired: true, qty: -2 },
//   { id: 2, type: "Food", name: "Noodle", expired: false, qty: 0 },
//   { id: 3, type: "Food", name: "Meatball", expired: true, qty: 23 },
// ];

// FILTER : Menyaring data (akan ada yang dihilangkan)
// Setiap data yang diproses, kemudian menghasilkan nilai true, maka dia akan disimpan

// Filter product yang sudah expired
/*
  [
    { id: 1, type: "Food", name: "Rice", expired: true, qty: 2 },
    { id: 3, type: "Food", name: "Meatball", expired: true, qty: 23 }
  ]
*/
// const resultFilter = products.filter((product) => {
//   // product : { id: 3, type: "Food", name: "Meatball", expired: true, qty: 23 }
//   return product.expired;
// });

// console.log(resultFilter);

// MAP : Mengubah bentuk data
/*
  [
    'Name: Rice, Quantity: 2',
    'Name: Noodle, Quantity: 3',
    'Name: Meatball, Quantity: 23'
  ]
*/
// const result = products.map((product) => {
//   // product : { id: 2, type: "Food", name: "Noodle", expired: false, qty: 3 }
//   // 'Name: Noodle, Quantity: 3'
//   return `Name: ${product.name}, Quantity: ${product.qty}`;
// });

// console.log(result);
/*
  [2, 3, 23]
*/
// const result2 = products.map((product) => {
//   // product : { id: 1, type: "Food", name: "Rice", expired: true, qty: 3 }
//   return product.qty;
// });

// console.log(result2);

// Falsy and Truthy value

// False
// 1.String : string kosong
// 2 Number : 0
// 3 Undefined, Null, NaN

// const things = [{ id: 3, name: "Sarimi" }];

// if (things.length) {
//   let something;
//   console.log("Data ditemukan");
//   console.log("Data ditemukan");
//   console.log("Data ditemukan");
//   console.log("Data ditemukan");
//   console.log("Data ditemukan");
// } else {
//   console.log("Data tidak ditemukan");
// }

// Naming variable
// 1. Gunakan Camel Case
// 2. Bedakan antara tunggal dan jamak, kalau jamak tambahkan huruf s di belakang
// 3. Gunakan const jika memang tidak ingin dirubah nilainya, gunakan let jika nantinya value pada variable akan diubah

// ARRAY OF OBJECTS
// const products = [
//   { id: 1, type: "Food", name: "Rice", expired: true, qty: -2 },
//   { id: 2, type: "Food", name: "Noodle", expired: false, qty: 0 },
//   { id: 3, type: "Food", name: "Meatball", expired: true, qty: 23 },
// ];

// for (let i = 0; i < products.length; i++) {
//   console.log(products[i].name);
// }

// products.forEach((product) => {
//   console.log(product.name);
// });

// Ternary Operation
// let todo;
// const rain = false;

// if (rain) {
//   todo = "Gunakan jas hujan";
// } else {
//   todo = "Gunakan jaket";
// }

// const dodo = rain ? "Gunakan jas hujan" : "Gunakan jaket";
// console.log(dodo);

// note for conditional statement
// const animals = [];

// if (animals.length) {
//   console.log(`Kita memiliki ${animals.length} hewan`);
// } else {
//   console.log(`Kita tidak memiliki hewan`);
// }

// if (animals.length) return console.log(`Kita memiliki ${animals.length} hewan`);

// console.log(`Kita tidak memiliki hewan`);

// var

// if (true) {
//   let color = "black";
//   console.log("inside if", color);
// }

// console.log(color);

// while (true) {
//   let day = "sunday";
//   console.log("inside while", day);
//   break;
// }

// console.log(day);

// const fnScope = () => {
//   let fruit = "Apple";
//   console.log("function", fruit);
// };
// fnScope();
// console.log(fruit);

let abc = "hello";

{
  let abc = "hi";
  console.log("di dalam block", abc);
}

console.log("di luar block", abc);
