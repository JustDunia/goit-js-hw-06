const body = document.querySelector('body')
const colorSymbol = document.querySelector('.color')
const changeColorBtn = document.querySelector('.change-color')

colorSymbol.textContent = '#ffffff'

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

function changeColor() {
	const newColor = getRandomHexColor()
	body.style.backgroundColor = newColor
	colorSymbol.textContent = newColor
}

changeColorBtn.addEventListener('click', changeColor)
