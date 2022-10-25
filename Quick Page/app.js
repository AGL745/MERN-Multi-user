
let count = 777
let counter = 1
do {
    console.log(counter)
    counter = counter + 77
} while (counter < 777)

unter = 1
for(; counter <= 7777; counter = counter + 77 ) {
    console.log("I'm proud of you")
}

const button = document.getElementById('button')

console.log(button)
button.addEventListener('click', changeText)

function changeText() {
    document.getElementById('paragraph').innerText = `Best Final Fantasy Game...?`

    document.getElementById('img').src = "https://thelifestream.net/wp-content/uploads/2017/02/Diamond-Weapon-Mobius.jpg"

    
}