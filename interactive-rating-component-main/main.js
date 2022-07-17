let btns = document.querySelectorAll('.btn-container button')
let card2 = document.querySelector('card-2')
let card = document.querySelector('card')
let span = document.querySelector('span')

Array.from(btns).forEach(btn => {
	btn.addEventListener('click' , e => {
		const rating = e.target.textContent
		span.textContent = rating
		Card-2.classList.remove('hide')
		Card.classList.add('hide')
	})
})