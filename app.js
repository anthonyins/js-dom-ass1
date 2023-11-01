const header = document.querySelector(".header");
const title = document.getElementById("title");
const navItem = document.querySelector(".nav-item");
const userName = document.querySelector("#username");
const password = document.querySelector("#password");
const btn = document.querySelector(".btn");
const projectsSection = document.getElementById("projects");



header.style.backgroundColor="orangered";
header.style.color="white";
header.style.padding="10px";
header.style.textAlign="center";

title.textContent = "Javascript Dom Assignment 1";

navItem.style.listStyle = "none"
navItem.style.display="flex";
navItem.style.justifyContent="center";
navItem.style.alignItems="center";
navItem.style.gap="10px";

userName.value = "Anthony";
userName.disabled = true;

password.value = "123456";
password.disabled = true;
password.type = "text";

btn.style.backgroundColor="#bebe";
btn.style.color="black";
btn.style.padding="10px";
btn.style.borderRadius="5px";
btn.style.border="none";
btn.style.cursor="pointer";

btn.textContent = "Giriş Yap";

projectsSection.firstElementChild.innerText = "Js Dom Projects";

const myArr = ["Hello World!","Guess Number","Checkout Page","Gelir-Gider Projesi","Api Projects"];

myArr.forEach(item => projectsSection.lastElementChild.innerHTML += `<li>${item}</li>`)