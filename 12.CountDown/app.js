const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];


  const giveaway = document.querySelector('.giveaway')
  const deadline = document.querySelector('.deadline')
  const items = document.querySelectorAll('.deadline-format h4')
  const epic = document.querySelector('.epic')

  //console.log(items)

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();


  let futureDate = new Date(2023,1,15,00,00);//Year,month0,day,hour,minute,secs,millisec
   console.log(futureDate)


  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();

  let month = futureDate.getMonth();
  let date = futureDate.getDate();
  let day = futureDate.getDay();

//   console.log(months[day])
//   console.log(weekdays[month])
//   console.log(date)
  
  day = weekdays[day];
  month = months[month];

  //OBS!! - sjekk `` / "" / '' (Template strings=  `` ${})
  giveaway.textContent = `Day 100 is on ${day}, ${date} ${month} ${year} `;
  // addon ${hours}:${minutes}

  const futureTime = futureDate.getTime();
//   console.log(futureTime)



// Function that holds "everything"
  function getRemainingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;

    //values in ms
    const oneDay = 24*60*60*1000; //hours,minutes,seconds,milliseconds
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;
    //Calculation

    let days = t/oneDay
    days = Math.floor(days);//Fjerner alt etter komma .floor*

    let hours = Math.floor((t % oneDay) / oneHour);
    

    let minutes = Math.floor((t % oneHour) / oneMinute + 1);
    //added one minute as pc clock and app here disagreeed!
    //let seconds = Math.floor((t % oneMinute) / 1000);


// Array and setup to HTML:
    const values = [days,hours,minutes];
    function format(item){
        if(item < 10){
            item = `0${item}`
        }
        return item
    }


    items.forEach(function(item,index){
        item.innerHTML = format(values[index])
    })


    if (t<0){
        clearInterval(countdown);
        epic.innerHTML = `<h5> Time expired, but can be changed in app.js</h5>`
    }

    //Testing grounds:
    // console.log(oneDay)
    // console.log(t)
    // console.log(days)
    // console.log(hours)
    // console.log(minutes)

  }
  // countdown - refreshes every 10 sec
  let countdown = setInterval(getRemainingTime, 10000)
  getRemainingTime();