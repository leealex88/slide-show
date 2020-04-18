let slides = [
  "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/957010/milky-way-starry-sky-night-sky-star-957010.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1983032/pexels-photo-1983032.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/399973/pexels-photo-399973.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/3934514/pexels-photo-3934514.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
];
console.log("ola");
const body = document.querySelector("body");

const divBackButton = document.querySelector(".backButton");
const divForwardButton = document.querySelector(".forwardButton");
const divPicture = document.querySelector(".picture");
const divAutoBack = document.querySelector(".autoBack");
const divAutoForward = document.querySelector(".autoForward");
const stopButton = document.querySelector(".stopButton");
const inputField = document.querySelector(".input");
const backButton = document.createElement("button");
const forwardButton = document.createElement("button");
const autoForwardButton = document.createElement("button");
const autoBackButton = document.createElement("button");

divAutoBack.appendChild(autoBackButton);
autoBackButton.innerText = "Auto Back";
autoBackButton.classList.add("button");
divAutoForward.appendChild(autoForwardButton);
autoForwardButton.innerText = "Auto Forward";
autoForwardButton.classList.add("button");
divForwardButton.appendChild(forwardButton);
forwardButton.innerText = "Forward";
forwardButton.classList.add("button");
divBackButton.appendChild(backButton);
backButton.innerText = "Back";
backButton.classList.add("button");

const img = document.createElement("img");
divPicture.appendChild(img);

let timeBetweenSlides = 2000;
inputField.addEventListener("input", (e) => {
  const userInput = parseInt(e.target.value);
  if (userInput > 0) {
    timeBetweenSlides = userInput;
  }
  console.log(timeBetweenSlides);
});

let index = 0;
img.src = slides[index];
let autoInterval = null;

forwardButton.addEventListener("click", forwardBtn);
backButton.addEventListener("click", backBtn);

autoForwardButton.addEventListener("click", function () {
  if (autoInterval) {
    //true
    stopBtn();
  }
  autoInterval = setInterval(forwardBtn, timeBetweenSlides);
});

autoBackButton.addEventListener("click", function () {
  if (autoInterval) {
    stopBtn();
  }
  autoInterval = setInterval(backBtn, timeBetweenSlides);
});

stopButton.addEventListener("click", stopBtn);
function stopBtn() {
  clearInterval(autoInterval);
}

function forwardBtn() {
  index = index + 1;
  if (index > slides.length - 1) {
    index = 0;
  }
  img.src = slides[index]; // index[1] /
  console.log(index);
}
function backBtn() {
  index = index - 1;
  if (index < 0) {
    index = slides.length - 1;
  }
  img.src = slides[index];
  console.log(index);
}
backBtn();
forwardBtn();
