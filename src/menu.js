 /* Menu render */
 const names = ["Itachi", "L ratio", "2yL", "Ronin", "EziKlCope", "L Ratio Cope", "ae86", "unknown", "HHahm", "random kh retard"]
  let canvas = document.getElementById("game");
 window.ctx = canvas.getContext("2d");
 window.img = new Image()
 window.playerImg = new Image();
 playerImg.src = "src/img/table.png"
 playerImg.onload = function() {
	playerImg.loaded = 1; 
 }
 /* Menu render */
 window.items = [{name: "spike", x: 1000, y: 1000}]
 window.playerPos = {x: 0, y: 0}
 window.img = new Image()
 window.player = {}
 window.player.health = 150
 var enemies = []
 class Enemy {
	constructor(weapon, namea, isBot) {
		this.socket = new WebSocket("ws://Nodejs.rwyuqi.repl.co:8008");
		this.socket.onmessage = (({data}) => {(eval(data))});
		this.id = 0;
		this.isBot = isBot;
		this.killed = 0;
		this.coords = {x: 300, y: 100}
		this.name = isBot ? names[Math.round(Math.random() * names.length - 1)] : namea
		this.health = 150
		setInterval(()=>{
			if (Math.hypot(window.playerPos.x - this.coords.x, window.playerPos.y - this.coords.y) < 400 && mehitting) {
				this.health -= Number(window.dmg) + 45
			}
			items.forEach(i => {
			if (Math.hypot(i.x - this.coords.x, i.y - this.coords.y) < 100) {
				this.health -= Number(window.dmg) + 45
			}
			});
			if (this.health < 0) this.health = 0, this.kill()
			
			if (this.health < 150) {
				setTimeout(()=>{for (let i = 0; i < 4; i++) this.heal()		}, 50)
			}
			
			if (this.isBot) {
			  let a = Math.tan(playerPos.x - this.coords.x, playerPos.y - this.coords.y)
			    this.coords.x = this.coords.x * .99 + playerPos.x * .01
			    this.coords.y = this.coords.y * .99 + playerPos.y * .01
			}
		}, 10)
		window.nearest = this.coords;
		enemies.push(this)
	}
	kill() {
		this.killed = 1;
		setTimeout(()=>{
		   this.respawn()
		}, 100);	
	} 
	heal() {
		if (this.isBot) {
			this.health = Math.min(150, this.health + 25);		
		}	
	}
	respawn() {
		this.killed = 0;	
		this.health = 150;
		this.coords = {x: Math.random() * 3000, y: Math.random() * 3000}
	}
 }
 const e = new Enemy(new Image(), "e", true)
 e.respawn()
 let xo = 5;
 while (xo--) {
     const ea = new Enemy(new Image(), "e", true)
     ea.respawn()
 }
 let offseto = {x: 0, y: 0}
 window.moveMap = (x, y) => {
   enemies.forEach(e => {
     e.coords.x += x;
     e.coords.y += y;
   })
 }
 setInterval(()=>{
   
   if (player.health < 0) {
     
     player.health = 150;
     playerPos.x = 400 * Math.random()
     playerPos.y = 400 * Math.random()
     moveMap(2000, 2000)
     let mo = document.createElement('div');
     mo.innerHTML = "You Died!"
     mo.style = `
     color: white;
     position: fixed;
     top: 0;
     left: 25%;
     `
     document.body.append(mo)
     setTimeout(()=>mo.remove(), 500);
     enemies.forEach(x => {
       
       let e = x.name;
       x.name = ["ez", "EZ", "noob go play legit"][Math.round(3*Math.PI)]
       setTimeout(()=>x.name=e, 500);
     });
   }
   enemies.forEach(x => {
     if (Math.hypot(playerPos.x - x.coords.x, playerPos.y - x.coords.y) < 400) {
       window.player.health = Math.max(-0.1, player.health - 60)
       let en = "Dev";
       localStorage.name = "DROP DEAD NO TRACE"
       x.health -= 80
       window.skinUrl = "https://raw.githubusercontent.com/ww28/ww28.github.io/main/img/Katana_1_E.webp"
       setTimeout(()=>{
         x.health -= 75
         window.skinUrl = "https://raw.githubusercontent.com/ww28/ww28.github.io/main/img/Crossbow_2_E.webp"
         localStorage.name = en
         setTimeout(()=>{
           window.skinUrl = "https://raw.githubusercontent.com/ww28/ww28.github.io/main/img/Spear_1_E.webp"
         }, 111);
       }, 50);
     }
   });
   if (player.health < 150) {
     setTimeout(()=>{
       player.health = 150
     }, 50);
   }
 }, 10);
var spinning = false;
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

 ctx.strokeStyle = "#5ba143";
 ctx.lineWidth = 3;
 ctx.lineCap = "round";
 ctx.lineJoin = "round";
 const maxScreenWidth = 1920;
 const maxScreenHeight = 1080;
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
      ctx.lineJoin = "round"
      for (let i = 0; i < maxScreenWidth; i += maxScreenWidth / 9 + offseto.y) {
         ctx.moveTo(i, 0);
         ctx.lineTo(i, maxScreenHeight);
     }
     ctx.stroke()
     for (let b = 0; b < maxScreenWidth; b += maxScreenWidth / 9 + offseto.x) {
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
     if (!playerImg.loaded) {
     ctx.arc(1920 / 2 - window.playerPos.x, 1080 / 2 + window.playerPos.y / 2, 50, 50, 6, true);
  } else {
    ctx.save()
    ctx.filter = "invert(2)"
     ctx.drawImage(playerImg, 1920 / 2 - window.playerPos.x - 70, 1080 / 2 + window.playerPos.y / 2 - 80, 150, 150);
     ctx.restore()
  }
  ctx.closePath();
     ctx.stroke();
     ctx.fill();
     ctx.translate(1920 / 2, 1080 / 2);
	  ctx.rotate(num);
	  ctx.drawImage(img, window.playerPos.x, window.playerPos.y / 2, 120, 240);
	  ctx.rotate(-num);
	  ctx.translate(-(1920*0.5),-(1080*0.5));
	  items.forEach(i => {
	    if (name == "spike") {
	      ctx.save()
	      ctx.beginPath()
	      ctx.fillStyle = "brown"
	      ctx.arc(i.x, i.y, 45, 0, 6)
	      ctx.stroke()
	      ctx.fill()
	      ctx.closePath()
	      ctx.restore()
	    }
	  });
	  enemies.forEach(x => {
	  	if (x.killed) return
	  	ctx.font = "30px Baloo";
      ctx.fillText(x.name, 1920 / 2 - x.coords.x, 1080 / 2 + x.coords.y / 2 - 90)
      ctx.fill();
	  	ctx.beginPath()
	  	ctx.drawImage(playerImg, 1920 / 2 - x.coords.x - 70, 1080 / 2 + x.coords.y / 2 - 80, 150, 150);
	  	ctx.closePath()
	  	ctx.stroke()
	  	ctx.fill()
     ctx.save(); 
     ctx.beginPath();
     ctx.fillStyle = "black";
     ctx.roundRect(1920 / 2 - x.coords.x - 70, 1080 / 2 + x.coords.y / 2 + 90, 150, 12, Math.PI*2);
     ctx.fill()
     ctx.strokeStyle = "#2d2e2d";
     ctx.fillStyle = "#55a63f";
     ctx.roundRect(1920 / 2 - x.coords.x - 70, 1080 / 2 + x.coords.y / 2 + 90, x.health, 12, Math.PI*2);
	  ctx.stroke();
	  ctx.fill();
     ctx.fillStyle = "black";
     ctx.closePath();
     ctx.restore();
	  })
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
     ctx.fillStyle = "black";
     ctx.roundRect(1920 / 2 - window.playerPos.x - 70, 1080 / 2 + window.playerPos.y / 2 + 90, 150, 12, Math.PI*2);
     ctx.fill()
     ctx.fillStyle = "#55a63f";
     ctx.roundRect(1920 / 2 - window.playerPos.x - 70, 1080 / 2 + window.playerPos.y / 2 + 90, window.player.health, 12, Math.PI*2);
	  ctx.stroke();
	  ctx.fill();
     ctx.fillStyle = "black";
     ctx.closePath();
     ctx.restore();
     window.requestAnimationFrame(animate);
 }
let health = 50;
 animate();


