
//Global v
const result = document.getElementById("result")
const result2 = document.getElementById("result2")  //specific data display WIP
const result3 = document.getElementById("result3") //specific data display WIP

const button = document.getElementById("btn")

//Location is OSLO
const url = "https://api.met.no/weatherapi/locationforecast/2.0/compact?altitude=10&lat=59.9127&lon=10.7460"

//Trigger on buttonpress
button.addEventListener("click", function(){
    console.log("yo, button was clicked")
    
    fetching()
})


//Fetch data:

let response = fetch(url, [" -A test "])


function fetching(){
    //Get data from external source
    altering()
}

// Presenting Data

function altering(){
    result.innerText = "Changed!"
    result2.innerText = "Changed2!"
    result3.innerText = "Changed3!"
}

//Testing:

console.log(result,result2, result3, button)
console.log(response)
