/* Hoy vamos a hablar sobre los modulos en nodejs:
Que son basicamente gestores de paquetes y de librerias pero en su version para javascript
Un modulo es un conjunto de archivos y carpetas, que tiene un manifiesto donde se define que nombres tiene, cual es su cometido, cual es su 
fichero principal, y que dependencias tienen con otros paquetes

Para inicializar un paquete se utiliza el paquete npm que proviene de node package manager, y cuyo cometido es precisamente el manejo de paquetes
en concreto para inicializar el manifiesto se usa npm init, este te hara una serie de preguntas para poder crear el manifiesto de manera correcta

Cualquiera de estos parametros se puede cambiar despues en el archivo package.json

En concreto uno de los parametros que es bueno anadir manualmente es el de start dentro de script, y que debe ser una instruccion que inicialice
nuestro paquete, en mi caso pondre "node clase01", pero lo normal seria algo como "node index" o "node server".

Podemos mirar el increible entorno de paquetes en la pagina web de npm y buscar distintos paquetes, por ejemplo, vamos a probar lo que estabamos 
buscando para el F03 y buscar un paquete que lea csv, para ello instalamos el modulo csv-read (no conseguí que funcionara bien), por eso en cambio
instale el modulo csvdata, leyendo un poco sobre su utilidad nos damos cuenta de que devuelve una promesa, así que hablemos un poco de promesas.
*/

//Voy a comentar este codigo porque ensucia mucho la clase:

/*const csvdata = require('csvdata');

datos = csvdata.load('./data/datos_csv.csv').then((datos) => {
    console.log(datos);
}).catch((error) => {
    console.log(error);
});*/

/* Las promesas son la principal forma de trabajar con modelo asincrono de javascript, son un objeto con la capacidad de esperar a que una funcion
se ejecute y devuelva un resultado para a continuacion realizar una llamada a un callback, para su definicion, aunque en este caso no se necesita
porque ya la implementa el modulo que hemos descargado, tenemos que definir una funcion que pueda ser propensa a tardar tiempo o fallar, es la
promise que tenemos la esperanza de que se resuelva pero no podemos estar esperando a que lo haga, el código sigue ejecutandose y cuando la 
funcion consiga terminar su ejecucion la funcion salir por uno de dos sitios, como si fueran unos returns pero especificos de esta funcion
para promises, resolve y reject se le pasan a la funcion como parametros. Resolve recibe una variable (una cadena, unos datos) y son los que se 
pueden usar después si la llamada es exitosa, reject en cambio es lo que devolvemos si la llamada falla. 

Es importante notar que no es solo una captura de errores, sino que permite que el codigo se siga ejecutando mientras la promesa se resuelve
cuando esta termina de ejecutarse (en el momento que sea, realmente no tenemos control sobre eso), podemos usar las funciones de las promises
then y catch como en el ejemplo para proseguir la ejecucion despues de la correcta (o erronea) ejecucion de la funcion dentro de promise.

Podemos seguir con el ejemplo tratado en clase con el modulo cool-ascii-faces, después de usar npm install cool-ascii-faces, para tener en este
equipo instalado todo lo necesario para ejecutar el modulo cool-ascii-faces, podremos empezar a usarlo con la orden require*/

var cool = require("cool-ascii-faces");

console.log(cool());

/* Esa funcion saca una cara ascii de las muchas que tiene el modulo. Para conocer más del funcionamiento de un modulo es sencillo irse a la
documentacion.

Otra de las ventaja de la gestion de modulos con npm es que podemos instalar en entorno entero con una sola orden, por ejemplo en este caso 
si ejecutaramos npm install y algun miembro del grupo ha utilizado con anterioridad un modulo que nosotros no hemos usado, ese modulo estará 
escrito en el package y por tanto al hacer npm install se descargaran todos los modulos necesarios.

Recordamos el concepto de url= uniform resource locator, es un concepto creado también por Tim Berners Lee junto con html, es una manera
de localizar recursos uniformes. Esta compuesto por un protocolo (http:// ; ftp:// ; smtp://), un dominio que es una jerarquia de identificadores
para localizar con el protocolo ip, y sin necesidad de saber la IP (basandose en los servidores DNS domain name server), un servidor concreto.
Entiendase aqui servidor como cualquier ente de la red (ordenador por decirlo a lo bruto). Por ultimo contiene una cadena conocida como recurso
y que vamos a estudiar en mas profundidad en otras clases, pero que es basicamente la ubicacion del recurso que queremos dentro del ordenador
servidor. Podemos poner tambien un puerto detras del dominio con (:port)

*/

var express = require('express');

var app = express();
var port = process.env.PORT || 12345;

app.get(`/faces`, (req, res) => {
    res.send(cool());
    console.log(`New Request`);
});

app.listen(port, ()=>{
    console.log(`Server ready in port ${port}`);
});

