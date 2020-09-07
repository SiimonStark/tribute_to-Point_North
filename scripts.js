var audio = document.querySelector('audio');
var musicPlayer = document.querySelector('.music-player');
var play = document.getElementById('playButton');
var pause = document.getElementById('pauseButton');

console.log('Hello World')
play.addEventListener('click', () => audio.play());
pause.addEventListener('click', () => audio.pause());

musicPlayer.setAttribute('data-state', 'visible');