//Homemade**

//Goal is to listen for mouseclick and rotate all items into ONE square



const content = document.querySelector(".content")
const c1 = document.getElementById("c1")
const c2 = document.getElementById("c2")
const c3 = document.getElementById("c3")
const c4 = document.getElementById("c4")
const c5 = document.getElementById("c5")
const c6 = document.getElementById("c6")
const c7 = document.getElementById("c7")
let rotateP = 0
let rotateN = 0
let deg = "deg"



document.addEventListener("click", () =>{
    console.log("clicked")
    callOnMe()
})


function callOnMe() {
    adjust()
    rotateP = rotateP +10
    rotateN = rotateN -10
    setInterval(changeToBox, 1000    )
}

function adjust(){
    c1.style.rotate = rotateP+deg
    c2.style.rotate = rotateN+deg
    c3.style.rotate = rotateP+deg
    c5.style.rotate = rotateP+deg
}

function changeToBox(){
    c2.classList.add("c2ex")
}