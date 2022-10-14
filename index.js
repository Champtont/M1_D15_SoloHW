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

//Ex 27

const findMaxMin = () => {
  console.log("The minimun Number is " + Math.min(...randomArray));
  console.log("The Maximum Number is " + Math.max(...randomArray));
};

findMaxMin();

//Ex 28

const mainArr = [];
const minArr1 = [];
const minArr2 = [];

const getRandomNum = () => {
  for (let i = 0; i < 10; i++) {
    const numArr1 = Math.floor(Math.random() * 11);
    const numArr2 = Math.floor(Math.random() * 11);
    minArr1.push(numArr1);
    minArr2.push(numArr2);
  }
  mainArr.push(minArr1, minArr2);
  console.log(mainArr);
};

getRandomNum();

//Ex 29

const findLonger = (arr1, arr2) => {
  const length1 = Math.max(arr1.length);
  const length2 = Math.max(arr2.length);
  if (length1 > length2) {
    console.log("Array 1: [" + arr1 + "] is the longer Array");
  } else {
    console.log("Array 2: [" + arr2 + "] is the longer Array");
  }
  console.log("Array 1 has " + length1 + " values stored");
  console.log("Array 2 has " + length2 + " values stored");
};

findLonger([1, 1, 3], [1, 5, 5, 7, 7, 9, 10]);

//Ex 30

const findBiggerValue = (arr1, arr2) => {
  let sum = 0;
  let sum2 = 0;
  for (const value of arr1) {
    sum += value;
  }
  for (const value of arr2) {
    sum2 += value;
  }
  if (sum > sum2) {
    console.log(
      "The value of the first Array is greater with a total of: " + sum
    );
  } else {
    console.log(
      "The value of the second Array is greater with a total of: " + sum2
    );
  }
};

findBiggerValue([2, 2, 2], [2, 100]);

//DOM Practice
//EX 31

const container = document.getElementById("container");

//Ex 32

const td = document.querySelectorAll("td");

//Ex 33

//I made it so that this needs to be called with a function in the console...otherwise, it executes immediately
// this one writes over what was previously there... I am sure that I could append a p child instead
let p = document.createElement("p");

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

//Bonus!!!
//Ex 41
