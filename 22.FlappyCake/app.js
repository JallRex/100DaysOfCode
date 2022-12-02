document.addEventListener("DOMContentLoaded", () =>{
    
    
    //Variable Town
    const bird = document.querySelector(".bird")
    const gameDisplay = document.querySelector(".game-container")
    const ground = document.querySelector(".ground")

    //Game settings
    let obstacleDensity = 4000
    let gameTime = 20
    let obstacleSpeed = 20
    let birdLeft = 220
    let birdBottom = 100
    let gravity = 1
    let jumpHeight = 50
    let isGameOver = false
    let gap = 430
    


//Function Town (Where all the functions hang out)
    
    function startGame(){
        birdBottom -= gravity
        bird.style.bottom = birdBottom + "px"
        bird.style.left = birdLeft + "px"
    }
    
    //Setting gametime
    let gameTimerId = setInterval(startGame,gameTime)

    //Checking that pressed key is spaceBar*
    function control(e){
        if(e.keyCode === 32){
            jump()
        }
    }

    //Setting Jump for the Cake
    function jump(){
        if (birdBottom < 500)
        birdBottom += jumpHeight
        bird.style.bottom = birdBottom + "px"
        
    }

    //Creating obstacles!
    function generateObstacle() {
        let obstacleLeft = 500
        let randomHeight = Math.random() * 60
        let obstacleBottom = randomHeight
        const obstacle = document.createElement("div")
        const topObstacle = document.createElement("div")
        const cakeIsLie = document.createElement("div")//LieCake
        if (!isGameOver) {
            obstacle.classList.add("obstacle")
            topObstacle.classList.add("topObstacle")
        }
        if(isGameOver){//Cake might lie?
            gameDisplay.appendChild(cakeIsLie)
            cakeIsLie.innerHTML= `<h1 class="lies">Did the cake lie?</h1>`
        }
        gameDisplay.appendChild(obstacle)
        gameDisplay.appendChild(topObstacle)
        obstacle.style.left = obstacleLeft + "px"
        topObstacle.style.left = obstacleLeft + "px"
        obstacle.style.bottom = obstacleBottom + "px"
        topObstacle.style.bottom = obstacleBottom + gap + "px"


            //The obstacles are alive and have a form of collision!!
            function moveObstacle () {
                obstacleLeft -= 2
                obstacle.style.left = obstacleLeft + "px"
                topObstacle.style.left = obstacleLeft + "px"
                
                if(obstacleLeft === -60){
                    clearInterval(timerId)
                    gameDisplay.removeChild(obstacle)
                    gameDisplay.removeChild(topObstacle)
                }
                if(
                    obstacleLeft > 200 && obstacleLeft < 280 && birdLeft === 220 &&
                    (birdBottom < obstacleBottom + 150 || birdBottom > obstacleBottom +gap -200) ||
                    birdBottom === 0
                    ){
                    gameOver()
                    clearInterval(timerId)
                }
            }

        let timerId = setInterval(moveObstacle, obstacleSpeed)
        if(!isGameOver) setTimeout(generateObstacle, obstacleDensity)
    }

    //Stopping the game:

    function gameOver(){
        clearInterval(gameTimerId)
        isGameOver = true
        document.removeEventListener("keyup", control)
    }

    //Trigger

    generateObstacle()

// EventListeners::

    document.addEventListener("keyup", control)


    //End of DOMContentLoaded*
}) 