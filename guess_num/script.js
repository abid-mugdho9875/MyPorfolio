var y = Math.floor(Math.random() * 10 + 1);
console.log(y)

var guess = 1;

document.getElementById("submitguess").onclick = function () {

    var x = document.getElementById("guessField").value;

    if (x == y) {

        if (guess > 3) {
            alert("You Lose")
        } else {
            alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " +
                guess + " YOU WIN ");


        }

    } else if (x > y) {

        if (guess > 3) {
            alert("You Lose")
        } else {
            alert("OOPS SORRY!! TRY A SMALLER NUMBER" + "YOU LEFT: " +
                (3 - guess))

        }
        guess++;
    } else {
        if (guess > 3) {
            alert("You Lose")
        } else {
            alert("OOPS SORRY!! TRY A GREATER NUMBER " + "YOU LEFT: " + (3 - guess));
        }
        guess++;
    }

}