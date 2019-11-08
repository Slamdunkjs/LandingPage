const menu = document.querySelector('.menu-btn');
const tagDiv = document.querySelector('.menuActive');
const snow = document.querySelector('.snow');
const pagesForMenu = document.querySelector('.pagesForMenu');
const speak = document.querySelector('.speak')

menu.onclick = e => {
  e.preventDefault()
  menu.classList.toggle("menu-btn-active");
  tagDiv.classList.toggle("menuActiveOn");
  pagesForMenu.classList.toggle("pagesForMenuOn");
}
let snowTop = window.innerHeight - 105 - 350; // 105 header, 350 height img
snow.style.top = `${snowTop}px`;

let planeForSpeakDed = window.innerHeight - 420; // Ded's mouth 
speak.style.top = `${planeForSpeakDed}px`;

// for starts
function getRandomNumber(num){
  return Math.round(Math.random() * num)
}

for (let i=1; i<=22; i++){
  let star = document.querySelector(`.star${i}`);
  let snow = document.querySelector(`.snow${i}`);
  star.style.left = `${getRandomNumber(1400)-150}px`; // 1400 width container + right100 for img ded
  star.style.top = `${getRandomNumber(window.innerHeight)-105}px`; // 105 height header
  snow.style.left = `${getRandomNumber(1400)}px`;
  snow.style.top = `${-getRandomNumber(window.innerHeight)-105}px`;
}

const choose1 = document.querySelector('.choose1');
const choose2 = document.querySelector('.choose2');
const choose3 = document.querySelector('.choose3');
const img2right = document.querySelector('.img2right');
const mainText2Right = document.querySelector('.mainText2Right');
const secondText2Right = document.querySelector('.secondText2Right');

let objs = [{
  id: 1,
  mainText: "Lorem ipsum11",
  secondText: "sit amet consectetur adipisicing elit. Saepe, repellat.111",
},
{
  id: 2,
  mainText: "22Lorem ipsum",
  secondText: "sit amet consectetur222 adipisicing elit. Saepe, repellat.",
},
{
  id: 3,
  mainText: "Lorem33 ipsum",
  secondText: "sit amet consectetur 333adipisicing elit. Saepe, repellat.",
}]

function choose(obj){
  img2right.setAttribute('src', `img/section2/img${obj.id}.png`);
  mainText2Right.textContent = obj.mainText;
  secondText2Right.textContent = obj.secondText;
}

choose1.onclick = () => {
  choose(objs[0]);
  choose1.classList.add("visible");
  choose2.classList.remove("visible");
  choose3.classList.remove("visible");
}

choose2.onclick = () => {
  choose(objs[1]);
  choose2.classList.add("visible");
  choose1.classList.remove("visible");
  choose3.classList.remove("visible");
}

choose3.onclick = () => {
  choose(objs[2]);
  choose3.classList.add("visible");
  choose2.classList.remove("visible");
  choose1.classList.remove("visible");
}

const redInput = document.querySelector(".redInput");
const check = document.querySelector(".check");
const customCheckbox = document.querySelector(".custom-checkbox");
redInput.onclick = () => {
  check.classList.toggle("activeCheck");
  customCheckbox.classList.toggle("custom-checkboxActive");
}

const dropdown = document.querySelector('.dropdown');
const dropdownChoise = document.querySelector('.dropdown-choise');

dropdown.onclick = e => {
  e.preventDefault();
  dropdown.classList.toggle('open');
}

const options = dropdown.querySelectorAll('.dropdown-list-item')
options.forEach(option =>{
  option.onclick =() => dropdownChoise.value = option.textContent
})