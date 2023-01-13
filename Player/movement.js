let playerSpeed = 100;
function lerp(oldpos, pos) {
    return oldpos * (1-0.1) + pos * 0.1;
}
window.playerPos={};
window.playerPos.y = 0;
window.playerPos.x = 0;
let newPositions = {
	x:0,
	y:0
}
setInterval(()=>{
	window.playerPos = {
		x: lerp(playerPos.x, newPositions.x),
		y: lerp(playerPos.y, newPositions.y)
	};
	if (keyW) {
		newPositions.y = window.playerPos.y - (playerSpeed - window.resources.blood);
	} else if (keyA) {
		newPositions.y = window.playerPos.y + (playerSpeed - window.resources.blood);	
	} else if (keyS) {
		newPositions.x = window.playerPos.x - (playerSpeed - window.resources.blood);
	} else if (keyD) {
		newPositions.x = window.playerPos.x + (playerSpeed - window.resources.blood);
	}
},7);
window.addEventListener("keydown", e => {
    switch(e.keyCode) {
        case 87:
             keyW = true;
        break;
        case 83:
             keyA = true;
        break;
        case 68:
             keyS = true;
             break;
        case 65:
             keyD = true;
        break;
    }
});
let keyW, keyA, keyS, keyD = 0;
window.addEventListener("keyup", e=> {
    switch(e.keyCode) {
        case 87:
             keyW = 0;
        break;
        case 83:
             keyA = 0;
        break;
        case 68:
             keyS = 0;
             break;
        case 65:
             keyD = 0;
        break;
    }
});
