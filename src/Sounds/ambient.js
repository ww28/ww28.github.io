let audio = new Audio("https://github.com/ww28/ww28.github.io/blob/main/src/Sounds/Y2Mate.is%20-%20Marvelous%20Jungle%20Sounds-XdZkJhD8NhE-160k-1654375471967.mp3?raw=true");

audio.loop = 1;
audio.addEventListener("canplaythrough", e => {
    audio.play();
});
