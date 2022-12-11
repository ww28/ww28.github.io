
function drawer() {
     var img = new Image("https://static.wikia.nocookie.net/moom/images/0/0b/Samurai_1.png/revision/latest?cb=20171004213933")
     img.onload = e => {
          ctx.drawImage(img, window.playerPos.x, window.playerPos.y)
     }
     window.requestAnimationFrame(drawer)
     }
drawer()