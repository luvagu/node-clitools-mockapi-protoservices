'use strict'

const { promisify } = require('util')
const fp = require('fastify-plugin')
const timeout = promisify(setTimeout)

const orders = {
	A1: { total: 3 },
	A2: { total: 7 },
	B1: { total: 101 },
}

async function* realtimeOrdersSimulator() {
	const ids = Object.keys(orders)

	while (true) {
		const delta = Math.floor(Math.random() * 7) + 1
		const id = ids[Math.floor(Math.random()) * ids.length]
		orders[id].total += delta
		const { total } = orders[id]
		yield JSON.stringify({ id, total })
		await timeout(1500)
	}
}

const catToPrefix = {
	electronics: 'A',
	confectionery: 'B',
}

const calculateID = (idPrefix, data) => {
	const sorted = [...new Set(data.map(({ id }) => id))]
	const next = Number(sorted.pop().slice(1)) + 1
	return `${idPrefix}${next}`
}

module.exports = fp(async function (fastify, opts) {
	fastify.decorateRequest('mockDataInsert', function insert(category, data) {
		const request = this
		const idPrefix = catToPrefix[category]
		const id = calculateID(idPrefix, data)
		data.push({ id, ...request.body })
	})
})
