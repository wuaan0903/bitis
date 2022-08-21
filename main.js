window.addEventListener("scroll",function(){
    var header = document.querySelector(".header")
    header.classList.toggle("sticky",window.scrollY>0)
})

const toggle = document.querySelector(".menu-right-mobile"),
menu = document.querySelector(".menu-mobile")

toggle.addEventListener("click",()=>{
    menu.classList.toggle("open")
    toggle.classList.toggle("toggle")
})
