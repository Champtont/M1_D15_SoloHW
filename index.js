//Starting JS!!!

//Ex 21

const x = "John";
const y = "Doe";
console.log(x + " <> " + y);

//Ex 22

const me = {
  name: "Court",
  surname: "H-Thomas",
  email: "jaye0888@gmail.com",
};
console.log(me);

//Ex 23

delete me.email;

console.log(me);

//Ex 24

const tenStrings = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
console.log(tenStrings);

//Ex 25

for (let i = 0; i < tenStrings.length; i++) {
  console.log(tenStrings[i]);
}

//Ex 26

const randomArray = [];

for (let i = 0; i < 100; i++) {
  const newNum = Math.floor(Math.random() * 101);
  randomArray.push(newNum);
}
console.log(randomArray);

const findMaxMin = () => {
  console.log("The minimun Number is " + Math.min(...randomArray));
  console.log("The Maximum Number is " + Math.max(...randomArray));
};

findMaxMin();

//DOM Practice
//EX 31

const container = document.getElementById("container");

//Ex 32

const td = document.querySelectorAll("td");

//Ex 33

//I made it so that this needs to be called with a function in the console...otherwise, it executes immediately
// this one writes over what was previously there... I am sure that I could append a p child instead

const displayTdText = () => {
  for (let i = 0; i < td.length; i++) {
    td[i].innerText = "A few words";
  }
};

//Ex 34

const h1 = document.querySelector("h1");

const changeHeading = () => {
  h1.innerText = "Ha, ha, I've Changed!";
  h1.classList.toggle("alternate");
};

h1.addEventListener("click", changeHeading);

//Ex 35

const tr = document.createElement("tr");
const table = document.getElementById("table");
const tbod = document.getElementById("tbod");

const addRow = () => {
  tr.innerText = "Hello, I am new here!";
  tr.setAttribute("colspan", "5");
  tr.classList.add("newTr");
  tbod.appendChild(tr);
};

//Ex 36
const addClassTr = () => {
  const tableRow = document.querySelectorAll("tr");
  for (let i = 0; i < tableRow.length; i++) {
    tableRow[i].classList.add("test");
  }
};

//Ex 37

//I wrote a toggle, so if you want it off, you can type the function twice

const links = document.querySelectorAll("a");

const seeingRed = () => {
  for (let i = 0; i < links.length; i++) {
    links[i].classList.toggle("red");
  }
};

//Ex 38

window.onload = () => {
  console.log("Page Loaded");
};

//Ex 39

const ul = document.querySelector("ul");

const addNewLi = (str) => {
  const li = document.createElement("li");
  li.innerText = str;
  ul.appendChild(li);
};

// the str is dynamic, so that you can add whatever you'd like when the function is called

//Ex 40

const emptyList = () => {
  const li = document.querySelectorAll("li");
  for (let i = 3; i < li.length; i++) {
    li[i].remove();
  }
};
