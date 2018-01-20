# Taller Node y Express

### Prerequisites

```
node js ^8.x.x
```

### Installing

Clonar el repositoio 

```
git clone https://github.com/dallan19/homework_twitter
```

Instalar las dependencias

```
npm install
```

Ejecutar el proyecto

```
npm start
```

### Documentación

* GET `/` : index de la applicación.

* GET `/tweets` : Todos los tweets almacenados en memoria.

* GET `/tweets/:id` : Busca el tweet por su id.
	* **URL Params**
	`id=[String]`

* POST `/tweets` : Crea un nuevo tweet en memoria.
	* **Data Params:**
	```json
	author=[ObjectId]
	content=[string]
	locate=[string]
	```

	* **Example:**
	```json
	{
		"author": "5a63c04bc426131d483c6ce6",
		"content": "Lavadoras & algo más",
		"locate": "Cienaga"
	}
	 ```

* PUT `/tweets/:id` : Edita el tweet correspondiente al :id enviado como parametro en la url.
	* **Data Params:**
	```json
	content=[string]
	locate=[string]
	```

	* **Example:**
	```json
	{
		"content": "Lavadoras & algo más",
		"locate": "Cienaga"
	}
	 ```

* DELETE `/tweets/:id` : Elimina el tweet de manera logica.
	* **URL Params**
	`id=[String]`

Usuarios

* GET `/users` : Todos los usuarios almacenados en memoria.

* GET `/users/:id` : Busca el usuario por su id.
	* **URL Params**
	`id=[String]`

* POST `/users` : Crea un nuevo usuario en memoria.
	* **Data Params:**
	```json
	firstname=[ObjectId]
	lastname=[string]
	email=[string]
	```

	* **Example:**
	```json
	{
	  "firstname":"Dallan",
	  "lastname":"Nuñez",
	  "email":"dallan@gmail.com"
	}
	 ```

* PUT `/users/:id` : Edita el usuario correspondiente al :id enviado como parametro en la url.
	* **Data Params:**
	```json
	firstname=[string]
	lastname=[string]
	email=[string]
	```

	* **Example:**
	```json
	{
	  "firstname":"Dallan",
	  "lastname":"Nuñez",
	  "email":"dallan@gmail.com"
	}
	 ```

* DELETE `/users/:id` : Elimina el usuario de manera logica.
	* **URL Params**
	`id=[String]`

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
