let menu=document.getElementById("menu")
let nav=document.querySelector("nav")
let menuToggle=document.getElementById("menu-toggle")
menuToggle.addEventListener("click",()=>{
    menu.classList.toggle("active")
    nav.classList.toggle("active")
    menuToggle.classList.toggle("active")
})
