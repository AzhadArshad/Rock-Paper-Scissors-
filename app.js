// Initialize user and computer scores
let userScore = 0;
let compScore = 0;

// Select all choice buttons (rock, paper, scissors) from the DOM
const choices = document.querySelectorAll('.choice');
// Select the message display element
const msg = document.querySelector('#msg');
// Select score elements for updating user and computer scores
const userScore_span = document.querySelector('#user-score');
const compScore_span = document.querySelector('#comp-score');

// Function to generate computer's random choice
const genComputerChoice = () => {
    const options = ['rock', 'paper', 'scissors']; // Array of choices
    const randomNum = Math.floor(Math.random() * 3); // Generate a random index (0-2)
    return options[randomNum]; // Return the randomly selected choice
}

// Function to display the winner and update scores accordingly
const showWinner = (userWin, computerChoice, userChoice) => {
    if (userWin) {
        userScore++; // Increment user score
        userScore_span.innerHTML = userScore; // Update user score on UI
        msg.innerHTML = `User Wins!! ${userChoice} beats ${computerChoice}`; // Display user win message
        msg.style.backgroundColor = 'green'; // Change background color to indicate win
    } else {
        compScore++; // Increment computer score
        compScore_span.innerHTML = compScore; // Update computer score on UI
        msg.innerHTML = `Computer Wins!! ${computerChoice} beats ${userChoice}`; // Display computer win message
        msg.style.backgroundColor = 'orange'; // Change background color to indicate loss
    }
}

// Function to handle game logic when user makes a choice
const playGame = (userChoice) => {
    console.log("userChoice=", userChoice); // Log user's choice for debugging
    
    // Generate computer's choice
    const computerChoice = genComputerChoice();
    console.log("computerChoice=", computerChoice); // Log computer's choice for debugging

    // Check if it's a tie
    if (userChoice === computerChoice) {
        console.log("It's a tie"); // Log tie message
        msg.innerHTML = `It's a tie`; // Update message to indicate tie
        return; // Exit function as no one wins
    }

    let userWin = true; // Assume user wins initially

    // Determine winner based on game rules
    if (userChoice === 'rock') {
        userWin = computerChoice !== 'paper'; // Rock loses to Paper
    } else if (userChoice === 'paper') {
        userWin = computerChoice !== 'scissors'; // Paper loses to Scissors
    } else if (userChoice === 'scissors') {
        userWin = computerChoice !== 'rock'; // Scissors loses to Rock
    }
    
    // Display winner and update scores
    showWinner(userWin, computerChoice, userChoice);
}

// Add event listeners to each choice button
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id'); // Get the choice (rock, paper, or scissors)
        playGame(userChoice); // Start game with user's choice
    });
});