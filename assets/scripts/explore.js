// explore.js

window.addEventListener('DOMContentLoaded', init);


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
