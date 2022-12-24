var numberOfPianoBUttons = document.querySelectorAll(".piano").length;

for (var i=0; i < numberOfPianoBUttons; i++) {

  document.querySelectorAll(".piano")[i].addEventListener("click", function() {

      var buttonInnerHTML = this.innerHTML;

      makeSound(buttonInnerHTML);

      buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "d":
      var ddo = new Audio("sounds/key01.mp3");
      ddo.play();
      break;

    case "r":
      var re = new Audio("sounds/key02.mp3");
      re.play();
      break;

    case "m":
      var mi = new Audio("sounds/key03.mp3");
      mi.play();
      break;

    case "f":
      var fa = new Audio("sounds/key04.mp3");
      fa.play();
      break;

    case "s":
      var so = new Audio("sounds/key05.mp3");
      so.play();
      break;

    case "l":
      var la = new Audio("sounds/key06.mp3");
      la.play();
      break;

    case "i":
      var si = new Audio("sounds/key07.mp3");
      si.play();
      break;

    case "o":
      var doo = new Audio("sounds/key08.mp3");
      doo.play();
      break;

    default: console.log(key);

  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
