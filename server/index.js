"use strict"

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const api = require("./api/v1")

app.use('/api', api)
app.use('/api/v1', api)

app.get('/', (req, res) => {
    res.send(`<p>Bienvenido, sistema de avisos, donde los usuarios
				podrán publicar su contenido en un muro público, para ver el contenido => </p>
				<ul>
					<li>"/tweets" en => lista todos</li>
					<li>"/tweets/{un numero identificador del contendo}" => Busca uno en especfico</li>
				</ul>
			`)
})

app.use( (req, res, next) => { 
    res.status(404)
    res.json({
        message: "Not found"
    })
})

app.use( (err, req, res, next) => { 
    res.status(500)
    res.json({
        message: err.message
    })
})

module.exports = app
