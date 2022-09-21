function myFunction() {
    //console.log("It works")

    const output = document.getElementById('output')

    let value = document.getElementById('input').value

    try {
        if (value == "") throw `No value was inputted.`
        
        if(value >= 7 && value <= 777) {
            output.innerHTML = "Great Job Following Instructions"
        }
        if (isNaN(value)) throw `. ${value} is not a number.`
        
        if (value > 778) throw `. ${value} is greater than 777, too high`

        if (value < 7) throw `. ${value} is less than 7, too low`
    } catch (err) {
        output.innerHTML = `Your value ${value} has caused and error ${err}.`
    }
}