let userInput = document.querySelector("#userInput")
let displayEl = document.getElementById("displayEl")
document.querySelector("#btn").addEventListener("click", function () {
    bugziii()

})

let bugziii = () => {
    let sum = ""
    let arr = userInput.value.split(" ")
    arr.forEach(el => {
        sum = sum + el.charAt(0).toUpperCase() + "."
    });
    sum = sum.slice(0, sum.length - 1)
    console.log(sum);
    displayEl.innerHTML  = sum
}

