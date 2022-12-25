const playerSpeed = 11;
function lerp(oldpos, pos) {
    return oldpos + (pos - oldpos) * 0.5;
}

window.addEventListener("keydown", e => {
    switch(e.keyCode) {
        case 87:
             window.playerPos.y = lerp(window.playerPos.y - playerSpeed)
        break;
        case 83:
             window.playerPos.y = lerp(window.playerPos.y, window.playerPos.y + playerSpeed)
        break;
        case 68:
             window.playerPos.x = lerp(window.playerPos.x, window.playPos.x - playerSpeed);
        case 65:
             window.playerPos.x = lerp(window.playerPos.x, window.playerPos.x + playerSpeed)
        break;
    }
})
