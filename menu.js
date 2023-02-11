 /* Menu render */
 window.playerPos = {x: 0, y: 0}
 widow.img = new Image()
var spinning = false;
window.playerImg = new Image("./src/img/table.png");
window.playerImg.src = "./src/img/table.png"
 CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
  with (this) {
    if (r instanceof Array) {
      var r1 = r[0];
      var r2 = r[1];
      var r3 = r[2];
      var r4 = r[3];
    } else {
      var r1 = r;
      var r2 = r;
      var r3 = r;
      var r4 = r;
    }
    beginPath();
    moveTo(x, y+r1);
    quadraticCurveTo(x, y, x+r1, y);
    lineTo(x+w-r2, y);
    quadraticCurveTo(x+w, y, x+w, y+r2);
    lineTo(x+w, y+h-r3);
    quadraticCurveTo(x+w, y+h, x+w-r3, y+h);
    lineTo(x+r4, y+h);
    quadraticCurveTo(x, y+h, x, y+h-r4);
    lineTo(x, y+r1);
  }
};
let iterated = 1;
var num = 0;
setInterval(()=>{if(spinning){iterated+=.1}})
setInterval(()=>{
	num = num * (1-.05) + (Math.sin(iterated)*(Math.PI*2)) *.05
},5)
 // document.getElementsByTagName("iframe")[0].contentWindow.eval(`document.body.style = 'button {border: 0;background: black;color: white;	}';`);
window.addEventListener("contextmenu", e => {
	e.preventDefault();
});
window.damagePos = [100,100]
window.skinUrl = "https://raw.githubusercontent.com/ww28/ww28.github.io/main/img/Katana_1_E.webp"
            window.dmg = "40";
 let canvas = document.getElementById("game");
 window.ctx = canvas.getContext("2d");
 ctx.strokeStyle = "#5ba143";
 ctx.lineWidth = 3;
 ctx.lineCap = "round";
 ctx.lineJOin = "round";
 const maxScreenWidth = 2000;
 const maxScreenHeight = 1200;
document.querySelector("#nicknaem").value = localStorage.name;
     window.img = new Image()
     img.src = window.skinUrl
     ctx.save()
     window.playerPos = {
         x: 100,
         y: 200
     };
 function animate() {
 	  ctx.save();
 	  ctx.globalAlpha = .1;
 	  ctx.lineCap = "round";
 	  ctx.lineJoin = "round";             
 	  ctx.clearRect(0, 0, 1920, 1080) 
     ctx.restore()
     /* Loader */
     let menu = document.getElementById("gameMenu");
     let hidden = false;
     let health = 100;
     this.play = function() {
         hidden = !hidden
         menu.style.display = hidden ? "none" : "block";
         localStorage.name = document.querySelector("#nicknaem").value
     }
      ctx.strokeStyle = "rgba(0,0,0,0.1)";
      ctx.fillStyle = "#5cc240";
      for (let i = 0; i < maxScreenWidth; i += maxScreenWidth / 40) {
         ctx.moveTo(i, 0);
         ctx.lineTo(i, maxScreenHeight);
     }
     ctx.stroke()
     for (let b = 0; b < maxScreenWidth; b += maxScreenWidth / 40) {
         ctx.moveTo(0, b);
         ctx.lineTo(maxScreenWidth, b);
     }
     ctx.stroke();
     ctx.font = "30px Baloo";
     ctx.fillText(localStorage.name, 1920 / 2 - window.playerPos.x, 1080 / 2 + window.playerPos.y / 2 - 90)
     ctx.fill();
     ctx.beginPath();
     ctx.strokeStyle = "#75a832"
     ctx.fillStyle = "#88ba47";
     // ctx.arc(1920 / 2 - window.playerPos.x, 1080 / 2 + window.playerPos.y / 2, 50, 50, 6, true);
     ctx.drawImage(playerImg, window.playerPos.x, window.playerPos.y, 100, 100);
     ctx.closePath();
     ctx.stroke();
     ctx.fill();
     ctx.translate(1920 / 2, 1080 / 2);
	  ctx.rotate(num);
	  ctx.drawImage(img, window.playerPos.x, window.playerPos.y / 2, 120, 240);
	  ctx.rotate(-num);
	  ctx.translate(-(1920*0.5),-(1080*0.5));
     if (window.mehitting) {
     	    spinning = true;
     	    ctx.beginPath();
          ctx.font = "75px Baloo";
          ctx.strokeStyle = "black"
          ctx.strokeText("-" + window.dmg, 1920 / 2 - window.playerPos.x + 180, 1080 / 2 + window.playerPos.y / 2 + 90);
          ctx.stroke();
          ctx.fillStyle = "red"
          ctx.fillText("-" + window.dmg, 1920 / 2 - window.playerPos.x + 180, 1080 / 2 + window.playerPos.y / 2 + 90);
          ctx.fill();
          ctx.restore();
          ctx.strokeStyle = "#75a832"
          ctx.fillStyle = "#5cc240";
          ctx.closePath();
          setTimeout(()=>{
          	spinning = false;
          }, 300);
     }
     
     ctx.save(); 
     ctx.beginPath();
     ctx.strokeStyle = "#2d2e2d";
     ctx.fillStyle = "#55a63f";
     ctx.roundRect(1920 / 2 - window.playerPos.x - 70, 1080 / 2 + window.playerPos.y / 2 + 90, 150, 12, Math.PI*2);
	  ctx.stroke();
	  ctx.fill();
     ctx.fillStyle = "black";
     ctx.closePath();
     ctx.restore();
     window.requestAnimationFrame(animate);
 }
let health = 50;
 animate();


