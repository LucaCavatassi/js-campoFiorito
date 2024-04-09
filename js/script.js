const startBtn = document.getElementById("start-btn");
// console.log(startBtn);

startBtn.addEventListener ("click", function (){
    const gridCont = document.querySelector(".grid-container");

    for (let i = 1; i <= 100; i++){
        const newCell = createCell(i);
        newCell.addEventListener("click", clickCallback)
        gridCont.append(newCell);
    }
})

