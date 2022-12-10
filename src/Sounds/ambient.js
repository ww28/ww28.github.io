let audio = new Audio("/src/Sounds/weather.mp3");

audio.addEventListener('canplaythrough', function() {
    audio.loop = 1;
    audio.play();
});
