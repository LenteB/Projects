let toggleNavStatus = false;

let toggleNav = function () {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";
        getSidebarTitle.style.opacity = "0.5";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }
        toggleNavStatus = true;

    }
    else if (toggleNavStatus === true) {
        getSidebarUl.style.visibility = "hidden";
        getSidebar.style.width = "50px";
        getSidebarTitle.style.opacity = "0";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }
        toggleNavStatus = false;

    }
}

/*
if (toggleNavStatus === false) {
        getSidebarUl.style.color = "blue" 


var color = ["#0000FF, #FF0000, #FFFF00, #00FF00"];
var i= 0 ;
document.querySelector("a").addEventListener("click", function(){
    i = 1 < color.length [1] i++ :0;
}

)

     

let backGroundColorStatus = false;

let menuColor = function() {
    let getBody = document.querySelector(".background");
    

    if (backGroundColorStatus === false) {
        menuColor.style.background-color = "#0000FF";
        

        let arrayLength = getSidebarLinks.length; 
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks [i].style.opacity = "1";    
        }
        toggleNavStatus = true;


*/


function colorChange() {
    document.body.style.backgroundColor = "blue";
}

function colorChange1() {
    document.body.style.backgroundColor = "green";
}

function colorChange2() {
    document.body.style.backgroundColor = "white";
}

function colorChange3() {
    document.body.style.backgroundColor = "red";
}





