//Globals

const sted1 = document.getElementById("trysil")
const sted2 = document.getElementById("brokke")
const sted3 = document.getElementById("sogndal")
const sted4 = document.getElementById("hemsedal")
const sted5 = document.getElementById("gausta")
const sted6 = document.getElementById("myrkdalen")
const sted7 = document.getElementById("kongsberg")
const sted8 = document.getElementById("røldal")

//Primary datapoint
const urlFnugg = "https://api.fnugg.no/get/resort/"


//"on load"
addEventListener("load", check()
)

//Do all, Be all function!
function check(){
    check1()
    check2()
    check3()
    check4()
    check5()
    check6()
    check7()
    check8()
//^^ I suppose I should have automated this a bit.
// Code below also repeats itself a bit, it could likely have been an array and a loop. Perhaps.
//The url needs an aditional identifier (a number to identify the location) which can be seen in the functions below. (urlFnugg+"x")

function check1(){
    //Trysil
    let a = fetch(urlFnugg+ "2")
    a.then(res => res.json()).then(d => {
        sted1.innerText = d._source.conditions.combined.top.snow.depth_terrain + " cm i terreng"
    })
}

function check2(){
    //Brokke
    let a = fetch(urlFnugg+"107")
    a.then(res => res.json()).then(d => {
        sted2.innerText = d._source.conditions.combined.top.snow.depth_terrain + " cm i terreng"
    })
}

function check8(){
    //Sogndal
    let a = fetch(urlFnugg+"67")
    a.then(res => res.json()).then(d => {
        sted3.innerText = d._source.conditions.combined.top.snow.depth_terrain + " cm i terreng"
    })
}

function check3(){
    //Hemsedal
    let a = fetch(urlFnugg+"5")
    a.then(res => res.json()).then(d => {
        sted4.innerText = d._source.conditions.combined.top.snow.depth_terrain + " cm i terreng"
    })
}

function check4(){
    //Gausta
    let a = fetch(urlFnugg+"14")
    a.then(res => res.json()).then(d => {
        sted5.innerText = d._source.conditions.combined.top.snow.depth_terrain + " cm i terreng"
    })
}

function check5(){
    //Myrkdalen
    let a = fetch(urlFnugg+"8")
    a.then(res => res.json()).then(d => {
        sted6.innerText = d._source.conditions.combined.top.snow.depth_terrain + " cm i terreng"
    })
}

function check6(){
    //Kongsberg
    let a = fetch(urlFnugg+"8")
    a.then(res => res.json()).then(d => {
        sted7.innerText = d._source.conditions.combined.top.snow.depth_terrain + " cm i terreng"
    })
}

function check7(){
    //Røldal
    let a = fetch(urlFnugg+"54")
    a.then(res => res.json()).then(d => {
        sted8.innerText = d._source.conditions.combined.top.snow.depth_terrain + " cm i terreng"
    })
}

}