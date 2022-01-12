//Movement Animation to happen

const card = document.querySelector(".card");
const container = document.querySelector(".container");

//Animation of inside of card

const title = document.querySelector(".title");
const item = document.querySelector(".item img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");

//Moving Animation Event

card.addEventListener("mousemove", (e) => {

    let xAxis = (window.innerWidth / 2 - e.pageX) / 300;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 300;
    
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});

//Animate in


card.addEventListener("mouseenter", (e) =>{

    card.style.transition = "none";

//Popout

title.style.transform = "translateZ(150px)";
item.style.transform = "translateZ(150px)";
description.style.transform = "translateZ(50px)";
purchase.style.transform = "translateZ(30px)"; 


});

//Animate out

card.addEventListener("mouseleave", (e) => {

    card.style.transition = "all 1s ease";
    card.style.transform=`rotateY(0deg) rotateX(0deg)`;



//Popback
title.style.transform = "translateZ(0px)";
item.style.transform = "translateZ(0px)";
description.style.transform = "translateZ(0px)";
purchase.style.transform = "translateZ(0px)";
});

