var elHeader = document.querySelector(".site-header")
var elBars = document.querySelector(".site-header__menu-btn")

elBars.addEventListener("click", ()=> {
    elHeader.classList.toggle("sitenav-on")
})