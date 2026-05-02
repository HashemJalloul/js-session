// let firstName = "hashem";
// let lastName = " jalloul";
// let age = 33;
// let city = "lattakia";

// let hashemInfoObject = {
//   firstName: "hashem",
//   lastName: " jalloul",
//   age: 33,
//   city: "lattakia",
// };
// // let hashemInfo =
// //   firstName + lastName + " and his age is" + age + " he lives in " + city;
// // let hashemInfo = `${firstName} ${lastName} and his age is ${age} he lives in ${city} `;
// let hashemInfoObjecte = `${hashemInfoObject.firstName} ${hashemInfoObject.lastName} and his age is ${hashemInfoObject.age} he lives in ${hashemInfoObject.city} `;
// console.log(hashemInfoObjecte);

// let studentes = [
//   "ahmed",
//   "mohammed",
//   "ali1",
//   "ali2",
//   "ali3",
//   "ali4",
//   "ali5",
//   "ali6",
// ];
// let text = "ahmed";
// for (let index = 0; index < studentes.length; index++) {
//   text = text + " " + studentes[index];
//   console.log(index, studentes[index]);
//   document.write(`${studentes[index]} \n`);
// }

// console.log(studentes);
// console.log(text);

// console.log(typeof studentes);

// studentes.forEach(function (item) {
//   console.log(item);
// });

// function cretElement(text) {
//   let creatAnewElement = document.createElement("p");
//   creatAnewElement.innerText = text;
//   let body = document.querySelector("body");
//   // body.innerHTML = creatAnewElement;
//   body.appendChild(creatAnewElement);
// }

// cretElement("hello");

// let programmingLanguges = ["css", "c", "js", "css"];

// function printLanguges(lang) {
//   let craetAnewElement = document.createElement("div");
//   let body = document.querySelector("body");
//   body.appendChild(craetAnewElement);
//   craetAnewElement.innerHTML = `this is : ${lang}`;
// }

// programmingLanguges.forEach((item) => {
//   printLanguges(item);
// });

// const print = () => {
//   console.log(1);
// };
// print();
// get the value
let elementIndex = 0;

const newRowButton = document.querySelector(".add-new-button");

newRowButton.addEventListener("click", (event) => {
  const nameInput = document.querySelector(".name");
  const lastInput = document.querySelector(".last");
  const handleInput = document.querySelector(".handle");

  addRowToTable(
    nameInput.value,
    lastInput.value,
    handleInput.value,
    elementIndex,
  );

  const deleteButton = document.querySelector(`.delete-${elementIndex}`);

  deleteButton.addEventListener("click", (event) => {
    event.target.parentElement.parentElement.remove();
  });
  elementIndex += 1;

  nameInput.value = "";
  lastInput.value = "";
  handleInput.value = "";
});

const addRowToTable = (name, last, handle, elementIndex) => {
  const tableBody = document.querySelector(".table tbody");
  tableBody.insertAdjacentHTML(
    "beforeend",
    `
    <tr>
                        <td scope="col">${elementIndex}</td>
                        <td scope="col">${name}</td>
                        <td scope="col">${last}</td>
                        <td scope="col">${handle}</td>
                        <td><button  onClick=deleteRow(event) class="btn btn-danger delete-${elementIndex}">Delete</button></td>
                    </tr>
    
    `,
  );
};

// const nameInput = document.querySelector(".name");

// nameInput.addEventListener("input", (event) => {
//   const data = event.target.value;
//   console.log(data);
// });

// const deleteRow = (event) => {
//   event.target.parentElement.parentElement.remove();
// };
