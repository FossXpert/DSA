
var a = document.querySelectorAll("h1")
a.forEach(element => {
    console.log(element)
    element.style.color = 'black'
    element.style.backgroundColor = 'teal'

    element.innerText = 'hi man'
});