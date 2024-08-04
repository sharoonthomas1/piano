
function playSound(soundFile) {
  let audio = new Audio(soundFile);
  audio.play();
}


window.addEventListener('keypress', (e) => {
  switch (e.key.toUpperCase()) {
    case 'A':
    case 'S':
    case 'D':
    case 'F':
    case 'G':
    case 'H':
    case 'J':
    case 'K':
    case 'L':
    case ';':
      playSound('sound.wav');
      break;
    case 'W':
    case 'T':
    case 'U':
    case 'P':
      playSound('piano.wav');
      break;
    case 'E':
    case 'Y':
    case 'O':
      playSound('sound2.mp3');
      break;
    default:
      console.log(`No sound mapped for key: ${e.key}`);
  }
});
