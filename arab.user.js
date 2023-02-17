// ==UserScript==
// @name         Arab Mod
// @author       Pulsar (nappi)
// @match        *://moomoo.io/*
// @match        *://sandbox.moomoo.io/*
// @match        *://dev.moomoo.io/*
// @grant        none
// @version      11
// @description  .
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @require      https://greasyfork.org/scripts/456235-moomoo-js/code/MooMoojs.js
// ==/UserScript==

WebSocket.prototype.close = () => location.reload();

window.requestAnimFrame = c => setTimeout(c, 0)
window.requestAnimationFrame = c => setTimeout(c, 0)
let onTick = [];
let tasking = 0;
function queueTickrotask (task) {
    tasking = 0;
    onTick.push(task);
}

document.getElementById('gameCanvas').style.imageRendering = "optimizeSpeed"

Object.defineProperty(Object.prototype, "turnSpeed", {
    value: 0.0005,
    writable: 0
});

var canChat = true;

const MooMoo = (function MooMooJS_beta() {})[69]

let pps = 0;
let onTick1 = []
let oldMove = 0;
let lastCoords = {x: 0, y: 0}
var mills = false
setInterval(()=>{
    let activePlayerManager = MooMoo.ActivePlayerManager;
    let dist = activePlayerManager.getClosestEnemyDistance();
    if (dist < 150 && dist > 40) {
        MooMoo.myPlayer.place(MooMoo.myPlayer.inventory.spike, makeNetwork(dist, "spiker"));
    }
    if (mills) {
        let rt = moveDir - Math.PI;
        MooMoo.myPlayer.place(MooMoo.myPlayer.inventory.mill, rt + (Math.PI / 2));
        setTimeout(()=>{
            MooMoo.myPlayer.place(MooMoo.myPlayer.inventory.mill, rt);
            setTimeout(()=>{
                MooMoo.myPlayer.place(MooMoo.myPlayer.inventory.mill, rt - (Math.PI / 2));
            }, 50);
        }, 50);
    }
    $('#ot-sdk-btn-floating').remove();
    $('#pre-content-container').remove();
    onTick[0]
    onTick=[onTick.slice(0)];
    onTick1.forEach(x=>x());
    element.innerHTML = "PPS:" + pps;
    pps=0;
}, 222);

let hitstate = 0;

let tickstate = [];

WebSocket.prototype.send = new Proxy(WebSocket.prototype.send, {
    apply(target, that, args) {
        const decoded = MooMoo.msgpack.decode(args[0]);
        if (decoded[0] == "5") {
            if ((decoded[2] ? MooMoo.myPlayer.weaponIndex : MooMoo.myPlayer.buildIndex) == decoded[1]) {
                return ()=>{};
            }
        }
        if (decoded[0] == "2" && Math.abs(decoded[1] - MooMoo.myPlayer.dir) < Math.PI / 2) {
            return ()=>{};
        }
        if (decoded[0] == "pp") return ()=>{};
        if (decoded[0] == "c") {
            if (decoded[1] == hitstate) return;
            else hitstate = decoded[1];
        }
        if (decoded[0] == "ch") {
            if (decoded[1].length > 13 || !canChat) return;
            canChat = false;
            setTimeout(()=>{ canChat=true }, 3000);
        }
        if (decoded[0] == "7") return;

        let reflect = Reflect;
        if (!tasking) {
            queueTickrotask(()=>reflect.apply(target, that, args));
            tasking = 1;
        } else {
            setTimeout(()=>{
                queueTickrotask(()=>reflect.apply(target, that, args));
                if (tasking) {
                    setTimeout(()=>{
                        queueTickrotask(()=>reflect.apply(target, that, args));
                        if (tasking) {
                            console.error('failed');
                        }
                        tasking = 1;
                    }, 100);
                }
                tasking = 1;
            }, 100);
        }
        pps++;
        return pps > 44 ? ()=>{} : Reflect.apply(...arguments);
    }
})
let shameCount = 0;
let lastHeal = Date.now();
function checkAutoheal(heal) {
    let fr = heal - lastHeal > 120;
    lastHeal = heal;
    if (fr) shameCount-=2
    else shameCount++
    return fr;
}

function place(id, angle) {
    onTick.push( () => MooMoo.myPlayer.place(id, angle) );
}

MooMoo.on("updateHealth", (data) => {
    let sid = data[0];
    let health = data[1];
    if (sid == MooMoo.myPlayer.sid) {
        if (health < 100) {
            let food = MooMoo.myPlayer.inventory.food;
            setTimeout(()=>{for(let i=0; i < Math.ceil((100 - health) / 25); i++){MooMoo.myPlayer.place(food)}; checkAutoheal(Date.now())}, makeNetwork(health, "heal"));
        }
    }
});
/** Tap mode **/

let tappingState = false;

function change_state() {

    tappingState = !tappingState;

    MooMoo.sendPacket("ch", (tappingState ? "Tap" : "Hold") + " Mode");

}

/** Placer op **/
let events = []
window.addEventListener("keydown", e => {
    events[e.keyCode] = true
})
window.addEventListener("keyup", e => {
    events[e.keyCode] = false
})
class Placer {
    constructor(key, act) {
        onTick1.push(()=>{if (events[key] && document.activeElement.id.toLowerCase() !== 'chatbox') act()})
    }
}

function getCoords(ang) {
    return {x: (Math.cos(ang)) + MooMoo.myPlayer.x,
            y: (Math.sin(ang)) + MooMoo.myPlayer.y
           }
}

let moveDir = 0;

new Placer(66, ()=>mills = !mills);
new Placer(86, ()=>{MooMoo.myPlayer.place(MooMoo.myPlayer.inventory.spike, null)});
new Placer(70, ()=>{MooMoo.myPlayer.place(MooMoo.myPlayer.inventory.trap, null)});
new Placer(87, ()=>moveDir=0-(Math.PI/2));
new Placer(65, ()=>moveDir=0 - Math.PI);
new Placer(68, ()=>moveDir=0);
new Placer(83, ()=>moveDir=(Math.PI/2));
new Placer(81, ()=>{MooMoo.myPlayer.place(MooMoo.myPlayer.inventory.food)});

/** Antikick part 2 **/
function HypotenuseLengthTheorem(a,b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
}

MooMoo.onGameLoad = ()=>{
    MooMoo.myPlayer.place = function place(id, angle = MooMoo.myPlayer.dir) {
        let itema = getCoords(angle);
        let canPlace = 1;
        let objs = MooMoo.GameObjectManager.objects;
        objs = objs[Symbol.iterator]();
        for (const obj of objs) {
            const _ = obj[1];
            if (HypotenuseLengthTheorem(_, itema) < 90) {
                canPlace = false;
            }
        }
        canPlace = (id == MooMoo.myPlayer.inventory.food) ? 1 : canPlace;
        if (!canPlace) return false;
        let weapon = MooMoo.myPlayer.weaponIndex
        MooMoo.sendPacket("5", id, false)
        MooMoo.sendPacket("c", 1, angle)
        MooMoo.sendPacket("c", 0, angle)
        MooMoo.sendPacket("5", weapon, true)
    }
}

/** Menu **/

const element = document.createElement('div');

element.style = `
z-index: 9999;
color: white;
position: absolute;
top: 0;
`;

element.innerHTML = "PPS:";

document.body.append(element);


/** InstaKill **/

new Placer(82, function() {
    window.storeEquip(7);
    MooMoo.sendPacket('c', 1, null);
    setTimeout(()=>{
        MooMoo.sendPacket('5', MooMoo.myPlayer.inventory.secondary, true);
        window.storeEquip(53);
        MooMoo.sendPacket('c', 0, null);
        setTimeout(()=>{
            window.storeEquip(6);
        }, 111);
    }, 150);
});


/** Neural Network **/

var healspeed = 0;

var incoming = {targets: [], weights: []};

var outcoming = {targets: []}

var weightedSum = 0;

class neuron {

    bias = Math.random() * 2 -1

    output = 0

    weight = 0

    
    oldOutput = 0

    sigmoid(num) {
        return Math.atan(num) * 10
    }
    connect(neuron, weight) {
        incoming.targets.push([{neuron: neuron, weight: weight, output: 0}]);
        outcoming.targets.push([{neuron: neuron, weight: weight, output: 0}]);
        outcoming[neuron.id] = outcoming[neuron.id] ? outcoming[neuron.id] : []
        outcoming[neuron.id].push(weight)
        incoming.weights.push(weight)
        weightedSum+=weight
        this.weight = weight
    }
    activate(data = 0) {
        const that = this;


        this.sum = 0;
        this.cunt = 0;

        incoming.targets.forEach(target => {
            that.cunt++;
            this.sum += weightedSum + this.weight
        })

        this.output = this.sigmoid(this.sum);

        return this.sigmoid(this.sum)

    }
    propagate(target) {
        this.rate = 0.3

        const that = this;

        const sum = this.output - target

        this.error = sum * this.output;

        this.bias -= this.rate*this.error
    }
}
const network = [];

const n = new neuron;

function makeNetwork(id, type) {
    

    n.connect({id: id}, type == "heal" ? 120 : 1);
    n.propagate(type == "heal" ? 120 : 6);

    n.activate();
    n.propagate(type == "heal" ? 120 : 6);
    const x = n.activate();
    
    network.push(n)
    
    return x;
}



















