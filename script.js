function bodyLoaded() { // Body is loaded then this function is called
    let finalWiner = document.getElementById("finalWiner") // "finalwinner" will store the result who won at last
    let slct = document.getElementById("rps") // Getting <select>
    let youImg = document.getElementById("you") // User select option from <select> will reflect the image according to it
    let computerImg = document.getElementById("computer") // Random Image is generated 
    let images = document.getElementById("images") // Conatiner where images are shown
    let play = document.getElementById("play") // Button to play the game
    let userPoints = 0; // Initial Score of User
    let userSelected = slct.value; // Getting value of User which is selected from <select>
    let computerPoints = 0; // Initail Score of Computer
    let userScore = document.getElementById("userScore"); // The user score will be Displayed here
    let computerScore = document.getElementById("computerScore"); // The compute score will be Displayed here
    let modal = document.createElement("div"); // Creating a Modal when one of the player i.e. User or Computer won the can to Display who won
    let paragraph = document.createElement("p") // paragraph will contain info who won
    modal.setAttribute("class", "modal") // Setting Attributes to modal it is basically for Designing
    let innerModal = document.createElement("div") // Creating child "div" of "modal"
    let btnok = document.createElement("button") // Creating a Button to restart the Match
    btnok.setAttribute("class", "play") // Adding class to "btnok"
    btnok.setAttribute("id", "ok") // Adding id to "btnok"
    btnok.innerText = "Restart Game" // Displaying Message to "btnok" to restart the game
    
    slct.addEventListener("click", (e) => { // Adding Click Event when user select from the <select>
        e.preventDefault();
        let userSelected = slct.value; // Getting value of User which is selected from <select>(it is declared twice i know reeee)

        //------------------- Dispalying image as per the user have selected option ----------
        if(userSelected == "Paper") { 
            youImg.setAttribute("src", "./assets/images/paper.png")
        }
        if(userSelected == "Rock") {
            youImg.setAttribute("src", "./assets/images/rock.png")
        }
        if(userSelected == "Scissor") {
            youImg.setAttribute("src", "./assets/images/scissor.png")
        }
    })
    //------------------ When User Click on "Play" button
    play.addEventListener("click", (e) => {
        e.preventDefault()
        let userSelected = slct.value; // Getting value of User which is selected from <select>(it is declared third time i know reeee)
        computerImg.classList.add("hvr") // Adding Shuffle Animation to the Computer image  by adding Class dynamically which is declared in Style.css
        let possibleOutput = ["Rock", "Paper", "Scissor"] // Computer will choose randomaly items from this array with help of Math.random()
        let output = possibleOutput[Math.floor(Math.random() * possibleOutput.length)]
        setTimeout(() => {
            computerImg.classList.remove("hvr"); // Removing class of "hvr" after 2000ms to reanimate the Computer image shuffle
        }, 2000);
        setTimeout(() => {
            computerImg.setAttribute("src", "./assets/images/rock.png") // After the computer select random item from "possibleOutput" the image of selected item is displayed for 1000ms and again "Rock" image is Shown
        }, 2000);



        //--------------------- Displaying image which Computer has randomly selected for 1000ms ------------------
        if (output == "Paper") {
            setTimeout(() => {
                computerImg.setAttribute("src", "./assets/images/paper.png")
            }, 1000);
        }
        if (output == "Rock") {
            setTimeout(() => {
                computerImg.setAttribute("src", "./assets/images/rock.png")
            }, 1000);

        }
        if (output == "Scissor") {
            setTimeout(() => {
                computerImg.setAttribute("src", "./assets/images/scissor.png")
            }, 1000);

        }



        //-------------------------- Logic for win ---------------------
        if ((userSelected == "Paper" && output == "Scissor") || (userSelected == "Rock" && output == "Paper") || (userSelected == "Scissor" && output == "Rock")) {
            console.log("Computer Wins" + output);
            computerPoints++;
            setTimeout(() => {
                computerScore.innerText = computerPoints
            }, 1000);
        }
        // ------------------- If no one win ------------------
        else if (userSelected == output) {
            console.log("no one Wins" + userSelected + output);
        }
        else {
            console.log("user win" + userSelected);
            userPoints++;
            setTimeout(() => {
                userScore.innerText = userPoints
            }, 1000);
        }


        //------------------------ Dispalying the Final Result who won -------------------
        if (userPoints >= 10) {
            finalWiner.appendChild(modal)
            modal.appendChild(innerModal)
            paragraph.innerText = "User win"
            innerModal.append(paragraph)
            innerModal.appendChild(btnok)
            userPoints = 0;
            computerPoints = 0;
        }
        if (computerPoints >= 10) {
            finalWiner.appendChild(modal)
            modal.appendChild(innerModal)
            paragraph.innerText = "Computer win"
            innerModal.append(paragraph)
            innerModal.appendChild(btnok)
            userPoints = 0;
            computerPoints = 0;

        }


        //------------------- Modal Button to restart game ----------------------
        btnok.addEventListener("click", (e) => {
            finalWiner.removeChild(modal)
            userPoints = 0;
            computerPoints = 0;
            location.reload()
        })
    })
}