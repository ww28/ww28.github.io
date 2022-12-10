let audio = new Audio("https://github.com/ww28/ww28.github.io/blob/main/src/Sounds/Y2Mate.is%20-%20Marvelous%20Jungle%20Sounds-XdZkJhD8NhE-160k-1654375471967.mp3?raw=true");

audio.loop = 1;
audio.addEventListener("canplaythrough", e => {
    audio.play();
});

let hit = new Audio("https://github.com/ww28/ww28.github.io/blob/main/src/Sounds/Y2Mate.is%20-%20Metal%20hit%20Sound%20Effect-wOh41654QFg-128k-1654375375140.mp3?raw=true");

window.addEventListener('mousedown', function() {
    hit.play();
});

window.addEventListener('touchstart', function() {
    hit.play();
});
