const ingredientList = document.querySelector('#ingredients')

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments']

const ingredientItems = []

ingredients.forEach(el => {
	const ingredientItem = document.createElement('li')
	ingredientItem.textContent = el
	ingredientItem.classList.add('item')
	ingredientItems.push(ingredientItem)
})

ingredientList.append(...ingredientItems)
