const audio = document.querySelector('audio');
const source = document.querySelector('source');
const musicPlayer = document.querySelector('.music-player');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const controls = document.querySelectorAll('.controls');

// var album = import('./music');

console.log('Hello World')
play.addEventListener('click', () => {
    audio.play();
    pause.style.display = "block"; 
    play.style.display = "none";
});
pause.addEventListener('click', () => {
    audio.pause();
    pause.style.display = "none"; 
    play.style.display = "block";
});

musicPlayer.setAttribute('data-state', 'visible');

let currentTrack = 0;

tracks = [
    {
        title: `Brand New Vision (feat. DE'WAYNE)`,
        source: `music/Brand New Vision (feat. DE'WAYNE).mp3`,
        length: `3:35`,
        artist: `Point North`,
    },
    {
        title: `Into The Dark (feat. Kellin Quinn)`,
        source: `music/Into The Dark (feat. Kellin Quinn).mp3`,
        length: `3:18`,
        artist: `Point North`,
    },
    {
        title: `Personal`,
        source: `music/Personal.mp3`,
        length: `3:19`,
        artist: `Point North`,
    },
    {
        title: `A Million Pieces`,
        source: `music/A Million Pieces.mp3`,
        length: `3:19`,
        artist: `Point North`,
    },
    {
        title: `Heartbeat`,
        source: `music/Heartbeat.mp3`,
        length: `3:11`,
        artist: `Point North`,
    }
]

console.log({tracks});

controls.forEach((el) => el.addEventListener('click',(e) => handleAction(e)));

const handleAction = (event) => {
   const buttonId = event.target.parentElement.id;
   console.log(buttonId)
   switch(buttonId) {
        case 'fastForward':
            currentTrack < 4 ? currentTrack++ : currentTrack = 0;
            updateTrack();
            break;
        case 'rewind':
            currentTrack > 0 ? currentTrack-- : currentTrack = 4;
            updateTrack();
            break;
        case 'mute':
            audio.muted ? audio.muted = false : audio.muted = true;
            break;
        case 'voldec':
            audio.volume >= 0.1 ? (audio.volume = audio.volume - .1): null;
            break;
        case 'volinc':
            audio.volume <= .9 ? (audio.volume = audio.volume + .1): null;
            break;
        default: 
            console.log('DEFAULT');
            break;
   }
}

const updateTrack = () => {
    console.log(currentTrack)
    source.setAttribute('src', tracks[currentTrack].source);
    audio.load();
    audio.play();
}