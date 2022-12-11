window.resources = {
    blood: 0,
    food: 0,
    build: 0
}

setInterval(()=>{
    if (window.mehitting) {
        window.resources.blood += 15;
        window.resources.build -= 1;
    }
    document.getElementById("res").innerHTML = "Blood: 0<br>Food: 0<br>Building Monad: 0<br>".replace("Blood: 0", "Blood: " + window.resources.blood).replace("Food: 0", "Food: " + window.resources.food).replace("Building Monad: 0", "Building Monad: " + window.resources.build)
}, 120);