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

// BOMBE
const bombArray = []

for (let i = 0; i < 10; i++){
    const rndNum = Math.floor(Math.random() * 101);
    if (bombArray[i] !== rndNum){
        bombArray.push(rndNum)
    }
}
console.log(bombArray);

