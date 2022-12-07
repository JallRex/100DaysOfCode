//paragraph
//"maps found free: https://www.google.com/maps/d/"

//Google My maps 



const textBox = document.querySelector(".paragraph")
const damn = document.querySelector(".damn")
const mapBox = document.getElementById("map")

const url = "https://www.google.com/maps/d/embed?mid=1_CJFjzgnZ9WsTLbBMACoKsN9N6K9HSc&ehbc=2E312F"

textBox.addEventListener("click", mapper)

function mapper(){
  textBox.innerHTML = `<p>Shit you found the map!</p>`
  mapBox.innerHTML = `<iframe src="${url}" height="480" width="640"></iframe>`
  damn.innerText = "maps found free: https://www.google.com/maps/d/"
}
