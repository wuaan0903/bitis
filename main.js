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
window.addEventListener("scroll",function(){
    var loginForm = document.querySelector(".shop-form")
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

const shop = document.querySelector(".shop-form")
const iconShop = document.querySelector(".shop")
iconShop.addEventListener("click",()=>{
    shop.classList.toggle("show")
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

// Show Search Suggest
$('.search-box>input').focus( function() {
    $('.search-box-show').fadeIn();
});
$('.search-box>input').blur( function() {
    $('.search-box-show').fadeOut();
});

$('.login').blur(function(){
    $('.login-form').fadeOut();
})

// ADD TO CARD
var data=[];

function add(btn){
    var product = btn.parentElement.parentElement.children;
    var title = product[2].innerHTML
    var price = product[3].innerHTML
    var img = product[0].children[0].innerHTML

    var item={
        Title : title,
        Price : price,
        Image : img
    }
    data.push(item)
    render()
    total1()
    swal("Thành Công !", "Bạn đã thêm thành công 1 sản phẩm vào giỏ hàng", "success");
}
function render(){
    table=``
    for(let i=0;i<data.length;i++)
    {
        table = table +`<div class="item">
        <div class="img">
            ${data[i].Image}
        </div>
        <div style="
        width: 100%;
    ">
            <h2 style="
            padding-right: 30px;
        ">${data[i].Title}</h2>
        <button onclick="deleteItem(${i})" class="delete" ><i class='bx bx-x'></i></button>
            <h3>${data[i].Price}</h2>
        </div>
    </div>`
    }    
    document.querySelector(".count-number").innerHTML =data.length
    document.getElementById("cart-view").innerHTML = table;
}

function deleteItem(index){
    for(let i=0;i<data.length;i++)
    {
        if(index==i)
        {
            data.splice(i,1);
            render()
            total1()
        }
    }
}
function total1(){
    var total=0;
    for(let j=0;j<data.length;j++)
    {
        var xau = data[j].Price;
        var split = xau.replace(/[^0-9]/g, '');
        total=total+Number(split);
    }
    var xau1= total.toLocaleString("en");
    xau1 = xau1 +" đ"
    document.querySelector(".total-money").innerHTML = xau1
}
