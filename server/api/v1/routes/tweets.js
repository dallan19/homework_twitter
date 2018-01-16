"use strict";

const router = require("express").Router();
let moment = require("moment")
let counter=1;
var list = new ListAviso();


/*
 * /api/tweets/     GET    - READ ALL
 * /api/tweets/     POST   - CREATE
 * /api/tweets/:id  GET    - READ ONE
 * /api/tweets/:id  PUT    - UPDATE
 * /api/tweets/:id  DELETE - DELETE
 */

 

router.route("/")
    .get((req, res, next) => {
    	if(list.list==undefined || list.list==null || !list.list){
    		res.json({message : "No hay registros. "})
    		return;
    	}	
    	
    	res.json(list.list)
    	
    	
    })
    .post((req, res, next) => {


    	if(req.body.content==undefined || req.body.content==null || !req.body.content){
    		res.json({message : "El parametro content no ha sido enviado. "})
    		return;
    	}else if (!req.body.content.length > 280){
    		res.json({message : "El contenido no puede exceder los  280 caracteres"})
    		return;
    	}

    	if(req.body.author==undefined || req.body.author==null || !req.body.author){
    		res.json({message : "El parametro author no ha sido enviado. "})
    		return;
    	}else if (!req.body.author.length > 32){
    		res.json({message : "El autor no puede exceder los  32 caracteres"})
    		return;
    	}

    	if(req.body.locate==undefined || req.body.locate==null || !req.body.locate){
    		res.json({message : "El parametro locate no ha sido enviado. "})
    		return;
    	}else if (!req.body.locate.length > 64){
    		res.json({message : "La ubicación no puede exceder los  64 caracteres"})
    		return;
    	}


    	list.add(req.body.content, req.body.author, req.body.locate)
	    res.json(list.getLast()) 	
    });

router.route("/:id")
    .get((req, res, next) => {
    	res.json(list.get(req.params.id))
    })
    .put((req, res, next) => {


    	if(req.body.content==undefined || req.body.content==null || !req.body.content){
    		res.json({message : "El parametro content no ha sido enviado. "})
    		return;
    	}else if (!req.body.content.length > 280){
    		res.json({message : "El contenido no puede exceder los  280 caracteres"})
    		return;
    	}

    	if(req.body.author==undefined || req.body.author==null || !req.body.author){
    		res.json({message : "El parametro author no ha sido enviado. "})
    		return;
    	}else if (!req.body.author.length > 32){
    		res.json({message : "El autor no puede exceder los  32 caracteres"})
    		return;
    	}

    	if(req.body.locate==undefined || req.body.locate==null || !req.body.locate){
    		res.json({message : "El parametro autor no ha sido enviado. "})
    		return;
    	}else if (!req.body.locate.length > 64){
    		res.json({message : "La ubicación no puede exceder los  64 caracteres"})
    		return;
    	}


    	var item = list.get(req.params.id)
    	item.content = req.body.content
		item.author = req.body.author
		item.locate = req.body.locate
		item.update_date =  moment().format()
		res.json({ message: "Registro actualizado"}) 

    })
    .delete((req, res, next) => {
    	list.remove(req.params.id)
    	res.json({ message: "Registro eliminado"}) 
    });

module.exports = router;

/*-------clases utilizadas para ordernar el codigo ----------*/

function Aviso (id,content, author, locate){
	this.id= id
	this.content = content
	this.author = author
	this.locate = locate
	this.create_date = moment().format()
	this.update_date =  moment().format()
}

function ListAviso (){
	this.list= []
	this.add= (content, author, locate) =>{
		this.list.push (new Aviso (counter, content, author, locate))
		counter= counter+1
	} 

	this.getLast= () => {
		if(this.list)
			return this.list[this.list.length-1]

		return {}
	}

	this.remove = (id) => {
		for (var i = this.list.length - 1; i >= 0; i--) {
			if(this.list[i].id==id){
				delete this.list[i];
				break;
			}
		}
	}

	this.get = (id) => {
		for (var i = this.list.length - 1; i >= 0; i--) 
			if(this.list[i].id==id)
				return this.list[i];
			
		return {}
	}
}