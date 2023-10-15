let bulb = document.querySelector(".bulb")
let btn = document.querySelector("button")
let of = document.querySelector(".of")
btn.addEventListener("click",function(){
    bulb.style.backgroundColor="yellow"
})
of.addEventListener("click",function(){
    bulb.style.backgroundColor="transparent"
    
})