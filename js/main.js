let toggle = document.querySelector(".toggle")
let icon = document.querySelector(".toggle img")
let navbar = document.querySelector(".navbar")
let ul = document.querySelector("ul")
toggle.addEventListener("click",()=>{
    ul.classList.toggle("active")
    navbar.classList.toggle('nav-active')
    if(icon.src.includes("images/icon-hamburger.svg")){
        icon.src = "images/icon-close.svg"
    } else if(icon.src.includes("images/icon-close.svg")){
        icon.src = "images/icon-hamburger.svg"
    }
})




// end toggler


let svg = document.querySelectorAll(".icons svg")
let fill = document.querySelectorAll(".id")


for (let i = 0; i < svg.length; i++) {
    svg[i].addEventListener("mouseenter",()=>{
            fill[i].setAttribute("fill","hsl(136, 65%, 51%)")
    })
    svg[i].addEventListener("mouseleave",()=>{
        fill[i].setAttribute("fill","#fff")
})
}