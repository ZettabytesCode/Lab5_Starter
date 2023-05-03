// expose.js

window.addEventListener('DOMContentLoaded', init);

const hornSelector = document.getElementById("horn-select");
hornSelector.addEventListener('change', updateHornImage);

const volumeController = document.getElementById("volume");


function init() {
  // TODO
}

function updateHornImage(event){
  var image = document.querySelector("img");
  var audio = document.querySelector("audio");
  image.setAttribute("src", `/assets/images/${event.target.value}.svg`);
  audio.setAttribute("src", `/assets/audio/${event.target.value}.mp3`);
}
