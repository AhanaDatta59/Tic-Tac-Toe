let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".rst-btn");
//console.log(resetBtn);

//2 players in the game playerX and player0
let turn0 = true; //this means it is O's turn now

const winPatterns = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,5],
    [2,5,8],
    [2,4,6],
    [3,5,4],
    [6,7,8],
];

//adding events to all the boxes
boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(turn0==true)
        {
            box.innerText="O";
            turn0=false;
            console.log("O")
        }
        else{
            box.innerText="X";
            turn0=true;
            console.log("X")
        }
    })
})