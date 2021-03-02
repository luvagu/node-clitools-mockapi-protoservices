'use strict'

module.exports = async function (fastify, opts) {
	fastify.get('/:category', { websocket: true }, async ({ socket }, request) => {
        socket.send(JSON.stringify({ id: 'A1', total: 7 }))
    })
}