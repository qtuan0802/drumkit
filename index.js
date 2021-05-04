document.querySelector(".w").style.backgroundImage = "url('./images/tom1.png')";
document.querySelector(".a").style.backgroundImage = "url('./images/tom2.png')";
document.querySelector(".s").style.backgroundImage = "url('./images/tom3.png')";
document.querySelector(".d").style.backgroundImage = "url('./images/tom4.png')";
document.querySelector(".j").style.backgroundImage =
  "url('./images/snare.png')";
document.querySelector(".k").style.backgroundImage =
  "url('./images/crash.png')";
document.querySelector(".l").style.backgroundImage = "url('./images/kick.png')";

for (let i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    console.log(this.innerHTML);
    makeSound(this.innerHTML);
    addAnimation(this.innerHTML);
  });
}

let keyboard = document.addEventListener("keypress", function (event) {
  console.log(event);
  makeSound(event.key);
  addAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "k":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "j":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "l":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      break;
  }
}
function addAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
