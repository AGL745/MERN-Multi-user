
let a, b, result = 0
let operator = ""

function display(val) {
    document.getElementById("textval").value += val
}

function calculate() {
    let input = document.getElementById("textval").value

    let ar = [...input]
    for(let i = 0; i < input.length; i++) {
        if(ar[i] === '+') {
            a = parseInt(input.slice(0,i))
            b = parseInt(input.slice(i+1))
            console.log(a,b, a + b)
            result = a + b
        } else if (ar[i] === '-'){
            a = parseInt(input.slice(0,i))
            b = parseInt(input.slice(i+1))
            console.log(a,b, a - b)
            result = a - b
        } else if (ar[i] === '*'){
            a = parseInt(input.slice(0,i))
            b = parseInt(input.slice(i+1))
            console.log(a,b, a * b)
            result = a * b
        } else if (ar[i] === '/'){
            a = parseInt(input.slice(0,i))
            b = parseInt(input.slice(i+1))
            console.log(a,b, a / b)
            result = a / b
        }
    }

    document.getElementById("textval").value = result

}

function clearInput() {
    document.getElementById('textval').value = ""
}

