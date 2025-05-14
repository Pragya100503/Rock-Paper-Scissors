const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");
const movesHistory = document.querySelector("#move-history");

const options = ['rock', 'paper', 'scissors'];

const Contants = {
    win: { 
        Text: "You Win!", 
        color: "green" 
    },
    draw: { 
        Text: "It is a Draw!", 
        color: "black" 
    },
    lose: { 
        Text: "You Lose!", 
        color: "red" 
    },
    result: {
        win: "Win",
        lose: "Lose",
        draw: "Draw"
    },
    playerName: "You",
    computerName: "Computer"
}

// stores what wins over what
const winMap = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
};

const genCompChoice = () => {
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
}

const displayMsg = (userWin) => {
    if (userWin) {
        msg.innerText = Contants.draw.Text
        msg.style.backgroundColor = Contants.draw.color;
        userScore.innerText++;
    }
    else {
        msg.innerText = Contants.lose.Text;
        msg.style.backgroundColor = Contants.lose.color;
        compScore.innerText++;
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    const userWin = winMap[userChoice] === compChoice;

    console.log(`User Choice : ${userChoice} | Computer Choice : ${compChoice}`);

    if (userChoice === compChoice) {
        msg.innerHTML = Contants.draw.Text
        msg.style.backgroundColor = Contants.draw.color;
    } else {
        displayMsg(userWin);
    }

    logMovesHistory(userChoice, compChoice, userWin)
}

choices.forEach((choice) => {
    // console.log(choice.id)
    choice.addEventListener("click", () => {
        playGame(choice.id);
    })
})

const logMovesHistory = (userChoice, compChoice, userWin) => {
    let round = movesHistory.rows.length + 1;
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${round}</td>
        <td>${userChoice}</td>
        <td>${compChoice}</td>
        <td>${userChoice === compChoice ? Contants.result.draw : userWin ? Contants.result.win : Contants.result.lose}</td>
    `;
    movesHistory.prepend(row);
}

const clearGame = () => {
    userScore.innerText = 0;
    compScore.innerText = 0;
    msg.innerText = "";
    msg.style.backgroundColor = Contants.draw.color;
    movesHistory.innerHTML = "Play your move !";
}