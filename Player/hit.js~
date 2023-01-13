let reloadLast = Date.now();

window.addEventListener('mousedown', function() {
    if (Date.now() - reloadLast > 400) {
    	window.mehitting = true;
    }
    reloadLast = Date.now()
    setTimeout(()=>{
        window.mehitting = false
    }, 120);
});

window.addEventListener('touchstart', function() {
    if (Date.now() - reloadLast > 400) window.mehitting = true, damagePos[0] = 1920 / 2 - window.playerPos.x + 180, 1080 / 2 + window.playerPos.y / 2 + 90;
    reloadLast = Date.now()
    setTimeout(()=>{
        window.mehitting = false
    }, 120);
});

