//your JS code here. If required.
function playSound(soundFileName) {
  const audio = new Audio(`sounds/${soundFileName}`);
  audio.play();
}

function stopAllSounds() {
  const allAudioElements = document.querySelectorAll('audio');
  allAudioElements.forEach(audio => audio.pause());
}

