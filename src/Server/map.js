let pos = document.getElementById("pos")
let pW = 1920 * 0.17
let pH = 1080 * 0.17
pos.innerHTML = "<canvas id = 'mmap' style = 'width:110%;height:110%;'></canvas>"

let c = document.getElementById('mmap')
let g = c.getContext("2d")

setInterval(()=>{
               g.clearRect(0, 0, 1920, 1080)
               g.fillStyle = "white"
               g.font = "30px Arial"
	g.fillText("x", window.playerPos.x / 6, window.playerPos.y / 5)
	g.fill()
}, 100);