let bulb = document.querySelector(".bulb")
let btn = document.querySelector("button")
let tag = document.querySelector("h3")
let flag = 0
btn.addEventListener("click", function () {
    if (flag == 0) {
        bulb.style.backgroundColor = "yellow"
        tag.innerHTML = "Bulb is ON"
        btn.style.backgroundColor = "red"
        btn.innerHTML = "OF"
        flag = 1
    } else {
        bulb.style.backgroundColor = "transparent"
        tag.innerHTML = "Bulb is OF"
        btn.style.backgroundColor = "green"
    btn.innerHTML = "ON"
    flag = 0

    }
}





)