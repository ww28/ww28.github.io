
let select = document.getElementById("skins")
setInterval(()=>{
    window.skinUrl = select.options[select.selectedIndex].value
    switch(window.skinUrl) {
        case "1":
            window.skinUrl = "https://raw.githubusercontent.com/ww28/ww28.github.io/main/img/Axe_E.webp"
            window.dmg = "35";
        break;
        case "2":
            window.skinUrl = "https://raw.githubusercontent.com/ww28/ww28.github.io/main/img/Great_Hammer_1_E.webp"
            window.dmg = "35";
        break;
        case "3":
            window.skinUrl = "https://raw.githubusercontent.com/ww28/ww28.github.io/main/img/Katana_1_E.webp"
            window.dmg = "40";
        break;
        case "4":
            window.skinUrl = "https://raw.githubusercontent.com/ww28/ww28.github.io/main/img/Bat_1_E.webp"
            window.dmg = "20";
        break;
        case "5":
            window.skinUrl = "https://raw.githubusercontent.com/ww28/ww28.github.io/main/img/Spear_E.webp"
            window.dmg = "45";
        break;
        case "6":
            window.skinUrl = "https://raw.githubusercontent.com/ww28/ww28.github.io/main/img/Crossbow_2_E.webp"
            window.dmg = "50";
        break;
    }
    window.img.src = window.skinUrl
},100);
window.addEventListener("keydown", e => {
switch(e.key) {
        case "1":
            window.skinUrl = "https://raw.githubusercontent.com/ww28/ww28.github.io/main/img/Axe_E.webp"
            window.dmg = "35";
        break;
        case "2":
            window.skinUrl = "https://raw.githubusercontent.com/ww28/ww28.github.io/main/img/Great_Hammer_1_E.webp"
            window.dmg = "35";
        break;
        case "3":
            window.skinUrl = "https://raw.githubusercontent.com/ww28/ww28.github.io/main/img/Katana_1_E.webp"
            window.dmg = "40";
        break;
        case "4":
            window.skinUrl = "https://raw.githubusercontent.com/ww28/ww28.github.io/main/img/Bat_1_E.webp"
            window.dmg = "20";
        break;
        case "5":
            window.skinUrl = "https://raw.githubusercontent.com/ww28/ww28.github.io/main/img/Spear_E.webp"
            window.dmg = "45";
        break;
        case "6":
            window.skinUrl = "https://raw.githubusercontent.com/ww28/ww28.github.io/main/img/Crossbow_2_E.webp"
            window.dmg = "50";
        break;
    }
});



