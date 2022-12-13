//Homemade**


const cya1 = document.getElementById("cya1")
const cya2 = document.getElementById("cya2")
const cya3 = document.getElementById("cya3")
const cya4 = document.getElementById("cya4")
const cya5 = document.getElementById("cya5")
const cya6 = document.getElementById("cya6")
const cya7 = document.getElementById("cya7")
const cya8 = document.getElementById("cya8")
const c1 = document.getElementById("c1")
const c2 = document.getElementById("c2")
const c3 = document.getElementById("c3")
const c4 = document.getElementById("c4")



document.addEventListener("click", () =>{
    console.log("You clicked")
    alternateClass()
    middleBall()
   
})


function alternateClass(){
   c1.classList.toggle("c1")
   c1.classList.toggle("coneex")
   c2.classList.toggle("c2")
   c2.classList.toggle("ctwoex")
   c3.classList.toggle("c3")
   c3.classList.toggle("cthreeex")
   c4.classList.toggle("c4")
   c4.classList.toggle("cfourex")
}

function middleBall(){
    cya1.classList.toggle("ballOne")
    cya1.classList.toggle("ballOne1")
    cya2.classList.toggle("ballTwo")
    cya2.classList.toggle("ballTwo1")
    cya3.classList.toggle("ballThree")
    cya3.classList.toggle("ballThree1")
    cya4.classList.toggle("ballFour")
    cya4.classList.toggle("ballFour1")
    cya5.classList.toggle("ballFive")
    cya5.classList.toggle("ballFive1")
    cya6.classList.toggle("ballSix")
    cya6.classList.toggle("ballSix1")
    cya7.classList.toggle("ballSeven")
    cya7.classList.toggle("ballSeven1")
    cya8.classList.toggle("ballEight")
    cya8.classList.toggle("ballEight1")
}