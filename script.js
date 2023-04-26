
/* Objective
1 Get the user’s choice.
2 Get the computer’s choice.
3 Compare the two choices and determine a winner.
4 Start the program and display the results. */

// 1 Get the users choice
const getUserChoice = userInput => {    // 3.1 The argument is passed to the param.
    userInput = userInput.toLowerCase(); // 3.2 Ensuring that input will be in lowercase.
    if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors' || userInput == 'bomb') {  // 3.3 If user choses any of theese, the choice will be returned to "playGame()".
      return userInput;
    } else {
      return 'Error, please type rock, paper or scissors. '; // 3.4 If user choses something else, or misspells, 'error' will be returned to "playGame()"..
      }
  }
  /* console.log(getUserChoice()); */
  
  // 2 Get the computers choice
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3); {  // 4.1 Generating a random number between 0-2 without decimals (rounded down).
      switch (randomNumber) {                              // 4.2 Using swithch to run through a list of cases between 0-2 and returning corresponding strings depending on the random number that has been generated above.
        case 0:
          return 'rock';
          break;
        case 1:
          return 'paper';
          break;
        case 2:
          return 'scissors';
          break;
      }
    } 
  }
  /* console.log(getComputerChoice()); */
  
  
  // 3 Determine winner
  const determineWinner = (userChoice, computerChoice) => { // 7.1 Inserting arguments to params.
    if (userChoice == 'bomb') {                             // 7.2 A list of if/if else arguments, true statement will be returned to the function-caller (determineWinner(userChoice, computerChoice)).
      return 'You used your bomb to win this round!';
    }  
    
    if (userChoice === computerChoice) {
      return 'It\'s a tie!';
    } 
    
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {               // Nested if-statements.
          return 'Computer won!';
      } else {
          return 'You won!';
      }
    } 
    
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
          return 'The computer won!';
      } else {
          return 'You won!';
      }
    }  
    
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won!';
      } else {
          return 'You won!';
      }
    }
    }
  // console.log(determineWinner('scissors', 'paper'));
  
  // 4 Function for running the game
  const playGame = () => {                                  // 2. Playgame has no parameters.
    let userChoice = getUserChoice('rock');                 // 3. Declaring av variable and set it to invoke "getUserChoice" with rock, paper, scissors or bomb as argument.
    const computerChoice = getComputerChoice();             // 4. Declaring av variable and set it to invoke "getComputerChoice" with no argument.
    console.log(`You threw: ${userChoice}.`)                // 5. Logging "You threw" followed by the users choice. 
    console.log(`The computer threw: ${computerChoice}.`)   // 6. Logging "The computer threw" followed by the computers choice.
    console.log(determineWinner(userChoice, computerChoice)); // 7. Invoking "determineWinner()" with arguments "userChoice and computerChoice". The returned value is then logged.
  }
  
  
  
  playGame();                                               // 1.  Function-call that invokes "playGame()".
