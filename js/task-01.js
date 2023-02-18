const categories = document.querySelectorAll('.item')
console.log(`Number of categories: ${categories.length}`)

categories.forEach(cat => {
	const name = cat.firstElementChild.textContent
	const elementsCount = cat.lastElementChild.childElementCount
	console.log(`Category: ${name}`)
	console.log(`Elements: ${elementsCount}`)
})
