var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
    triggerElement: "#omne",
    reverse: false
}).setClassToggle(".nadpis1", "show").addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#omne",
    reverse: false
}).setClassToggle(".omne-wrapper", "show") .addTo(controller); 

new ScrollMagic.Scene({
    triggerElement: "#projekty",
    reverse: false
}).setClassToggle(".nadpis2", "show") .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#kontakt",
    reverse: false
}).setClassToggle(".nadpis3", "show") .addTo(controller);  

new ScrollMagic.Scene({
    triggerElement: "#omne",
    reverse: false
}).setClassToggle(".skills", "show") .addTo(controller);  

new ScrollMagic.Scene({
    triggerElement: "#projekty",
    reverse: false
}).setClassToggle(".one", "show") .addTo(controller); 

new ScrollMagic.Scene({
    triggerElement: "#projekty",
    reverse: false
}).setClassToggle(".two", "show") .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#projekty",
    reverse: false
}).setClassToggle(".three", "show") .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: ".wrapper",
}).setClassToggle(".nav", "color") .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: ".wrapper",
}).setClassToggle(".mobile", "color") .addTo(controller); 


//------START MOBILE

const button = document.querySelectorAll(".button");
let show = true;
let show2 = true;
let show3 = true;

button[0].addEventListener("click", () => {
    if(show){
        document.querySelector(".covid").style.background = 'black';
        show = !show;
    }
    else{
        document.querySelector(".covid").style.background = 'url("./img/covid.png") top';
        document.querySelector(".covid").style.backgroundSize = 'cover';
        show = !show;
    }

})

button[1].addEventListener("click", () => {
    if(show2){
    document.querySelector(".space").style.background = 'black';
    show2 = !show2;
}
else{
    document.querySelector(".space").style.background = 'url("./img/space-cowboys.png") top';
    document.querySelector(".space").style.backgroundSize = 'cover';
    show2 = !show2;
}
})

button[2].addEventListener("click", () => {
    if(show3){
    document.querySelector(".elearning").style.background = 'black';
    show3 = !show3;
}
else{
    document.querySelector(".elearning").style.background = 'url("./img/home.png") top';
    document.querySelector(".elearning").style.backgroundSize = 'cover';
    show3 = !show3;
}
})



const mobileMenuBtn = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const navItem = document.querySelectorAll(".nav-link")

navItem.forEach( item => {
    item.addEventListener("click", () =>{
        mobileMenu.style.opacity = "0";
        mobileMenuBtn.style.transform = "rotateY(0deg)";
        for(let i = 0; i < mobileMenuBtn.children.length; i++){
            mobileMenuBtn.children[i].style.background = "#fff";
        }
        setTimeout(() => {
            mobileMenu.style.display = "none";
            document.body.style.overflowY = "auto";
        }, 300); 
        showMenu = !showMenu;
    })
})

let showMenu = true;
mobileMenuBtn.addEventListener("click", () => {
    if(showMenu === true){
        mobileMenu.style.display = "flex";
        mobileMenuBtn.style.transform = "rotateY(180deg)";
        for(let i = 0; i < mobileMenuBtn.children.length; i++){
            mobileMenuBtn.children[i].style.background = "rgb(252, 206, 0)";
        }
        document.body.style.overflowY = "hidden";
        setTimeout(() => {
            mobileMenu.style.opacity = "1";
        }, 0); 
        showMenu = !showMenu;
    }
    else{
        mobileMenu.style.opacity = "0";
        mobileMenuBtn.style.transform = "rotateY(0deg)";
        mobileMenuBtn.style.color = "#fff";
        for(let i = 0; i < mobileMenuBtn.children.length; i++){
            mobileMenuBtn.children[i].style.background = "#fff";
        }
        setTimeout(() => {
            mobileMenu.style.display = "none";
            document.body.style.overflowY = "auto";
        }, 300); 
        showMenu = !showMenu;
    }

})

const copyEmail = () => {
    document.querySelector(".copy").addEventListener("click", () =>{
        let email = document.querySelector(".email");
        email.select();
        email.setSelectionRange(0, 99999);
        document.execCommand("copy");
        let hlaska = document.querySelector(".hlaska");
        hlaska.style.display = "block";
        setTimeout(() => {
            hlaska.style.opacity = "1"; 
        }, 0);
        setTimeout(() => {
            hlaska.style.opacity = "0";
            setTimeout(() => {
                hlaska.style.display = "none"; 
            }, 2500);
        }, 2000);
    })
}
copyEmail();





