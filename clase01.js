/* Introduccion a Javascript. 

Compilados vs Interpretados:

Se comienza la clase hablando sobre la diferencia entre los lenguajes compilados y los interpretados, los compilados requieren que las
instrucciones se pasen a lenguaje ensamblador todos antes de ejecutar ninguna instruccion, los interpretados nos dan mas libertad al poder 
ejecutar comando a comando la  traduccion a ensamblador de manera que podemos ejecutar parte del codigo aunque otras partes de este 
estén erroneas. Sin embargo, a la vez son mas propensos a error por el mismo motivo, al ser menos fijos las cosas a veces funcionaran 
con errores dentro o con comportamientos no deseados. Esto es un gran arma y a la vez una gran responsabilidad para el programador, al tener
que ser responsable con cada linea que escriba para no ser vago o poco conciso y que pueda llevar a errores en produccion.
Cada tipo de lenguaje evidentemente tiene sus ventajas y sus inconvenientes, javascript por ejemplo tiene la fama de que depende de en que contexto
y escrito por que persona es posible que se ejecute haciendo cosas absurdas y la gente le eche la culpa al lenguaje cuando el problema es
el sentido de su propio codigo.

Un poco de historia: 

La primera version de Javascript fue escrita en dos semanas, lo que hay que escribir en este caso es el conjunto de instrucciones que se 
van a permitir al programador y su traducción a código entendido por el procesador de la computadora o dispositivo que lo vaya a ejecutar
en este caso los navegadores traen de forma nativa un conjunto de instrucciones que ellos pueden traducir como programas que son directamente al 
procesador y devolver los outputs de este lenguaje de alto nivel. Tiempo después fue comprada y ampliada por una empresa llamada ECMA.
De hecho técnicamente su nombre debería ser ECMAScript y no Javascript.  Fue un lenguaje que durante esta primera fase solo tenia como utilidad
principal algunas interacciones dentro de las paginas web como validacion de formularios o generacion de efectos especiales 
relativamente de juguete, hasta que en 2009 Google inicio el proyecto Chromium, y dentro de este proyecto, creo un nuevo motor de javascript 
llamada el V8, que es el que se usa aun hoy en dia en casi todos los navegadores modernos. Lo interesante es que se creo como proceso independiente
al navegador. Esto permitio que se creara un ano mas tarde el proyecto NodeJs que es Javascript que se puede ejecutar sin necesidad de un 
navegador. Que hoy en dia es una de las tecnologias más punteras de servidor.

Cosas que he aprendido repasando: Un IDE (entorno de desarrollo integrado), es una herramienta de edición de ficheros que incluye herramientas 
para facilitar a los programadores el crear ficheros y archivos orientados a ser scripts de código en algun lenguaje de programación, incluyen
por ejemplo la capacidad de comunicarse directamente con el procesador con terminales, la capacidad de ejecutar el código y recibir el output
en el mismo IDE, y aparte la capacidad de escribir código de forma más comoda, corregir errores detendiendo el script en determinados sitios,
acceder directamente a la esctructura de ficheros, etc....

En cambio a más bajo nivel de especialización, nos encontramos con los entornos de ejecución, como podría ser node.js, que es basicamente un
traductor de código con un conjunto de herramientas y líbrerias que apoyan al motor V8 a la hora de construir un codigo Javascript, por 
ejemplo contamos con gestores de librerias que nos permiten instalar y usar paquetes programados por otras personas, funcionalidades de red
de eventos, etc... De una forma quizás más tecnica un entorno de ejecución es como su nombre indica un conjunto de herramientas cuya finalidad
es que el codigo que sea se ejecute sin problemas en una maquina, no es por tanto su finalidad el ayudar a los desarroladores sino dotar
a una maquina de la capacidad de ejecutar el codigo que ya se ha implementado, por eso aporta funcionalidades como la gestion de excepciones
o el manejo de las librerias necesarias. Eso es precisamente node.js, la posibilidad de que código javascript se ejecute en un ordenador que por 
ejemplo no tiene un navegador (que ya es un entorno de ejecucion para javascript) o porque se quiere ejecutar en un servidor con una base de datos
como otros lenguajes de programacion que tienen esa capacidad.

Aun mas por debajo nos encontramos a los propios motores de codigos, digamos que formados solo por las terminales y el motor capaz de traducir
el lenguaje a lenguaje entendido por el procesador, depende del lenguaje este motor sera mas o menos eficiente, necesitara compilar el codigo
todo de golpe o podra hacerlo linea a linea. Si aqui queremos usar una libreria tendremos que descargarnos todos los scripts que la formen, 
definir las funciones que definan en nuestro espacio y entonces usarla. Esas funcionalidades son las que mejora los entornos de ejecucion como 
node.js. Al fin y a la postre este elemento es el centro de la ejecucion de una aplicacion escrita en cualquier lenguaje, pero cada vez que 
se obtuviera una excepcion, hubiera que usar una libreria o se quisiera acceder al hardware habria que hacer muchos mas pasos.


*/

/* Obligatorio primer programa: Hola mundo. Podemos observar la existencia de un objeto llamado console que aglomera las funcionalidades
de la console, entre ellas la funcionalidad de escribir algo por consola, en la funcion .log()*/

console.log('Hello World');

/* Definicion de variables, let y var: la diferencia es la siguiente, var declara la variable con espacio de funcion, es decir, dentro
de toda la funcion en que se define dicha variable, con var tendremos accesible nuestra variable. Además podremos modificar la variable
volviendo a declararla con el mismo nombre haciendo por ejemplo:*/

var a = 1; // Primera declaracion de a

console.log(a); // Aquí vale 1

var a = 2; // Segunda redeclaracion de a

console.log(a); // Aqui vale 2

/* Como se puede comprobar nos ha permitido definir dos veces la misma variable y ha modificado el valor, esto en cambio no podemos hacerlo
con let. let se usa para definir variables de ambito de bloque, es decir dentro de un if, un for, etc... dentro de ese bloque la variable no 
puede ser redefinida, y fuera del bloque no existe, de esta forma obtenemos varias ventajas para situaciones concretas, entre ellas la seguridad
que ofrece de no declarar una variable que ya estaba declarada por error y borrar el dato que necesitabamos, asi como poder reutilizar el mismo
nombre en varios bloques distintos sin miedo a sobreescribir o usar un dato incorrecto. */

let b = 1; // Aquí vale 1

console.log(b);


// let b = 2; Aquí intentamos cambiarla a 2, y si lo descomentamos observamos que nos da un error, solo con el hecho de intentarlo

/* En este sentido de la declaracion de variables debemos notar que javascript nos permite sin problemas no declarar formalmente una variable
sino que usarla directamente sin usar var ni let, esto es muy poco recomendable desde el punto de vista de la depuracion y la legibilidad
del codigo porque impide saber si una variable ha sido usada antes o se acaba de crear para depurar de donde puede provenir ese error.
Un poco en la misma linea se puede hablar de la tipacion de javascript, javascript es un lenguaje debilmente tipado lo que quiere decir que
una variable no se le da un tipo concreto del que no se puede cmabiar sino que dinamicamente conforme cambiamos su valor, va cambiando su tipo.
Esto de igual manera que notabamos antes es una herramienta con mucho poder pero que conlleva tener que tener cuidado con reutilizar una y otra
vez la misma variable generica cambiandole el tipo a conveniencia, por ejemplo en este mismo script se ha creado una variable de nombre a
que pocos miles de lineas de codigo más abajo es imposible saber que tipo era y que funcion cumplia, por eso es importante notar bien y ser
consecuente con lo que se hace, si se necesita cambiar el tipo de una variable esta bien, porque es una funcionalidad, pero dar saltos de tipo
sin cabeza dificulta la depuracion y la legibilidad.

Como moraleja de todo esto se puede entender que el hecho de que el lenguaje sea debilmente tipado tiene que ser un feature de más, no una forma
de hundir toda la legibilidad y el sentido, y que el precio de este feature es que el programador es el que tiene que estar atento al tipado
de las variables, porque errores minimos como intentar sumar un numero que no se ha pasado a formato numero sino que en realidad es una 
cadena porque viene de un input, puede ser imposible de depurar y encima nos acaba dando errores absurdos*/

var my_integer = 1;

var user_input = '1'; // Al usuario se le pide un numero y este nos devuelve una cadena con el valor '1'

my_integer = my_integer + user_input; // Aqui podemos pensar que estamos sumando 1 + 1, pero por 'culpa' del tipado dinamico en realidad obtenemos
// 11, que es el resultado de concatenar las cadenas '1' + '1'

console.log(my_integer); // Como se puede observar aqui

//Para hacer este codigo y cualquier codigo mas robusto existen buenas praxis como asegurarse de que los datos estan en los tipos que se requiere

my_integer = 1; //Restauramos el valor para ver la opcion correcta

my_integer = my_integer + parseInt(user_input);

console.log(my_integer); //Ahora sí, toma el valor 2

/* Vease que en realidad la linea var user_input = '1'; en realidad no existiría así, que nos permite ver que en realidad estamos metiendo una cadena
sino que podria venir de cualquier parte del codigo y no saber nosotros en ningun momento su valor real, por eso hay que tener especial cuidado*/

/* Podemos seguir tratando este tema del tipado con la existencia de la doble igualdad, este concepto como en casi todos los lenguajes nos permite
hacer una comparacion entre dos valores, pero la peculiaridad de javascript es que al ser debilmente tipado, implementa una igualdad de nivel bajo
que consiste en comparar solo si los valores (sin tipo asignado en principio) son iguales o no, esto permite que la comprobacion 1 == '1'
sea verdadera cuando realmente no son del mismo tipo. Si queremos comparar con cuidado de que los tipos sean los mismos tendriamos que usar 
=== que compara también los tipos*/

if('1' == true){
    console.log('Guau');
}

/*Como se puede comprobar '1' es igual que true, esto puede ser util cuando queremos ahorrar algo de codigo y escribir 1 en vez de true en una 
comprobacion de un boolenano, pero a todas luces puede ser un quebradero de cabeza para el que tenga que depurar el codigo*/

// Una manera de hacer bien la comprobacion sería:

if('1' === true){
    console.log('Esto sí que guau');
}


/* El uso de comillas simples y comillas dobles es completamente indistinto desde el punto de vista técnico, la unica utiidad de la dualidad
es poder escribir en una cadena comillas simples y comillas dobles, usando el contrario*/

var my_dificult_string = 'En este lado de la cadena quiero usar comillas dobles "Asi".' + " En cambio en este lado me gustaria usar simples 'asi'";
console.log(my_dificult_string);

/* Pero hay que ser consistente con el uso de las comillas a ser posible. Una comilla que sí tiene diferencia tecnica y que es muy util es 
la comilla inversa ` `que nos permite introducir variables dentro del string de una manera mucho más comoda que con el ' ' + a + ' '. Para
ello usamos el signo del dolar para introducir la cadena que vamos a añadir ${}*/

var id = 1;

var old_string = 'Mi identificador es ' + id + ' pero no quiero usarlo asi';

var modern_string = `Mi identificador es ${id} y quiero usarlo asi`;

console.log(old_string);

console.log(modern_string);

/* Introducimos las funciones, debido al tipado dinamico deberiamos comprobar lo primero los tipos de los parametros para que no se den errores
indeseados. Las funciones se pueden definir en un script sin ningun tipo de objeto asociado tal que asi*/

function log(msg){
    console.log(msg);

    console.log(this.name); // No hacer caso a esta linea hasta que se siga leyendo y se entienda su proposito
}

/*  Y tambien podemos crearla solo para ser usada por un tipo de objeto y en ese caso se conoce como metodo. Como no vamos a crear un objeto aun
veamos una capacidad interesante del tipado dinamico de javascript con la que tambien hay que tener cuidado. Esto es la capacidad que nos da
javascript de definir un objeto también de forma dinámica, es decir, crear un objeto que en principio no tenga atributos ni metodos y añadirlos
de manera dinamica. El operador new es el que nos permite crear una instancia de cualquier objeto en este lenguaje orientado a objetos */ 

var empty_object = new Object()

// Ahora por ejemplo de manera dinamica le asignamos un nombre a este objeto (le acabamos de anadir un atributo name en tiempo de ejecucion)

empty_object.name = "Objeto_vacio";

// Y tambien de forma dinamica (en linea de codigo, despues de su declaracion, le añadimos al objeto un nuevo metodo l)

empty_object.l = log;

/* Es importante darse cuenta de que no estamos cambiando la definicion de la instancia empty_object, si no que estamos redefiniendo la propia
 naturaleza del objeto en tiempo de ejecucion, este es un gran poder del tipado dinamico pero de nuevo hay que tener gran cuidado con ello.
de hecho podemos regresar a la definicion de la funcion log (hecha mucho antes incluso de la existencia del objeto creado) y añadirle una linea
que ahora si podemos mirarla y que estaba ahí y Javascript no se queja, antes incluso de saber que ibamos a tener un objeto con el atributo name.*/

empty_object.l('Log del objeto:'); 

/* Como podemos ver la funcion definida antes que el objeto recibe un parametro que no sabe que va a existir y cuando se le pasa
de verdad el objeto lo aplica sin problema de forma dinamica.

Hay en Javascript un monton de objetos definidos de antemano, estan Map (diccionarios), Arrays (listas) */

var first_array = new Array();

first_array = [0,1,2,3,4];

first_array.push(5);

log(first_array) /* Aqui podemos ver otra potencia del tipado dinamico, el parametro msg como su nombre indica esta pensado para ser un mensaje
una cadena de texto, pero como en javascript no tenemos tipado estático, podemos llegado el caso pasarle cualquier otra cosa que se pueda imprimir
por pantalla.

En concreto este objeto de tipo array podemos recorrerlo de varias formas: Los tres tipos de bucles for que tenemos en javascript son:
    el bucle for indexado: el clasico for con indice para todos aquellos objetos que se puedan acceder mediante indices, es el original y su uso
    es cada vez menor.
    
    el bucle for extendido o bucle for... of : el bucle for... of esta hecho para recorrer objetos ocn una propiedad de iterabilidad, es decir
    un concepto de previo y siguiente entre sus elementos, como un set, un array, un map, etc..., nos permite acceder a cada elemento del iterable
    igual que lo haria un indexado sobre una lista, pero con la ventaja de no tener un indice
    
    el bucle for para atributos (o en su nomenclatura moderna propiedades) o bucle for ... in: este bucle nos permite recorrer los distintos
    atributos de un objeto*/
    
    // El bucle for indexado:

for(let i=1; i < 5; i++){
    let string = (' '.repeat(5-i)) + (' * '.repeat(i)) + (' '.repeat(5-i));
    console.log(string);
}

    // El bucle for...of:

for(item of first_array){

    console.log(item);

}

    // El bucle for...in:

for(prop in empty_object){

    console.log(`${prop} : ${empty_object[prop]}`);

}

/* En javascript como en python y en java los iteradores no solo se pueden usar en bucle extendido sino que tenemos de manera nativa en algunos
objetos de este tipo iterador algunos metodos que nos permiten iterar el objeto sin necesidad de crear un bucle for, estos metodos son muy
recomendables, por que te permiten linealizar el codigo, es decir convertir todo un bucle de varias lineas en una sola, con la posibilidad de 
comentar con detalle esa linea y hacer un codigo mas legible. Realmente cuando hablamos de un objeto iterador nos referimos a cualquier objeto
que implemente la interfaz IteratorPrototype, que segun las implementaciones modernas solo requiere de un metodo next(), 
que devuelva un nuevo objeto con dos atributos, value con el valor del proximo elemento y un booleano done para indicar si es el último.
Con esta sencilla interfaz cada objeto concreto, puede usar el método next para recibir el siguiente elemento del iterador y
con esta capacidad, puede definir otros muchos metodos propios con funcionalidades distintas y explotando esta capacidad de iterar, para ser más
eficientes: ejemplos de estos son los metodos forEach o reduce de los arrays. Por lo que ni Iterator ni IteratorPrototype son en realidad
objetos propiamente dichos: IteratorPrototype es una interfaz que obliga a otros objetos a tener métodos next(), pero aunque un objeto tenga
un metodo next() no se considerara un iterador valido a efectos del bucle for...of hasta que no haya usado el método Symbol.iterator para generar
un método de verdad del tipo @@iterador, esto quiere decir que da igual si yo creo un iterador creando un metodo next, no podré pasarlo a un 
bucle for..of hasta que no haya implementado ese método symbol.iterator que se encarga de que nadie sobreescriba por accidente ningun metodo de
estas clases por error, realmente se pueden sobreescribir pero tienes que hacerlo adrede con una referencia directa a dicho simbolo.*/

var numbers = [0,1,2,3,4];

numbers.forEach(console.log);

/* Aqui podemos ver como hemos usado una forma de programar que se llama callback, que pasa una funcion como parametro de otra, de esta 
manera se introduce el concepto de programación asincrona*/ 




