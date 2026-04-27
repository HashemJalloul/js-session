let firstName = "hashem";
let lastName = " jalloul";
let age = 33;
let city = "lattakia";

let hashemInfoObject = {
  firstName: "hashem",
  lastName: " jalloul",
  age: 33,
  city: "lattakia",
};
// let hashemInfo =
//   firstName + lastName + " and his age is" + age + " he lives in " + city;
// let hashemInfo = `${firstName} ${lastName} and his age is ${age} he lives in ${city} `;
let hashemInfoObjecte = `${hashemInfoObject.firstName} ${hashemInfoObject.lastName} and his age is ${hashemInfoObject.age} he lives in ${hashemInfoObject.city} `;
console.log(hashemInfoObjecte);

let studentes = [
  "ahmed",
  "mohammed",
  "ali1",
  "ali2",
  "ali3",
  "ali4",
  "ali5",
  "ali6",
];
let text = "ahmed";
for (let index = 0; index < studentes.length; index++) {
  text = text + " " + studentes[index];
  console.log(index, studentes[index]);
  document.write(`${studentes[index]} \n`);
}

console.log(studentes);
console.log(text);

console.log(typeof studentes);
