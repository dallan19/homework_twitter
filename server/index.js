"use strict"

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.db.url);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const api = require("./api/v1")

app.use('/', api)
app.use('/api', api)
app.use('/api/v1', api)

app.get('/', (req, res) => {
    res.send(`<p>Bienvenido, sistema de avisos, donde los usuarios
				podrán publicar su contenido en un muro público, para ver el contenido => </p>
				<p>
				   para acceder a los recursos, lo puede hacer antecediendo =>
				   <ul>
				    <li>"/"</li>
				    <li>"/api"</li>
				    <li>"/api/v1"</li>
				   </ul>
				   Los recursos son los siguientes:
				</p>
				<ul>
					<li>"/tweets"</li>
					<li>"/users/"</li>
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
