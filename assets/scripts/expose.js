// expose.js

window.addEventListener('DOMContentLoaded', init);

const jsConfetti = new JSConfetti();

const hornSelector = document.getElementById("horn-select");
hornSelector.addEventListener('change', updateHornImage);

const volumeController = document.getElementById("volume");
volumeController.addEventListener('input', updateVolume);

const audioPlay = document.querySelector("button");
audioPlay.addEventListener('click', playAudio);

function init() {
  var audio = document.querySelector("audio");
  audio.volume = 0.5;
}

function updateHornImage(event){
  var image = document.querySelector("img");
  var audio = document.querySelector("audio");
  image.setAttribute("src", `/assets/images/${event.target.value}.svg`);
  audio.setAttribute("src", `/assets/audio/${event.target.value}.mp3`);
}

function updateVolume(event){
  var image = document.querySelector("div#volume-controls img");
  var audio = document.querySelector("audio");
  audio.volume = event.target.value/100.0;
  if(event.target.value == 0){
    image.setAttribute("src", `/assets/icons/volume-level-0.svg`);
  }else if(event.target.value < 33){
    image.setAttribute("src", `/assets/icons/volume-level-1.svg`);
  }else if(event.target.value < 67){
    image.setAttribute("src", `/assets/icons/volume-level-2.svg`);
  }else{
    image.setAttribute("src", `/assets/icons/volume-level-3.svg`);
  }
}

function playAudio(event) {
  var audio = document.querySelector("audio");
  audio.play();
  if(hornSelector.value == "party-horn"){
    jsConfetti.addConfetti();
  }
}