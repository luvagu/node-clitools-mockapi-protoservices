const API = 'http://localhost:3000'

const selectEl = selector => document.querySelector(selector)
const createEl = element => document.createElement(element)

const populateProducts = async (category, method = 'GET', payload) => {
	try {
		const products = selectEl('#products')
		products.innerHTML = ''

		const send =
			method === 'GET'
				? {}
				: {
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify(payload),
				  }

		const res = await fetch(`${API}/${category}`, { method, ...send })
		const data = await res.json()

		for (const product of data) {
			const item = createEl('product-item')
			for (const key of ['name', 'rrp', 'info']) {
				const span = createEl('span')
				span.slot = key
				span.textContent = product[key]
				item.appendChild(span)
			}
			products.appendChild(item)
		}
	} catch (error) {
		console.log(error)
	}
}

const category = selectEl('#category')
category.addEventListener('input', async ({ target }) => {
	add.style.display = 'block'
  	await populateProducts(target.value)
})

const add = selectEl('#add')
add.addEventListener('submit', async e => {
	e.preventDefault()
	const { target } = e
	const payload = {
		name: target.name.value,
		rrp: target.rrp.value,
		info: target.info.value,
	}
	await populateProducts(category.value, 'POST', payload)
	target.reset()
})

customElements.define(
	'product-item',
	class Item extends HTMLElement {
		constructor() {
			super()
			const itemTmpl = selectEl('#item').content
			this.attachShadow({ mode: 'open' }).appendChild(itemTmpl.cloneNode(true))
		}
	}
)
