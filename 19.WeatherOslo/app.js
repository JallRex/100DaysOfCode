
//Global v
const result = document.getElementById("result")
const result2 = document.getElementById("result2")  //specific data display WIP
const result3 = document.getElementById("result3") //specific data display WIP

const button = document.getElementById("btn")

//Location is OSLO
const url = "https://api.met.no/weatherapi/nowcast/2.0/complete?altitude=10&lat=59.9127&lon=10.7460"

//Trigger on buttonpress
button.addEventListener("click", function(){
    console.log("yo, button was clicked")
    
    fetching()
})


//Fetch data:

// let response = fetch(url, [" -A test "])




function fetching(){
    //Get data from external source
        fetch(url)
    .then((response) => response.json())
    .then((data) => result2.innerText =(data.properties.timeseries[1].data.instant.details.precipitation_rate)+ " mm");
    altering()
}

// Presenting Data

function altering(weather){
    result.innerText = "Rain in Oslo now:"
    result3.innerText = ""
}

//Testing:

console.log(result,result2, result3, button)
// console.log(response)
// console.log(url.data.properties.timeseries[1])

// data.properties.timeseries[1].data.instant.details.precipitation_rate