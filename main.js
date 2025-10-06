let menu=document.getElementById("menu")
let nav=document.querySelector("nav")
let menuToggle=document.getElementById("menu-toggle")
menuToggle.addEventListener("click",()=>{
    menu.classList.toggle("active")
    nav.classList.toggle("active")
    menuToggle.classList.toggle("active")
})


let theme=document.getElementById("theme-toggle")
if(localStorage.getItem(("theme")==='dark')){
    document.body.classList.toggle("dark-mode")
    theme.textContent="🌙"
}
theme.addEventListener('click',()=>{
    document.body.classList.toggle("dark-mode")
    document.body.classList.contains("dark-mode")?theme.textContent="🌙":theme.textContent="☀️"
})