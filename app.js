let userScore=document.querySelector("#user-score");
let compScore=document.querySelector("#comp-score");

let choices=document.querySelectorAll(".choice");
const msgContainer=document.querySelector(".msg-container");
const msg=document.querySelector("#msg");
let genCompChoice=()=>
{
    let options=['rock','paper','scissors'];
    let idx=Math.floor(Math.random()*3);
    return options[idx];
}
let displayMsg=(userWin)=>{
    if(userWin)
    {
        msg.innerText='You Win!';
        msg.style.backgroundColor="green";
        userScore.innerText++;
    }
    else
    {
        msg.innerText='You Lose!';
        msg.style.backgroundColor="red";
        compScore.innerText++;
    }
}
let playGame=(userChoice)=>{
    console.log(`User Choice : ${userChoice}`);
    let compChoice=genCompChoice();
    console.log(`Computer Choice : ${compChoice}`);
    
    if(userChoice==compChoice)
    {
        msg.innerHTML="It is a Draw!"
        msg.style.backgroundColor="black";
    }
    else
    {
        let userWin=true;
        if(userChoice=='rock')
        {
            if(compChoice=='paper')
            {
                userWin=false;
            }
        }
        else if(userChoice=='paper')
        {
            if(compChoice=='scissors')
            {
                userWin=false;
            }
        }
        else
        {
            if(compChoice=='rock')
            {
                userWin=false;
            }
        }
        displayMsg(userWin);
    }
}
choices.forEach((choice)=>
{
    // console.log(choice.id)
    choice.addEventListener("click",()=>
    {
        playGame(choice.id);
    })
})