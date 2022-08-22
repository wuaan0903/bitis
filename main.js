window.addEventListener("scroll",function(){
    var header = document.querySelector(".header")
    header.classList.toggle("sticky",window.scrollY>0)
})

const toggle = document.querySelector(".menu-right-mobile"),
menu = document.querySelector(".menu-mobile"),
iconToggle = document.querySelector(".menu1"),
iconClose = document.querySelector(".close")

toggle.addEventListener("click",()=>{
    menu.classList.toggle("open")
    toggle.classList.toggle("toggle")
})


$(document).ready(function()
{
    $(".grid-col>.row").click(function(){
        $(this).children(".content-footer").slideToggle();
        $(this).children(".title-footer1").children("i").toggleClass('bx-rotate-270')
    })
})

$(document).ready(function()
{
    $(".last-row").click(function(){
        $(this).children(".content-footer").slideToggle();
        $(this).children(".title-footer1").children("i").toggleClass('bx-rotate-270')
    })
})
