const API = 'http://localhost:3000'

const selectEl = (selector) => document.querySelector(selector)
const createEl = (element) => document.createElement(element)

const populateProducts = async (category) => {
	try {
		const products = selectEl('#products')
		products.innerHTML = ''

		const res = await fetch(`${API}/${category}`)
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
category.addEventListener('input', async ({ target }) => await populateProducts(target.value))

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
