// explore.js

window.addEventListener('DOMContentLoaded', init);



function init() {
  const speechSynthesis = window.speechSynthesis;
  speechSynthesis.addEventListener('voiceschanged', () => {
    for(let voice of speechSynthesis.getVoices()){
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;

      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);

      document.getElementById("voice-select").appendChild(option);
    }
  });

  const speakButton = document.querySelector("button");
  speakButton.addEventListener('click', speakText);

  setInterval(faceSwap, 500);

  function speakText(event){
    const text = document.querySelector("textarea");
    const utterance = new SpeechSynthesisUtterance(text.value);
    const selectedOption = document.getElementById("voice-select").selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  
    speechSynthesis.speak(utterance);
  }

  function faceSwap(){
    const image = document.querySelector("img");
    if(speechSynthesis.speaking){
      image.setAttribute("src", "/assets/images/smiling-open.png");
    }else{
      image.setAttribute("src", "/assets/images/smiling.png");
    }
  }
}





