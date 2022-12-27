const muteButton = document.getElementById('muteButton');
muteButton.addEventListener('click', function() {
  const audio = document.getElementById('myAudio');
  if (audio.muted) {
    audio.muted = false;
    muteButton.textContent = '♫ Stop the Music ♫';
  } else {
    audio.muted = true;
    muteButton.textContent = '♫ Play the Music ♫';
  }
});