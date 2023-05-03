// expose.js

window.addEventListener('DOMContentLoaded', init);

const hornSelector = document.getElementById("horn-select");
hornSelector.addEventListener('change', updateHornImage);

function init() {
  // TODO
}

function updateHornImage(horn){
  var image = document.querySelector("img");
  image.src = "/assets/images/" + horn + ".svg";
}
