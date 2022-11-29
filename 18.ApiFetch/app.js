
//Global variables
const objects = document.querySelectorAll(".obj")


//Fetch request

fetch("https://meowfacts.herokuapp.com/?count=1")
  .then((response) => response.json())
  .then((apiImport) => console.log(apiImport));



//Changing data in DOM

objects.forEach(p => {
    // console.log('tingy: ', tingy);
    fetch("https://meowfacts.herokuapp.com/?count=1")
  .then((response) => response.json())
  .then((data) => p.innerHTML = `<p>${data.data}</p>`);
    
  });

//Testing:
// console.log(objects)
// console.log("console Test")
// console.log(number)
