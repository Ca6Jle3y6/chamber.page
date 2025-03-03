"use strict";


document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("visible", i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  setInterval(nextSlide, 5000);
});














function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}


window.addEventListener(
  "scroll",
  debounce(() => {
    console.log("Прокручено вниз:", window.scrollY);
  }, 20)
);








const ultDescr = document.getElementById("ult-descr-id")
const ultImg = document.getElementById("ult-img-id")

const descrOfHeadHunt = document.getElementById("desc-of-hh-id")
const headHuntImg = document.getElementById("hh-img-id")

const trapImg = document.getElementById("trap-img-id")
const trapDescr = document.getElementById("trap-descr-id")

const telPortImg = document.getElementById("tp-img-id")
const telPortDescr = document.getElementById("tp-descr-id")


function addUlt(){
  const scrollY = window.scrollY
  if(scrollY >= 1000 && scrollY <= 2100){
    ultDescr.classList.add("transl0");
    ultImg.classList.add("transl0")
  } else {
    ultDescr.classList.remove("transl0");
    ultImg.classList.remove("transl0")
  }
}

function addHeadHunt(){
  const scrollY = window.scrollY
  if(scrollY >= 1500 && scrollY <= 2530){
    descrOfHeadHunt.classList.add("transl0");
    headHuntImg.classList.add("transl0")
  } else {
    descrOfHeadHunt.classList.remove("transl0");
    headHuntImg.classList.remove("transl0")
  }
}

function addTrapAndTPImg(){
  const scrollY = window.scrollY
  if(scrollY >= 2000 && scrollY <= 10000){
    trapImg.classList.add("transl1");
    telPortImg.classList.add("transl1");

setTimeout(() => {
      trapImg.classList.add("teleport-state");
      telPortImg.classList.add("teleport-state");
    }, 400);

  } else {
    trapImg.classList.remove("transl1", "teleport-state");
    telPortImg.classList.remove("transl1", "teleport-state");
  }
}

function addTeleportAndTrapDesc(){
  const scrollY = window.scrollY
  if(scrollY >= 2300 && scrollY <= 10000){
    trapDescr.classList.add("transl2");
    telPortDescr.classList.add("transl2")
  } else {
    trapDescr.classList.remove("transl2");
    telPortDescr.classList.remove("transl2")
  }
}

window.addEventListener("scroll", debounce(addUlt, 20));
window.addEventListener("scroll", debounce(addHeadHunt, 20));
window.addEventListener("scroll", debounce(addTrapAndTPImg, 20));
window.addEventListener("scroll", debounce(addTeleportAndTrapDesc, 20));















const ultBlock = document.getElementById("ult-block-id")
const videoUlt = document.getElementById("video-ult-id")

ultBlock.addEventListener('click', () => {
    if (videoUlt.style.display === "none" || videoUlt.style.display === "") {
        ultImg.style.display = "none";
        videoUlt.style.display = "block";
        videoUlt.play();
    }
});


videoUlt.addEventListener('click', () => {
    videoUlt.pause();
    videoUlt.currentTime = 0;
    
    
    setTimeout(() => {
        videoUlt.style.display = "none";
        ultImg.style.display = "block";
    }, 50);
});

videoUlt.addEventListener('ended',() => {
  videoUlt.style.display = 'none';
  ultImg.style.display = 'block';
});


const headHuntBlock = document.getElementById("headhunt-block-id")
const videoHeadHunt = document.getElementById("video-headhunt-id")

headHuntBlock.addEventListener('click', () => {
    if (videoHeadHunt.style.display === "none" || videoHeadHunt.style.display === "") {
        headHuntImg.style.display = "none";
        videoHeadHunt.style.display = "block";
        videoHeadHunt.play();
    }
});


videoHeadHunt.addEventListener('click', () => {
    videoHeadHunt.pause();
    videoHeadHunt.currentTime = 0;
    
    
    setTimeout(() => {
        videoHeadHunt.style.display = "none";
        headHuntImg.style.display = "block";
    }, 50);
});

videoHeadHunt.addEventListener('ended',() => {
  videoHeadHunt.style.display = 'none';
  headHuntImg.style.display = 'block';
});



const trapImgIn = document.getElementById("trap-real-img-id")
const videoTrap = document.getElementById("video-trap-id")

trapImg.addEventListener('click', () => {
    if (videoTrap.style.display === "none" || videoTrap.style.display === "") {
        trapImgIn.style.display = "none";
        videoTrap.style.display = "block";
        videoTrap.play();
    }
});


videoTrap.addEventListener('click', () => {
    videoTrap.pause();
    videoTrap.currentTime = 0;
    
    
    setTimeout(() => {
        videoTrap.style.display = "none";
        trapImgIn.style.display = "block";
    }, 50);
});

videoTrap.addEventListener('ended',() => {
  videoTrap.style.display = 'none';
  trapImgIn.style.display = 'block';
});


const teleportImgIn = document.getElementById("tp-real-img-id")
const teleportVideo = document.getElementById("video-tp-id")

telPortImg.addEventListener('click', () => {
    if (teleportVideo.style.display === "none" || teleportVideo.style.display === "") {
        teleportImgIn.style.display = "none";
        teleportVideo.style.display = "block";
        teleportVideo.play();
    }
});


teleportVideo.addEventListener('click', () => {
    teleportVideo.pause();
    teleportVideo.currentTime = 0;
    
    
    setTimeout(() => {
        teleportVideo.style.display = "none";
        teleportImgIn.style.display = "block";
    }, 50);
});

teleportVideo.addEventListener('ended',() => {
  teleportVideo.style.display = 'none';
  teleportImgIn.style.display = 'block';
});













function videoUltEnded() {
  const scrollY = window.scrollY;
  
  if (scrollY <= 1000 || scrollY >= 2100) {
    videoUlt.pause();
    videoUlt.currentTime = 0;
    videoUlt.style.display = 'none';
    ultImg.style.display = 'block';
  }
}

window.addEventListener('scroll', videoUltEnded);


function videoHeadHuntEnded() {
  const scrollY = window.scrollY;
  
  if (scrollY <= 1500 || scrollY >= 2530) {
    videoHeadHunt.pause();
    videoHeadHunt.currentTime = 0;
    videoHeadHunt.style.display = 'none';
    headHuntImg.style.display = 'block';
  }
}

window.addEventListener('scroll', videoHeadHuntEnded);


function videoTelPortEnded() {
  const scrollY = window.scrollY;
  
  if (scrollY <= 2000 || scrollY >= 10000) {
    teleportVideo.pause();
    teleportVideo.currentTime = 0;
    teleportVideo.style.display = 'none';
    teleportImgIn.style.display = 'block';
  }
}

window.addEventListener('scroll', videoTelPortEnded);


function videoTrapEnded() {
  const scrollY = window.scrollY;
  
  if (scrollY <= 2000 || scrollY >= 10000) {
    videoTrap.pause();
    videoTrap.currentTime = 0;
    videoTrap.style.display = 'none';
    trapImgIn.style.display = 'block';
  }
}

window.addEventListener('scroll', videoTrapEnded);












