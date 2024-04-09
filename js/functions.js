function createCell (num) {
    const newElem = document.createElement("div")
    newElem.classList.add("box")
    newElem.innerText = num
    console.log(newElem);
    return newElem
}

function clickCallback () {
    const clickedNumElem = this
    const clickedNumNum = parseInt(this.innerHTML)
    console.log(clickedNumNum, clickedNumElem);
    clickedNumElem.style.backgroundColor = "limegreen"
}