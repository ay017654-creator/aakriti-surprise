function openGift(){

    let gift = document.querySelector(".gift");

    gift.innerHTML = "💖";
    gift.classList.add("open");

    document.getElementById("message").innerHTML =
    "🎉 Surprise Opened! 🎉<br><br>" +
    "Dear Aakriti ❤️<br>" +
    "This little panda gift is made with love 🌸<br>" +
    "Always keep smiling 🐼✨";


    for(let i = 0; i < 15; i++){

        let heart = document.createElement("div");

        heart.innerHTML = ["❤️","✨","🌸","💖"][Math.floor(Math.random()*4)];

        heart.className = "heart";

        heart.style.left = Math.random()*100 + "vw";

        document.body.appendChild(heart);


        setTimeout(()=>{
            heart.remove();
        },3000);
    }
}
function playMusic() {

    let music = document.getElementById("bgMusic");
    let text = document.getElementById("musicText");
    let panda = document.getElementById("panda");

    if (music.paused) {

        music.play();
        text.innerHTML = "⏸ Pause Music";
        panda.classList.add("playing");

    } else {

        music.pause();
        text.innerHTML = "▶️ Play Music";
        panda.classList.remove("playing");

    }

}

}
let text = "This is a small message from my heart ✨\n\nYou bring happiness and smiles. Always stay kind, keep dreaming, and never stop shining 🌟\n\nKeep smiling always 🐼🌸";

let i = 0;

function typingEffect() {

    if (i < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;

        setTimeout(typingEffect, 80);

    }

}

window.onload = typingEffect;
function createStar(){

    let star = document.createElement("div");

    star.className = "star";
    star.innerHTML = "⭐";

    star.style.left = Math.random()*100 + "vw";
    star.style.top = Math.random()*80 + "vh";

    document.body.appendChild(star);

}

for(let i=0;i<20;i++){
    createStar();
}


function createCloud(){

    let cloud = document.createElement("div");

    cloud.className="cloud";
    cloud.innerHTML="☁️";

    cloud.style.top=Math.random()*50+"vh";

    document.body.appendChild(cloud);

}

setInterval(createCloud,5000);
function createButterfly(){

let b=document.createElement("div");

b.className="butterfly";
b.innerHTML="🦋";

document.body.appendChild(b);

setTimeout(()=>{
b.remove();
},8000);

}

setInterval(createButterfly,4000);
let music = document.getElementById("music");
let panda = document.getElementById("panda");
let btn = document.getElementById("musicBtn");


function toggleMusic(){

if(music.paused){

music.play();

btn.innerHTML="⏸ Pause";

panda.classList.add("playing");

}

else{

music.pause();

btn.innerHTML="▶️ Play";

panda.classList.remove("playing");

}

}


document.getElementById("volume").oninput=function(){

music.volume=this.value;

}
// Panda Music Player
const music = document.getElementById("bgMusic");
const musicText = document.getElementById("musicText");
const panda = document.getElementById("panda");
const volume = document.getElementById("volume");

function playMusic() {

    if (!music) return;

    if (music.paused) {

        music.play();
        if (musicText) musicText.innerHTML = "⏸ Pause Music";
        if (panda) panda.classList.add("playing");

    } else {

        music.pause();
        if (musicText) musicText.innerHTML = "▶️ Play Music";
        if (panda) panda.classList.remove("playing");

    }

}

if (volume && music) {

    volume.addEventListener("input", function () {
        music.volume = this.value;
    });

}
let message = 
`This is a small message from my heart ✨

You bring happiness and smiles.
Always stay kind, keep dreaming,
and never stop shining 🌟

Keep smiling always 🐼🌸`;

let index = 0;

function typeLetter(){

    let typing = document.getElementById("typing");

    if(typing && index < message.length){

        typing.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeLetter, 60);

    }

}

typeLetter();
