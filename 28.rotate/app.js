//Homemade**


const cya = document.getElementById("cya")
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
    cya.classList.toggle("blackItem")
    cya.classList.toggle("blackItem2")
}