// explore.js

window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;

const speakButton = document.querySelector("button");
speakButton.addEventListener('click', speakText);

setInterval(faceSwap, 500);

function init() {
  const voices = speechSynthesis.getVoices();
  for(let i = 0; i < voices.length; i++){
    const voice_option = document.createElement("voice_option");
    voice_option.textContent = `${voices[i].name} (${voices[i].lang})`;

    voice_option.setAttribute("lang", voices[i].lang);
    voice_option.setAttribute("name", voices[i].name);

    document.getElementById("voice-select").appendChild(voice_option);
  }
}

function speakText(event){
  const text = document.querySelector("textarea");
  const utterance = new SpeechSynthesisUtterance(text.value);
  synth.speak(utterance);
}

function faceSwap(){
  const image = document.querySelector("img");
  if(synth.speaking){
    image.setAttribute("src", "/assets/images/smiling-open.png");
  }else{
    image.setAttribute("src", "/assets/images/smiling.png");
  }
}
