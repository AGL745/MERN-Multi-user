console.log("JS Scaffolding Complete")

document.addEventListener("DOMContentLoaded", () => {
   
    const citation = document.getElementById("author")
    
    const quote = document.getElementById("quote")

    const button = document.getElementById("button")

    console.log(citation, quote, button)

    async function updateQuotation() {
        const res = await fetch("https://api.quotable.io/random")

        const data = await res.json()

        if(res.ok) {
            quote.textContent = data.content
            citation.textContent = data.author
        } else {
            quote.textContent = "An error is present"

            console.log(data)
        }
    }

    button.addEventListener('click', updateQuotation)

    updateQuotation()

})

