"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/CricketHub").build();

//Disable all buttons until connection is established
document.getElementById("twentyButton").disabled = true;
document.getElementById("nineButton").disabled = true;

//enable when connection established
connection.start().then(function () {
    document.getElementById("twentyButton").disabled = false;
    document.getElementById("nineButton").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});

//pressing enter swaps player
document.getElementById("enterButton").addEventListener("click", function (event) {
    var user = document.getElementById("activePlayer").value;
    connection.invoke("SendSwap", user).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});

connection.on("ReceiveSwap", function (newUser) {
    document.getElementById("activePlayer").value = newUser;
    if (newUser == "1") {
        document.getElementById("player1NameInput").style.backgroundColor = "Yellow";
        document.getElementById("player2NameInput").style.backgroundColor = "Gray";
    }
    if (newUser == "2") {
        document.getElementById("player1NameInput").style.backgroundColor = "Gray";
        document.getElementById("player2NameInput").style.backgroundColor = "Yellow";
    }
});

//pressing score buttons adds to current player's score
document.getElementById("twentyButton").addEventListener("click", function (event) {
    var user = document.getElementById("activePlayer").value;

    if (user == "1") {
        var currentTotal = document.getElementById("player1Score").value;
        var currentMark = document.getElementById("player1TwentyMark").value;
        var opponentMark = document.getElementById("player2TwentyMark").value;
    }
    else {
        var currentTotal = document.getElementById("player2Score").value;
        var currentMark = document.getElementById("player2TwentyMark").value;
        var opponentMark = document.getElementById("player1TwentyMark").value;
    }

    var pointVal = "20";

    connection.invoke("SendScore", user, currentTotal, currentMark, opponentMark, pointVal).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});

document.getElementById("nineButton").addEventListener("click", function (event) {
    var user = document.getElementById("activePlayer").value;

    if (user == "1") {
        var currentTotal = document.getElementById("player1Score").value;
        var currentMark = document.getElementById("player1NineMark").value;
        var opponentMark = document.getElementById("player2NineMark").value;
    }
    else {
        var currentTotal = document.getElementById("player2Score").value;
        var currentMark = document.getElementById("player2NineMark").value;
        var opponentMark = document.getElementById("player1NineMark").value;
    }

    var pointVal = "19";

    connection.invoke("SendScore", user, currentTotal, currentMark, opponentMark, pointVal).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});

document.getElementById("eightButton").addEventListener("click", function (event) {
    var user = document.getElementById("activePlayer").value;

    if (user == "1") {
        var currentTotal = document.getElementById("player1Score").value;
        var currentMark = document.getElementById("player1EightMark").value;
        var opponentMark = document.getElementById("player2EightMark").value;
    }
    else {
        var currentTotal = document.getElementById("player2Score").value;
        var currentMark = document.getElementById("player2EightMark").value;
        var opponentMark = document.getElementById("player1EightMark").value;
    }

    var pointVal = "18";

    connection.invoke("SendScore", user, currentTotal, currentMark, opponentMark, pointVal).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});

document.getElementById("sevenButton").addEventListener("click", function (event) {
    var user = document.getElementById("activePlayer").value;

    if (user == "1") {
        var currentTotal = document.getElementById("player1Score").value;
        var currentMark = document.getElementById("player1SevenMark").value;
        var opponentMark = document.getElementById("player2SevenMark").value;
    }
    else {
        var currentTotal = document.getElementById("player2Score").value;
        var currentMark = document.getElementById("player2SevenMark").value;
        var opponentMark = document.getElementById("player1SevenMark").value;
    }

    var pointVal = "17";

    connection.invoke("SendScore", user, currentTotal, currentMark, opponentMark, pointVal).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});

document.getElementById("sixButton").addEventListener("click", function (event) {
    var user = document.getElementById("activePlayer").value;

    if (user == "1") {
        var currentTotal = document.getElementById("player1Score").value;
        var currentMark = document.getElementById("player1SixMark").value;
        var opponentMark = document.getElementById("player2SixMark").value;
    }
    else {
        var currentTotal = document.getElementById("player2Score").value;
        var currentMark = document.getElementById("player2SixMark").value;
        var opponentMark = document.getElementById("player1SixMark").value;
    }

    var pointVal = "16";

    connection.invoke("SendScore", user, currentTotal, currentMark, opponentMark, pointVal).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});

document.getElementById("fiveButton").addEventListener("click", function (event) {
    var user = document.getElementById("activePlayer").value;

    if (user == "1") {
        var currentTotal = document.getElementById("player1Score").value;
        var currentMark = document.getElementById("player1FiveMark").value;
        var opponentMark = document.getElementById("player2FiveMark").value;
    }
    else {
        var currentTotal = document.getElementById("player2Score").value;
        var currentMark = document.getElementById("player2FiveMark").value;
        var opponentMark = document.getElementById("player1FiveMark").value;
    }

    var pointVal = "15";

    connection.invoke("SendScore", user, currentTotal, currentMark, opponentMark, pointVal).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});

document.getElementById("bullButton").addEventListener("click", function (event) {
    var user = document.getElementById("activePlayer").value;

    if (user == "1") {
        var currentTotal = document.getElementById("player1Score").value;
        var currentMark = document.getElementById("player1BullMark").value;
        var opponentMark = document.getElementById("player2BullMark").value;
    }
    else {
        var currentTotal = document.getElementById("player2Score").value;
        var currentMark = document.getElementById("player2BullMark").value;
        var opponentMark = document.getElementById("player1BullMark").value;
    }

    var pointVal = "25";

    connection.invoke("SendScore", user, currentTotal, currentMark, opponentMark, pointVal).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});

//update score
connection.on("ReceiveScore", function (user, currentTotal, currentMark, pointVal){
    if (user == "1") {
        document.getElementById("player1Score").value = currentTotal;

        if (pointVal == "20") {
            document.getElementById("player1TwentyMark").value = currentMark;
        }
        if (pointVal == "19") {
            document.getElementById("player1NineMark").value = currentMark;
        }
        if (pointVal == "18") {
            document.getElementById("player1EightMark").value = currentMark;
        }
        if (pointVal == "17") {
            document.getElementById("player1SevenMark").value = currentMark;
        }
        if (pointVal == "16") {
            document.getElementById("player1SixMark").value = currentMark;
        }
        if (pointVal == "15") {
            document.getElementById("player1FiveMark").value = currentMark;
        }
        if (pointVal == "25") {
            document.getElementById("player1BullMark").value = currentMark;
        }
    }

    if (user == "2") {
        document.getElementById("player2Score").value = currentTotal;

        if (pointVal == "20") {
            document.getElementById("player2TwentyMark").value = currentMark;
        }
        if (pointVal == "19") {
            document.getElementById("player2NineMark").value = currentMark;
        }
        if (pointVal == "18") {
            document.getElementById("player2EightMark").value = currentMark;
        }
        if (pointVal == "17") {
            document.getElementById("player2SevenMark").value = currentMark;
        }
        if (pointVal == "16") {
            document.getElementById("player2SixMark").value = currentMark;
        }
        if (pointVal == "15") {
            document.getElementById("player2FiveMark").value = currentMark;
        }
        if (pointVal == "25") {
            document.getElementById("player2BullMark").value = currentMark;
        }

    }
});