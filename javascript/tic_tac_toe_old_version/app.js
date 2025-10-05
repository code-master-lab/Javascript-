// ====== Selecting all required DOM elements ======
let boxes = document.querySelectorAll(".box"); // All tic-tac-toe cells
let resetBtn = document.querySelector("#reset-btn"); // Reset button
let newGameBtn = document.querySelector("#new-btn"); // New Game button
let msgContainer = document.querySelector(".msg-container"); // Message display container
let msg = document.querySelector("#msg"); // Message text

// ====== Game state variables ======
let turnO = true; // true: O's turn, false: X's turn
let count = 0; // To track number of moves for draw detection // it calulates the count of moves made in the game // it stores the count

// ====== All possible winning patterns (by box indices) ======
const winPatterns = [
  [0, 1, 2], // Top row
  [0, 3, 6], // Left column
  [0, 4, 8], // Diagonal from top-left
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [2, 4, 6], // Diagonal from top-right
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
];

// ====== Function to reset the game state and UI ======
const resetGame = () => {
  turnO = true; // O always starts
  count = 0; // Reset move count
  enableBoxes(); // Enable all boxes and clear their content
  msgContainer.classList.add("hide"); // Hide the message container
};

// ====== Main game logic: handle box clicks ======
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // Set box text based on current turn
    if (turnO) {
      // O's turn
      box.innerText = "O";
      turnO = false; // Next turn is X
    } else {
      // X's turn
      box.innerText = "X";
      turnO = true; // Next turn is O
    }
    box.disabled = true; // Prevent further clicks on same  box
    count++; // Increment count after each and every  move

    // Check for winner after every move
    let isWinner = checkWinner(); // Check if there's a winner if thare is a winner it will return true or false and it store in isWinner variable

    // chack if count is equal to 9 and isWinner countain true or false
    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

// ====== Show draw message and disable all boxes ======
const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

// ====== Disable all boxes (no further moves allowed) ======
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

// ====== Enable all boxes and clear their content ======
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

// ====== Show winner message and disable all boxes ======
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

// ====== Check if any winning pattern is matched ======
const checkWinner = () => {
  for (let pattern of winPatterns) {
    // Loop go through each winning pattern
    let pos1Val = boxes[pattern[0]].innerText; // Gets the text inside the box at the first index of the current pattern
    let pos2Val = boxes[pattern[1]].innerText; // Gets the text inside the box at the second index of the current pattern
    let pos3Val = boxes[pattern[2]].innerText; // Gets the text inside the box at the third index of the current pattern

    // If all three positions are filled and equal, we have a winner
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val); // Show winner and end game
        return true; // Return true if a winner was found and if winner was not found atomatic send false // the result store in iswinner variable
      }
    }
  }
  // No winner found
};

// ====== Attach event listeners to New Game and Reset buttons ======
newGameBtn.addEventListener("click", resetGame); // New Game button resets the game
resetBtn.addEventListener("click", resetGame); // Reset button also resets the game