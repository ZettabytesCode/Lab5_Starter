// explore.js

window.addEventListener('DOMContentLoaded', init);



function init() {
  const speechSynthesis = window.speechSynthesis;
  speechSynthesis.addEventListener('voiceschanged', () => {
    for(voice of speechSynthesis.getVoices()){
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);

      document.getElementById("voice-select").appendChild(option);
    }
  });

  const speakButton = document.querySelector("button");
  speakButton.addEventListener('click', speakText);

  setInterval(faceSwap, 500);

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
}





