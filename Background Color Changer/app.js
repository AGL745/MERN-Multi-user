// let colors = ['red', 'white', 'blue', `purple`, `green`, `orange`]

//Change background when button is clicked

let button = document.getElementById('button')


const changeColor = _ => { 

    // let index = parseInt((Math.random() * colors.length) + 1)
    
    let red = parseInt(Math.random() * 255),
        green = parseInt(Math.random() * 255),
        blue = parseInt(Math.random() * 255)

    // console.log(index)

    let canvas = document.getElementById('canvas')
    
    canvas.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    }

button.addEventListener('click', changeColor)
