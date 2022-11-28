/** @format */
"use strict";

document.getElementById("btn").addEventListener("click", function () {
  let input = document.getElementById("input").value;

  // for creating elements :
  let createelement = document.createElement("li");

  let btn_one = document.createElement("button");

  let btn_two = document.createElement("button");

  btn_one.innerText = "Complete";

  btn_two.innerText = "Delete";

  createelement.innerText = input;
  createelement.style.fontSize = "larger";
  createelement.style.fontWeight = "bolder";
  createelement.style.color = "white";

  let ul = document.querySelector("ul");

  // appending the created element to the html element

  ul.appendChild(createelement);
  createelement.appendChild(btn_one);
  createelement.appendChild(btn_two);

  // giving styling to the created elements:

  // button one stylng.....
  btn_one.style.border = "none";
  btn_one.style.margin = "20px 20px 0 50px ";
  btn_one.style.fontSize = "larger";
  btn_one.style.padding = "5px";
  btn_one.style.boxShadow = "2px 2px 2px blue";
  btn_one.style.borderRadius = "10px";
  btn_one.style.backgroundColor = "lightgreen";

  // button two stylng.....
  btn_two.style.border = "none";
  btn_two.style.margin = "20px 20px 0 50px ";
  btn_two.style.fontSize = "larger";
  btn_two.style.padding = "5px";
  btn_two.style.boxShadow = "2px 2px 2px blue";
  btn_two.style.borderRadius = "10px";
  btn_two.style.backgroundColor = "crimson";

  // adding functionality to the buttons (i,e  Done and Delete buttons) :
  btn_one.addEventListener("click", function () {
    createelement.style.textDecoration = "line-through";
  });

  btn_two.addEventListener("click", function () {
    createelement.remove();
  });

  document.getElementById("input").value = "";
});
