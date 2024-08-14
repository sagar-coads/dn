let login = document.querySelector(".log-container");
let post = [document.querySelector("header"),document.querySelector(".sidebar"),document.querySelector(".category-list")];
let accBtn = document.querySelector(".user-image")
let logPanOffBtn = document.querySelector(".cross-btn")

let logPanClicked = false;

accBtn.addEventListener("click",( ) => {  
    login.style.display= "flex";
    post.forEach(element => {
        element.style.zIndex = "0"
    });
})
logPanOffBtn.addEventListener("click",( ) => {  
    login.style.display= "none";
    post.forEach(element => {
        element.style.zIndex = "10"
    });
})