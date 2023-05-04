// explore.js

window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;

const speakButton = document.querySelector("button");
speakButton.addEventListener('click', speakText);

setInterval(faceSwap, 500);

function init() {
  
}

function populateVoiceList() {
  if (typeof synth === "undefined") {
    return;
  }

  const voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    document.getElementById("voiceSelect").appendChild(option);
  }
}

populateVoiceList();
if (
  typeof synth !== "undefined" &&
  synth.onvoiceschanged !== undefined
) {
  synth.onvoiceschanged = populateVoiceList;
}

function speakText(event){
  const text = document.querySelector("textarea");
  const utterance = new SpeechSynthesisUtterance(text.value);
  document.getElementById("voice-select").selectedOptions[0];

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
