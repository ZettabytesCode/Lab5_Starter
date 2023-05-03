// expose.js

window.addEventListener('DOMContentLoaded', init);

const hornSelector = document.getElementById("horn-select");
hornSelector.addEventListener('change', updateHornImage);

function init() {
  // TODO
}

function updateHornImage(event){
  var image = document.querySelector("img");
  image.setAttribute("src", `/assets/images/${event.target.value}.svg`);
}
