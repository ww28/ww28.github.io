 /* Menu render */
 let canvas = document.getElementById("game");
 
 let ctx = canvas.getContext("2d");
 
 ctx.strokeStyle = "#5ba143";
 ctx.lineWidth = 3;
 
 const maxScreenWidth = 1920;
 const maxScreenHeight = 1080;
 
 
      for (let i = 0; i < maxScreenWidth; i += maxScreenWidth / 18) {
         ctx.moveTo(i, 0);
         ctx.lineTo(i, maxScreenHeight);
     }
     ctx.stroke()
     for (let b = 0; b < maxScreenWidth; b += maxScreenWidth / 18) {
         ctx.moveTo(0, b);
         ctx.lineTo(maxScreenWidth, b);
     }
     ctx.stroke();
     window.playerPos = {
         x: 100,
         y: 200
     };
 function animate() {
 	  ctx.imageSmoothingEnabled = true;
 
     /* Loader */
     let menu = document.getElementById("gameMenu");
     let hidden = false;
     let health = 100;
     this.play = function() {
         hidden = !hidden
         menu.style.display = hidden ? "none" : "block";
     }
     ctx.font = "30px Baloo";
     ctx.fillText("[Lobby] Hp: "+ health + " " + name + " Pos: " + window.playerPos.x + " " + window.playerPos.y, 1920 / 2 - window.playerPos.x - 180, 1080 / 2 + window.playerPos.y / 2 - 90)
     ctx.fill();
     ctx.beginPath();
     ctx.strokeStyle = "black";
     ctx.fillStyle = "#88ba47";
     ctx.arc(1920 / 2 - window.playerPos.x, 1080 / 2 + window.playerPos.y / 2, 50, 50, Math.PI * 2, true);
     ctx.closePath();
     ctx.stroke();
     ctx.fill();
     window.requestAnimationFrame(animate);
 }
 animate();
 
 window.playerPos.y = 500
 
 

    

