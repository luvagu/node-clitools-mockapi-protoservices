#!/usr/bin/env node

import got from 'got'
import minimist from 'minimist'

const API = 'http://localhost:3000'

const usage = (msg = 'Back office for My App') => {
	console.log(`\n${msg}\n`)
	console.log('     usage: my-cli --amount= --api=')
	console.log('            my-cli -n= --api=\n')
}

const argv = process.argv.slice(2)

const args = minimist(argv, {
	alias: { amount: 'n' },
	string: ['api'],
	default: { api: API },
})

if (args._.length < 1) {
	usage()
	process.exit(1)
}

const [id, amt] = argv

const amount = Number(amt)

if (Number.isInteger(amount) === false) {
	usage('Error: amount must be an integer')
	process.exit(1)
}

try {
	await got.post(`${API}/orders/${id}`, {
		json: { amount },
	})
} catch (err) {
	console.log(err.message)
	process.exit(1)
}
