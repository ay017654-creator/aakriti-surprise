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
function playMusic(){

    let music = document.getElementById("bgMusic");

    music.play();

}
function playMusic(){

    let music = document.getElementById("bgMusic");
    let text = document.getElementById("musicText");

    if(music.paused){

        music.play();
        text.innerHTML = "Panda is singing 🎶🐼";

    } else {

        music.pause();
        text.innerHTML = "Play Music 🎵";

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
