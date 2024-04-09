const startBtn = document.getElementById("start-btn");
// console.log(startBtn);
// START GAME
startBtn.addEventListener ("click", function (){
    const gridCont = document.querySelector(".grid-container");

    for (let i = 1; i <= 100; i++){
        const newCell = createCell(i);
        newCell.addEventListener("click", clickCallback)
        gridCont.append(newCell);
    }
})

// BOMBS
const bombArray = []
while (bombArray.length < 10){
    const rndNum = Math.floor(Math.random() * 100) + 1;
    if (!(bombArray.includes(rndNum))){
        bombArray.push(rndNum)
    }
}
console.log(bombArray);

// CLICKED NUMBERS
const numArray = []
// console.log(numArray);
