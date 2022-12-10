const playerSpeed = 11;

window.addEventListener("keydown", e => {
    switch(e.keyCode) {
        case 87:
             window.playerPos.y-= playerSpeed
        break;
        case 83:
             window.playerPos.y+= playerSpeed
        break;
        case 68:
             window.playerPos.x -= playerSpeed
        break;
        case 65:
             window.playerPos.x += playerSpeed
        break;
    }
})