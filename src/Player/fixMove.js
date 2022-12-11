setInterval(()=>{
    if (window.playerPos.x > 914) {
        window.playerPos.x = 913
    }
    if (window.playerPos.y > 991) {
        window.playerPos.y = 990
    }
    if (window.playerPos.x < -912) {
        window.playerPos.x = -911
    }
    if (window.playerPos.y < -930) {
        window.playerPos.y = -929
    }
}, 100);