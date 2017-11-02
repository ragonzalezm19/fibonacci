# Fibonacci

## Desarrollo

Para este desarrollo se uso tecnologia web (HTML, JS, CSS y PHP por lado del servidor).

## Que se uso

Un listado mas especifico de que se uso

- Pug para escribir en HTML
- Jquery
- Bootstrap 3
- JavaScript
- SASS para escribir en CSS
- NodeJS para usar gulp
- Gulp, para compilar pug -> HTML y SASS -> CSS
- PHP

En pocas palabras, es una simple web app que acepta un numero (validado de que sea un numero), y mediante una solicitud HTTP a un servidor local levantado por XAMPP (en mi caso), retorna la posicion de la secuencia fibonacci para n y para n-1.

## Que se tiene que descargar

1. XAMPP Server para crear el servidor
2. NodeJS, para usar Gulp

## Instalacion

1. Instalar XAMPP. Una vez instalado ir a la carpeta: *xampp/htdocs/* y ahi clonar este repo
2. Instalar NodeJS. Una vez instalado instalar globalmente gulp, corriendo el siguiete comando: 
	```
	npm install --global gulp
	```
3. Luego situarse en la carpeta del proyecto, abrimos el terminal y corremos los siguientes comandos:
	```
	npm install
	npm run deploy
	```
4. Levantar el servicio de Apache con XAMPP Server
5. Abrir el navegador e ingresar la siguiete url: *localhost/fibonacci/dist/*
6. Fin