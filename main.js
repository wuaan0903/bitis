window.addEventListener("scroll",function(){
    var header = document.querySelector(".header")
    header.classList.toggle("sticky",window.scrollY>0)
})
window.addEventListener("scroll",function(){
    var header = document.querySelector(".logo>a")
    header.classList.toggle("sticky1",window.scrollY>0)
})

window.addEventListener("scroll",function(){
    var loginForm = document.querySelector(".login-form")
    loginForm.classList.toggle("scroll",window.scrollY>0)
})

const toggle = document.querySelector(".menu-right-mobile"),
menu = document.querySelector(".menu-mobile"),
iconToggle = document.querySelector(".menu1"),
iconClose = document.querySelector(".close")


toggle.addEventListener("click",()=>{
    menu.classList.toggle("open")
    toggle.classList.toggle("toggle")
})


const login=document.querySelector(".login")
const loginShow=document.querySelector(".login-form")
const login1=document.querySelector(".login")
login.addEventListener("click",()=>{
    loginShow.classList.toggle("show")
    login1.classList.toggle("toggle1")
})


$(document).ready(function()
{
    $(".grid-col>.row>.title-footer1").click(function(){
        $(this).parent(".row").children(".content-footer").slideToggle();
        $(this).children("i").toggleClass('bx-rotate-270')
    })
})

$(document).ready(function()
{
    $(".menu-mobile>ul>li>.list").click(function(){
        $(this).parent("li").children(".sub-list").slideToggle();
        $(this).children("i").toggleClass('bx-rotate-270')
    })
})

$(document).ready(function()
{
    $(".last-row>.title-footer1").click(function(){
        $(this).parent(".last-row").children(".content-footer").slideToggle();
        $(this).children("i").toggleClass('bx-rotate-270')
    })
})

// Loader Page
$(window).on('load', function(e) {
    $('.loader').delay(1000).fadeOut('lows');
});


// Move on Top
$(window).scroll(function() {
    if ($(this).scrollTop() >= 300) {
      $('.move-on-top i').fadeIn();
    }
    else{
      $('.move-on-top i').fadeOut();
    }
});

$('.move-on-top i').click(function() {
  $('html, body').animate({scrollTop: 0}, 1500);
});
  
