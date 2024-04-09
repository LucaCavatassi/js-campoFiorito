function createCell (num) {
    const newElem = document.createElement("div")
    newElem.classList.add("box")
    newElem.innerText = num
    // console.log(newElem);
    return newElem
}

function clickCallback () {
    const clickedNumElem = this
    const clickedNumNum = parseInt(this.innerHTML)
    console.log(clickedNumNum, clickedNumElem);

    if (bombArray.includes(clickedNumNum)) {
        clickedNumElem.style.backgroundColor = "red"
        console.warn("HAI PERSO! BOOOOOOM!");
    }else {
        clickedNumElem.style.backgroundColor = "limegreen"
        console.warn("CONTINUA");
    }
}