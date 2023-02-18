const createBtn = document.querySelector('[data-create]')
const destroyBtn = document.querySelector('[data-destroy]')
const input = document.querySelector('#controls input')
const boxes = document.querySelector('#boxes')

let amount
let size = 30

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

function createBoxes(amount) {
	for (let i = 0; i < amount; i++) {
		const box = document.createElement('div')
		box.style.width = size + 'px'
		box.style.height = size + 'px'
		box.style.backgroundColor = getRandomHexColor()
		boxes.appendChild(box)
		size += 10
	}
}

function destroyBoxes() {
	while (boxes.firstChild) {
		boxes.firstChild.remove()
	}
	size = 30
}

input.addEventListener('change', () => (amount = input.value))

createBtn.addEventListener('click', () => {
	createBoxes(amount)
})

destroyBtn.addEventListener('click', destroyBoxes)
