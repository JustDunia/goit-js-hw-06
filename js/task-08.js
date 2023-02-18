const form = document.querySelector('.login-form')

function handleSumbmit(e) {
	e.preventDefault()

	const {
		elements: { email, password },
	} = e.target

	if (email.value === '' || password.value === '') {
		alert('Please fill in both inputs!')
	} else {
		const userData = {
			email: email.value,
			password: password.value,
		}
		console.log(userData)
		e.target.reset()
	}
}

form.addEventListener('submit', handleSumbmit)
