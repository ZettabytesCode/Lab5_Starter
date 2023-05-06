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

  function speakText(event){
    const voices = speechSynthesis.getVoices();
    const text = document.querySelector("textarea");
    const utterance = new SpeechSynthesisUtterance(text.value);
    const selectedOption = document.getElementById("voice-select").selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterance.voice = voices[i];
      }
    }

    utterance.onstart = (event) => {
      const image = document.querySelector("img");
      image.setAttribute("src", "/assets/images/smiling-open.png");
    };

    utterance.onend = (event) => {
      const image = document.querySelector("img");
      image.setAttribute("src", "/assets/images/smiling.png");
    };

    speechSynthesis.speak(utterance);
  }

}





