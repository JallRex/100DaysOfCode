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
let rotate = 0



document.addEventListener("click", () =>{
    console.log("clicked")
    callOnMe()
})


function callOnMe() {
    rotate + 30
    adjust()
    console.log(rotate)
    rotate = rotate +"deg"
    console.log(rotate)
}

function adjust(){
    c1.style.rotate = rotate
}