const minnum = 1;
const maxnum = 100;
const ans = Math.floor(Math.random() * (maxnum - minnum + 1)) + minnum;
let attempt = 0;
let running = true; // Use this to disable the game once won

let output = document.getElementById("output");
let info = document.getElementById("info");
let info1 = document.getElementById("info1");

output.onclick = function() {
    if (!running) return; // Stop the function if the game is already over

    
    let guess = document.getElementById("inputnumber").value;
    guess = Number(guess);

    if (isNaN(guess) || guess === 0) {
        window.alert("Enter a valid input");
    } else if (guess < minnum || guess > maxnum) {
        window.alert(`Please enter a number between ${minnum} and ${maxnum}`);
    } else {
        attempt++;
        if (guess > ans) {
            info1.textContent = `TOO HIGH!! try again`;
        } else if (guess < ans) {
            info1.textContent = `TOO LOW! try again`;
        } else {
            info.textContent = `CORRECT! It took you ${attempt} attempts.`;
            info1.textContent = ""; 
            running = false; // Game ends here
        }
    }
    
    // Optional: Clear the input box for the next guess
    document.getElementById("inputnumber").value = "";
};