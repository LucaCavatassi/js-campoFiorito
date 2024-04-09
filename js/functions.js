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
    // console.log(clickedNumNum);
    
    if (bombArray.includes(clickedNumNum)) {
        clickedNumElem.style.backgroundColor = "red"
        alert("BOOOM! Hai perso!")
        // PAGE RELOAD
        setTimeout(function(){
            location.reload();
        }, 1000);

    } else if (!(numArray.includes(clickedNumNum))) {
        clickedNumElem.style.backgroundColor = "limegreen"
        console.log("Continua!");
        numArray.push(clickedNumNum)
    } else if (numArray.includes(clickedNumNum)){
        alert ("Hai già cliccato questo numero!")
    }

    if (numArray.length === 90) {
        alert("Hai vinto!")
    }
    console.log(numArray);
}


