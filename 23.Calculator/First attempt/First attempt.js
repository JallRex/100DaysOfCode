// Calculator App


// G Vars
let inputNumber = []
let inputAction
let sum



//Getting buttons

const btn = document.querySelectorAll("[btns]")


//actions




//clearing Data
function clearInput(){

}



//Listner

btn.forEach(button => {
    button.addEventListener("click",() =>{
        check(button)
    })
})


// Functions // logic


function check(button){
    if(button.innerText === "%"){console.log("%")}
    if(button.innerText === "C"){}
    if(button.innerText === "Bck"){}
    if(button.innerText === "/"){}
    if(button.innerText === "x"){}
    if(button.innerText === "+"){}
    if(button.innerText === "-"){}
    if(button.innerText === "="){}
}




function adition(){
    sum = inputNumber.reduce
}



//console.log(button.innerText)















