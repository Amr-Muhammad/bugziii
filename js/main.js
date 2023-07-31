let userInput = document.querySelector("#userInput")
let displayEl = document.getElementById("displayEl")

document.querySelector("#firstBugziii").addEventListener("click", function () {
    firstBugziii()
})
document.querySelector("#secondBugziii").addEventListener("click", function () {
    secondBugziii()
})

let firstBugziii = () => {

    let sum = ""
    let arr = userInput.value.split(" ")
    arr.forEach(el => {
        sum = sum + el.charAt(0).toUpperCase() + "."
    });
    sum = sum.slice(0, sum.length - 1)
    console.log(sum);
    displayEl.innerHTML = sum
}

function secondBugziii() {

    let array = userInput.value.split(" ")
    let wordsCounter = array.length
    let firstLetterArray = []
    array.forEach(function (el) {
        array.push(el.slice(0, 1).toUpperCase())
    })
    firstLetterArray = array.splice(wordsCounter, array.length)
    let finalArray = firstLetterArray.join(".")
    displayEl.innerHTML = finalArray
}

