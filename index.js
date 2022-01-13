const buttons = document.querySelectorAll(".drum");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mousedown", function() {
    playsound(this.innerHTML);
    buttonAnimation(this.innerHTML, event.type);
  });
  buttons[i].addEventListener("mouseup", function() {
    buttonAnimation(this.innerHTML, event.type);
  });
}

document.addEventListener("keydown", function(event) {
  playsound(event.key.toLowerCase());
  buttonAnimation(event.key.toLowerCase(), event.type);
});
document.addEventListener("keyup", function(event) {
  buttonAnimation(event.key.toLowerCase(), event.type);
});

function playsound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    case "k":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "l":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    default:
      console.log(this);
  }
}

function buttonAnimation(currentKey, eventType) {
  var activeButton = document.querySelector("." + currentKey);
  if (eventType == "keydown" || eventType == "mousedown") {
    activeButton.classList.add("pressed");
  } else if (eventType == "keyup" || eventType == "mouseup") {
    activeButton.classList.remove("pressed");
  }
}
