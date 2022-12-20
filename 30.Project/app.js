

// Accessing local storage and adding an item (only one and overwriting*)


window.addEventListener('submit', () => {
    localStorage.setItem("name", document.getElementById("name").value);

  })

  let test = window.localStorage.getItem("name")

  console.log(test)
  console.log(test)