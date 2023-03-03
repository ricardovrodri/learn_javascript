/* Comienza hablando sobre los servicios de API REST. Sobre el funcionamiento de HTTP y la comunicación con el servidor. Un poco 
sobre los metadatos y los datos de las request y las respuestas del servidor.

El paradigma REST, se basa en agrupar en recursos, un concepto, una entidad, una clase. Algo que tiene un sentido conceptual dentro del 
proyecto. Para gestionar estos recursos se utilizan las directivas CRUD: Create, Return, Update, Delete. Cada lenguaje tendrá algunos 
nombres para cada directiva, por ejemplo en SQL se tenían insert, select, update, delete. En cambio Rest propone el uso de Post, Get, Put
y Delete

A continuación hablamos sobre las urls, organizando los recursos del API REST todos dentro de la misma direccion y separados del resto
para no confundir un recurso de tipo html,o una imagen. Para cada recurso es ideal tener dos direcciones, una primera en plural para
la lista con todos los recursos de ese tipo y después un nombre indentificador para cada recurso concreto.

Se presenta la tabla azul donde se tratan las formas habituales de gestionar los recursos.

Formato de datos, serialización y deserializacion, convertir objetos en cadenas y el camino contrario.
Habla sobre YAML

Relaciones sobre recursos (datos complejos) */