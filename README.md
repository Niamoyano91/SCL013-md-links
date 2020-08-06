![mdlogo](/img/logomdlinks2.png)

*  1. MD linkS
*  2. Construcción del proyecto
*  3. ¿Cómo funciona?
*  4. Herramientas
*  5. Dependencias
*  6. Autoras

***

1. MD linkS

MD linkS es una librería diseñada para developers, cuyo objetivo es leer archivos de lenguaje de marcado o [Markdown](https://es.wikipedia.org/wiki/Markdown). Es muy común utilizar o inspeccionar este tipo de archivos, ya que existen en multiples plataformas que manejan texto plano tales como Github entre otros.

2. Construcción del proyecto

Normalmente los archivos de texto plano **“Markdown”** contienen vínculos o links que nos llevan a otras páginas y que pueden incluir información importante a la que podemos acceder. Un ejemplo clásico de este lenguaje es nuestro típico **“README.md”**. Muchas veces estos vínculos están rotos o ya no son válidos, esto perjudica el acceso a la información antes mencionada y provoca una experiencia insastifactoria y demora el trabajo del developer.
Es por lo anterior, que nuestro cliente nos ha encargado generar una solución ante este posible problema. Para esto utilizaremos una importante herramienta para el mundo de la programación.[Node.js](https://nodejs.org/) permite que podamos leer y analizar el formato **“Markdown”**, verificar links y hacer reporte de estadísticas.
De acuerdo a las necesidades de nuestro cliente y nuestros usuarios, construimos el siguiente diagrama de flujo, lo que nos permite dar funcionalidad a nuestra librería.

![diagrama](/img/diagrama.jpg)

3. ¿Cómo funciona?

Para instalar mdLinks, debes abrir tu terminal y escribir el siguiente comando:
npm i charlie-nia-md-links
Luego, para que puedas hacer uso de la librería:
const mdLinks = require('./index')

4. Herramientas

* Node.js
* JavaScript.js

5. Dependencias

* ascii-art: “^2.5.0",
* asciify-image: “^0.1.6”,
* chalk: “^4.1.0",
* cli-color: “^2.0.0”,
* colors: “^1.4.0",
* figlet: “^1.5.0”,
* node-fetch: “^2.6.0"
* jest: “^25.1.0”

## 6. Autoras

* Charlie Days
* Nia Moyano