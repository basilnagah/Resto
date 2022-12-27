let bars = document.querySelector("#bars")
let nav = document.querySelector(".nav")
let search = document.querySelector("#search")
let searchForm = document.querySelector(".search-form")
let close = document.querySelector("#close")
let dark = document.querySelector("#dark")
let dishes = document.querySelector("#dishes")
let navB = document.querySelector("#navB")
let logo = document.querySelector("#logo")
let dp = document.querySelectorAll(".dp")
let menus = document.querySelector("#menu")
var items = document.querySelectorAll(".item")
var buttons = document.querySelectorAll("button")
var dishesP = document.querySelectorAll(".dishesP")
var menueH = document.querySelectorAll(".menueH")
var home = document.querySelector("#home")
var body = document.querySelector("body")
var homeH = document.querySelectorAll(".homeH")
var header = document.querySelector("header")
var about = document.querySelector("#about")
var aboutH = document.querySelectorAll(".aboutH")
var p1 = document.querySelectorAll(".p1")
var menu = document.querySelector("#menu")
var footer = document.querySelector("footer")
var review = document.querySelector("#review")
var order = document.querySelector("#order")
var aboutP = document.querySelectorAll(".aboutP")
var navLinks = document.querySelectorAll("header .nav a")
var label = document.querySelectorAll("#order label")
var footerA = document.querySelectorAll("footer li a")
var footerH = document.querySelectorAll("footer h3")
var footerP = document.querySelector("footer p")
var hr = document.querySelector("hr")





bars.addEventListener("click", function () {
    bars.classList.toggle('fa-times')
    nav.classList.toggle('slide')
})

search.addEventListener("click", function () {
    searchForm.classList.add('slide')
})
close.addEventListener("click", function () {
    searchForm.classList.remove('slide')
})



var swiper = new Swiper(".homeSlider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});

dark.addEventListener("click", function () {
    dishes.classList.toggle("dishesBg")
    menus.classList.toggle("mainLightBg")
    navB.classList.toggle("navBg")
    nav.classList.toggle("dishesItem")
    logo.classList.toggle("whiteLogo")
    home.classList.toggle("dishesBg")
    header.classList.toggle("shadowDark")
    body.classList.toggle("black")
    about.classList.toggle("dishesBg")
    menu.classList.toggle("dishesBg")
    order.classList.toggle("dishesBg")
    footer.classList.toggle("dishesBg")
    review.classList.toggle("dishesBg")
    footerP.classList.toggle("whiteLogo")
    dark.classList.toggle("mood")
    hr.classList.toggle("hrJ")
    

    for (var i = 0; i < items.length; i++) {
        items[i].classList.toggle("dishesItem")
    }
    for (var i = 0; i < menueH.length; i++) {
        menueH[i].classList.toggle("whiteLogo")
    }
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle("homeButton")
    }
    for (var i = 0; i < dp.length; i++) {
        dp[i].classList.toggle("mainWhC")
    }
    for (var i = 0; i < dishesP.length; i++) {
        dishesP[i].classList.toggle("whiteLogo")
    }
    for (var i = 0; i < homeH.length; i++) {
        homeH[i].classList.toggle("whiteLogo")
    }
    for (var i = 0; i < aboutH.length; i++) {
        aboutH[i].classList.toggle("mainGreenC")
    }
    for (var i = 0; i < p1.length; i++) {
        p1[i].classList.toggle("whiteLogo")
    }
    for (var i = 0; i < aboutP.length; i++) {
        aboutP[i].classList.toggle("whiteLogo")
    }
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.toggle("whiteLogo")
    }
    for (var i = 0; i < label.length; i++) {
        label[i].classList.toggle("whiteLogo")
    }
    for (var i = 0; i < footerA.length; i++) {
        footerA[i].classList.toggle("whiteLogo")
    }
    for (var i = 0; i < footerH.length; i++) {
        footerH[i].classList.toggle("mainGreenC")
    }

})
