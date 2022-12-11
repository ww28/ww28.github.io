 /* Menu render */
/* azari pls dont skid */
window.skinUrl = "https://raw.githubusercontent.com/ww28/ww28.github.io/main/img/Katana_1_E.webp"
            window.dmg = "40";
 let canvas = document.getElementById("game");
 window.ctx = canvas.getContext("2d");
 ctx.strokeStyle = "#5ba143";
 ctx.lineWidth = 3;
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
      ctx.strokeStyle = "#75a832"
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
     ctx.font = "30px Baloo";
     ctx.fillText(localStorage.name + " Hp: "+ health + " " + name + " Pos: " + window.playerPos.x + " " + window.playerPos.y, 1920 / 2 - window.playerPos.x - 180, 1080 / 2 + window.playerPos.y / 2 - 90)
     ctx.fill();
     ctx.beginPath();
     ctx.strokeStyle = "black";
     ctx.fillStyle = "#88ba47";
     ctx.arc(1920 / 2 - window.playerPos.x, 1080 / 2 + window.playerPos.y / 2, 50, 50, Math.PI * 2, true);
     ctx.closePath();
     ctx.stroke();
     ctx.fill();
     ctx.drawImage(img, 1920 / 2 - window.playerPos.x, 1080 / 2 + window.playerPos.y / 2, 120, 240)
     if (window.mehitting) {
          ctx.font = "75px Baloo";
          ctx.strokeStyle = "black"
          ctx.strokeText(window.dmg, 1920 / 2 - window.playerPos.x + 180, 1080 / 2 + window.playerPos.y / 2 + 90)
          ctx.stroke();
          ctx.restore();
     }
     window.requestAnimationFrame(animate);
 }

 animate();


