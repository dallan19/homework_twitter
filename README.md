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
	`id=[integer]`

* POST `/tweets` : Crea un nuevo tweet en memoria.
	* **Data Params:**
	```json
	author=[string]
	content=[string]
	locate=[string]
	```

	* **Example:**
	```json
	{
		"author": "Pedro Fabio",
		"content": "Lavadoras & algo más",
		"locate": "Cienaga"
	}
	 ```

* PUT `/tweets/:id` : Edita el tweet correspondiente al :id enviado como parametro en la url.
	* **Data Params:**
	```json
	author=[string]
	content=[string]
	locate=[string]
	```

	* **Example:**
	```json
	{
		"author": "Pedro Fabio",
		"content": "Lavadoras & algo más",
		"locate": "Cienaga"
	}
	 ```

* DELETE `/tweets/:id` : Elimina el tweet guardado en memoria.
	* **URL Params**
	`id=[integer]`

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
