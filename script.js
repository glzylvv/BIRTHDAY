// ==========================
// OPEN INVITATION
// ==========================

const cover = document.querySelector(".cover");
const home = document.getElementById("home");
const openBtn = document.getElementById("openInvitation");

home.style.display = "none";

openBtn.addEventListener("click", () => {

    cover.classList.add("is-hidden");

    setTimeout(() => {
        cover.style.display = "none";
        home.style.display = "block";
        requestAnimationFrame(() => home.classList.add("is-visible"));
    }, 700);

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

    music.play();

    launchConfetti();

});

// ==========================
// COUNTDOWN
// ==========================

const targetDate = new Date("June 23, 2027 20:00:00").getTime();

const timer = setInterval(function(){

const now = new Date().getTime();

const distance = targetDate-now;

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

const seconds=Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=seconds;

if(distance<0){

clearInterval(timer);

document.querySelector(".count-box").innerHTML="<h2>🎉 Happy Birthday 🎉</h2>";

}

},1000);

// ==========================
// MUSIC
// ==========================

const music = new Audio("assets/music/Taylor Swift - 22.mp3");

music.loop=true;

// ==========================
// FLOATING HEART
// ==========================

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-30px";

heart.style.fontSize=(20+Math.random()*20)+"px";

heart.style.animation="heart 6s linear";

heart.style.zIndex="999";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

},700);

// ==========================
// HEART ANIMATION
// ==========================

const style=document.createElement("style");

style.innerHTML=`

@keyframes heart{

0%{

transform:translateY(0) rotate(0deg);

opacity:1;

}

100%{

transform:translateY(-120vh) rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);

// ==========================
// BUTTON ANIMATION
// ==========================

const buttons=document.querySelectorAll("a,.btn,button");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

// ==========================
// SCROLL EFFECT
// ==========================

window.addEventListener("scroll",()=>{

const reveal=document.querySelectorAll("section");

reveal.forEach(sec=>{

const top=sec.getBoundingClientRect().top;

if(top<window.innerHeight-100){

sec.style.opacity="1";

sec.style.transform="translateY(0)";

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(60px)";

sec.style.transition=".8s";

});

// ==========================
// MUSIC BUTTON
// ==========================

const musicBtn = document.getElementById("musicBtn");

musicBtn.onclick = function(){

if(music.paused){

music.play();

musicBtn.innerHTML="⏸";

}else{

music.pause();

musicBtn.innerHTML="🎵";

}

}

// ==============================
// PREMIUM FLOATING PARTICLES
// ==============================

function createSparkle(){

const sparkle=document.createElement("div");

sparkle.className="sparkle";

sparkle.style.left=Math.random()*100+"vw";

sparkle.style.animationDuration=
(4+Math.random()*5)+"s";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},9000);

}

setInterval(createSparkle,400);

// ==========================
// CONFETTI
// ==========================

function launchConfetti(){

    const colors=[
        "#ff69b4",
        "#87cefa",
        "#ffffff",
        "#ffd700",
        "#ffb6c1",
        "#c084fc"
    ];

    for(let i=0;i<180;i++){

        const confetti=document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        confetti.style.animationDuration=
        (3+Math.random()*3)+"s";

        confetti.style.transform=
        `rotate(${Math.random()*360}deg)`;

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.remove();

        },6000);

    }

}

// ==========================
// LIGHTBOX GALLERY
// ==========================

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

if(lightbox && lightboxImg && closeLightbox){

    galleryImages.forEach(img=>{

        img.addEventListener("click",()=>{

            lightbox.style.display="flex";
            lightboxImg.src=img.src;

        });

    });

    closeLightbox.addEventListener("click",()=>{

        lightbox.style.display="none";

    });

    lightbox.addEventListener("click",(e)=>{

        if(e.target===lightbox){

            lightbox.style.display="none";

        }

    });

}
// ==========================
// LETTER ANIMATION
// ==========================

const letter = document.querySelector(".letter-card");

if(letter){

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                letter.style.opacity="1";
                letter.style.transform="translateY(0)";

            }

        });

    });

    letter.style.opacity="0";
    letter.style.transform="translateY(60px)";
    letter.style.transition="1s";

    observer.observe(letter);

}

// ==========================
// GUEST BOOK
// ==========================

const sendWish = document.getElementById("sendWish");

if (sendWish) {

    const wishList = document.getElementById("wishList");

    // helper to escape user input
    function escapeHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    // load saved wishes from localStorage (so users see messages after reload)
    try {
        const stored = localStorage.getItem('birthday_wishes');
        if (stored) {
            const arr = JSON.parse(stored);
            arr.forEach(w => {
                const wish = document.createElement('div');
                wish.className = 'wish';
                wish.innerHTML = `
                    <h3>💖 ${escapeHtml(w.name)}</h3>
                    <p>${escapeHtml(w.message)}</p>
                `;
                wishList.appendChild(wish);
            });
        }
    } catch (e) {
        console.error('Error loading saved wishes', e);
    }

    sendWish.addEventListener("click", function () {
        const name = document.getElementById("guestName").value.trim();
        const message = document.getElementById("guestMessage").value.trim();

        if (name === "" || message === "") {
            alert("Silakan isi nama dan ucapan terlebih dahulu.");
            return;
        }

        const wish = document.createElement("div");
        wish.className = "wish";
        wish.innerHTML = `
            <h3>💖 ${escapeHtml(name)}</h3>
            <p>${escapeHtml(message)}</p>
        `;

        // show new wish on top
        wishList.prepend(wish);

        // persist to localStorage
        try {
            const prev = localStorage.getItem('birthday_wishes');
            const arr = prev ? JSON.parse(prev) : [];
            arr.unshift({ name, message, time: Date.now() });
            // limit stored entries to 200
            localStorage.setItem('birthday_wishes', JSON.stringify(arr.slice(0, 200)));
        } catch (e) {
            console.error('Could not save wish', e);
        }

        document.getElementById("guestName").value = "";
        document.getElementById("guestMessage").value = "";

    });
       
}

// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const tujuan = document.querySelector(this.getAttribute("href"));

        if(tujuan){

            tujuan.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ==========================
// BIRTHDAY CAKE
// ==========================

const blowBtn = document.getElementById("blowBtn");

const flame = document.getElementById("flame");

const wishText = document.getElementById("wishText");

if(blowBtn){

    blowBtn.addEventListener("click",()=>{

        flame.style.display="none";

        wishText.innerHTML="✨ Make A Wish! Happy Birthday 💖";

        launchConfetti();

    });

}

