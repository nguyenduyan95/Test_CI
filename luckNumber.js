alert("Welcome to LuckyNumber")
alert("You'll be a billionare for few seconds....")


function luckyNumber() {
    // let suggestNumber = 2;
    let guessNumber = document.getElementById("searchNumber").value
    let numberLucky = Math.floor(Math.random() * 11);

    if (!Number(guessNumber) || guessNumber < 0 || guessNumber > 11) {
        console.log("Moi ban nhập lại số")
    } else {
        if (guessNumber == numberLucky) {
            console.log("Your guess number is: " + guessNumber)
            console.log("LuckyNumber is: " + numberLucky)
            console.log("congratulation")
            alert("Congratulation !!!")
        } else {
            console.log("Your guess number is: " + guessNumber)
            console.log("LuckyNumber is " + numberLucky)
            console.log("Better luck next time")
            alert("Better luck next time :((")
        }
    }
}

luckyNumber()