---
sidebar_position: 9
---

# Objetos

Conceptos básicos de los **Objetos**

**Parte 1**
<iframe width="560" height="315" src="https://www.youtube.com/embed/p7GDvLyOknU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

**Parte 2**
<iframe width="560" height="315" src="https://www.youtube.com/embed/0JGFvNRzauY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

## Introducción
Los objetos son un tipo de dato en JavaScript, como lo son number, string, boolean, undefined... Los objetos son en cierta forma diferentes a estos porque permiten agrupar varios datos de forma estructurada.

La idea de los objetos viene del mundo real. En nuestro mundo un objeto tiene una serie de características (propiedades) y puede realizar una serie de acciones (métodos). Si pensamos en algo tan sencillo como un lápiz podremos ver que algunas de sus propiedades podrían ser color de la mina, nivel de afilado, cantidad de mina restante, etc. Por otro lado, sus acciones serían muy reducidas y básicamente se resumiría en una, pintar.

## Objetos Literales
Los objetos son abstracciones inspiradas en el mundo real que permiten estructurar objetos ficticios en JavaScript de forma simple usando grupos de pares de clave/valor. Podemos crear propiedades, que representan las características, y métodos, que representan las acciones que podrán llevar a cabo esos objetos. Cuando hablamos de clave/valor lo podemos interpretar como un diccionario, es decir, tenemos una palabra y un significado, en este caso la palabra sería la clave y por medio de esta puedo acceder al significado (valor).
Usamos objetos en JavaScript para crear estructuras que agrupen datos y a las que se pueda acceder de forma sencilla sin necesidad de comprender la complejidad que albergan.

Pasos para crear un objeto:
- Indicamos el nombre de la variable donde guardamos el objeto, por ejemplo, geekGirl
- El contenido del objeto irá entre llaves { }
- Dentro de las llaves ponemos parejas clave: valor, donde la clave será el nombre de la propiedad 
y el valor puede ser de cualquier tipo de datos (cadena, número, booleano...), por ejemplo, name: 'María'
- Separamos cada pareja clave: valor con una coma

~~~
const geekGirl = {
   "name": 'María',
   "age": 31,
   "is married": false
};
~~~

Todas las claves o propiedades se almacenan como cadenas. Sin embargo, también puedes utilizar números como propiedades. Incluso puedes omitir las comillas para las claves o propiedades de cadena de una sola palabra, como se indica en el siguiente ejemplo:

~~~
const geekGirl = {
   name: 'María',
   age: 31,
   "is married": false,
    6: true
};
~~~

Sin embargo, si tu objeto tiene propiedades que no son cadenas, JavaScript las tipificará automáticamente como cadenas. Como los objetos también son tipos de datos, una propiedad de un objeto podría ser también un objeto. Por ejemplo:

~~~
const geekGirl = {
   name: 'María',
   age: 31,
   "is married": false,
    address: {
             street: 'Colegiata',
             number: 9
    }
};
~~~

## Acceder a las propiedades de un objeto
Para acceder (leer) al valor de una propiedad de un objeto, podemos hacerlo de dos formas:
- Al nombre del objeto (el nombre de la variable) le ponemos detrás un punto `.` y luego el nombre de la propiedad. La notación por puntos es la que se utiliza cuando se conoce de antemano el nombre de la propiedad a la que se intenta acceder.
- Al nombre del objeto (el nombre de la variable) le ponemos detrás unos corchetes `[ ]` y dentro el nombre de la propiedad como una cadena (entre comillas simples o dobles). Si la propiedad del objeto a la que está intentando acceder tiene un espacio en su nombre, tendrá que utilizar la notación de corchetes.


~~~
// Muestra en la consola 'María'
console.log(geekGirl.name);

// Muestra en la consola 'María'
console.log(geekGirl['name']);

// Muestra en la consola 'true'
console.log(geekGirl['is married']);
~~~

Otro uso de la notación de corchetes en los objetos es para acceder a una propiedad que se almacena como el valor de una variable. Esto puede ser muy útil para iterar a través de las propiedades de un objeto o cuando se accede a una tabla de búsqueda.

Este es un ejemplo de uso de una variable para acceder a una propiedad:

~~~
const perros = {
  Lupe: {
   raza: "Jack Rusell Terrier",
   tamano: "Mediano", 
   peso: "12 kg"
   imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5iHljCf96dsRiNkANC-O49L-NvgK53Pce5g&usqp=CAU"
  }, 
  Chispas: {
   raza: "Labrador",
   tamano: "Mediano", 
   peso: "20 kg"
   imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1IQbWwjUGTjOZD2wyFs0hHepVqxWU2RTSkw&usqp=CAU"
  }
};

const miPrimerPerro = "Chispas";
const miSegundoPerro = "Lupe";

const razaPrimerPerro = perros[miPrimerPerro];
const pesoSegundoPerro = perros[miSegundoPerro];

console.log(razaPrimerPerro);
console.log(pesoSegundoPerro);
~~~

Las cadenas Jack Rusell Terrier y 20 kg se mostrarian en la consola. 

Otra forma de utilizar este concepto es cuando el nombre de la propiedad se recoge dinámicamente durante la ejecución del programa

~~~
const cualquier_obj = {
  nombre_propiedad: "Valor propiedad"
};

function prefijoPropiedad(str) {
  const s = "_propiedad";
  return str + s;
}

const cualquier_propiedad = prefijoPropiedad("nombre");
console.log(cualquier_obj[cualquier_propiedad]);
~~~

`cualquier_propiedad` tendría un valor de la cadena 'nombre_propiedad', y la cadena 'Valor propiedad' se mostraría en la consola.
Observa que no usamos comillas alrededor del nombre de la variable cuando la usamos para acceder a la propiedad porque estamos usando el valor de la variable, no el nombre.

## Actualizar las propiedades de un objeto
Después de crear un objeto de JavaScript, puedes actualizar sus propiedades en cualquier momento, igual que actualizarías cualquier otra variable. Puedes utilizar la notación de puntos o corchetes para actualizar. 

Actualicemos el objeto `perros` que vimos en un ejemplo de la [sección anterior](https://github.com/academia-geek/Classroom-Aprendices-Geek-Backend/blob/main/Modulo-2/07-Objetos/README.md#acceder-a-las-propiedades-de-un-objeto), hagamos de cuenta que necesitamos que la propiedad `Lupe` ya no tenga un objeto con más información de ella, su key seguiré siendo `Lupe` y su valor será una corta descripción de este perro. Veamos esto en código JavaScript:

~~~
perros.Lupe = "Es una perra adulta, es mediana, de color blanco, con manchas cafes y es muy traviesa";
console.log(perros.Lupe);
~~~

Cuando se imprima por consola el valor de la propiedad `Lupe` se mostrará su nuevo valor: `Es una perra adulta, es mediana, de color blanco, con manchas cafes y es muy travieza`, en vez del objeto que teniamos anteriormente con raza, tamano, peso e imagen. 
Actualizando este mismo objeto con la notación de corchetes se tendrían los mismos resultados, esto en código se vería así: 

~~~
perros['Lupe'] = "Es una perra adulta, es mediana, de color blanco, con manchas cafes y es muy travieza";
console.log(perros['Lupe']);
~~~
**Nota:** También puedes actualizar una propiedad con un valor que se recoge dinámicamente durante la ejecución del programa por medio de la notación entre corchetes de forma muy parecida a como se mostró en el ejemplo anterior donde accediamos al valor de una propiedad de forma dinámica. 

## Agregar nuevas propiedades a un objeto
Puedes añadir nuevas propiedades a los objetos JavaScript existentes de la misma manera que los modificarías. 

Ahora creemos un objeto de una forma diferente a como lo veniamos realizando, vamos a crear primero un objeto vacío y luego le vamos a ir añadiendo las propiedades en las siguientes instrucciones. 

~~~
const perros = {};

perros.Lupe = {
   raza: "Jack Rusell Terrier",
   tamano: "Mediano", 
   peso: "12 kg"
   imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5iHljCf96dsRiNkANC-O49L-NvgK53Pce5g&usqp=CAU"
}

perros.Chispas = {
   raza: "Labrador",
   tamano: "Mediano", 
   peso: "20 kg"
   imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1IQbWwjUGTjOZD2wyFs0hHepVqxWU2RTSkw&usqp=CAU"
}

perros.Lucas = "Aún no hay información disponible sobre este perrito"

// Muestra en la consola: Aún no hay información disponible sobre este perrito
console.log(perros.Lucas);
~~~

Acabamos de añadirle 3 propiedades nuevas a un objeto vacío. 

## Eliminar propiedades de un objeto
También podemos eliminar las propiedades de los objetos de esta manera:

~~~
delete perros.Lucas
~~~

Ejemplo:

~~~
 const perros = {
   Lupe: "Es una perra adulta, es mediana, de color blanco, con manchas cafes y es muy traviesa", 
   Chispas: "Es una perra adulta, es grande, de color café, con manchas negras y es obediente", 
   Lucas: "Aún no hay información disponible sobre este perrito"
 };
 
 delete perros.Lucas;
~~~
Después de esto, nuestro objeto `perros` se ve de la siguiente forma: 
~~~
 const perros = {
   Lupe: "Es una perra adulta, es mediana, de color blanco, con manchas cafes y es muy traviesa", 
   Chispas: "Es una perra adulta, es grande, de color café, con manchas negras y es obediente"
 }
~~~

## Comprobación de las propiedades de los objetos
A veces es útil comprobar si la propiedad de un objeto dado existe o no. Podemos utilizar el método `.hasOwnProperty(nombrepropiedad)` de los objetos para determinar si ese objeto tiene el nombre de la propiedad dada. `.hasOwnProperty()` devuelve true o false si la propiedad se encuentra o no.

Ejemplo: 
~~~
const miObjeto = {
   tamano: "Grande", 
   color: "Azúl", 
   precio: 2.000
};

miObjeto.hasOwnProperty("tamano");
miObjeto.hasOwnProperty("cantidad");
~~~
La primera `hasOwnProperty` devuelve true, mientras que la segunda devuelve false.

## Crear métodos en un objeto
En los valores de un objeto podemos almacenar cualquier tipo de dato de JS (JavaScript), por ende, también podríamos almacenar el tipo de dato `Function`, es decir, funciones, esto es un tipo de propiedad especial llamada método. 

Ejemplo:
~~~
const perro = {
   nombre: 'Chispas', 
   raza: 'Labrador', 
   ladrar: () => console.log('Guau guau')
}
~~~
Para llamar la función ladrar del objeto perro tenemos que acceder como una propiedad cualquiera y luego agregar paréntesis así:
~~~
// Muestra en consola 'Guau guau'
perro.ladrar(); 
~~~

## Evitar la mutación de objetos
Cuando hablamos de mutación de objetos nos referimos a cambiar los valores de las propiedades de un objeto en ciertas partes de nuestro código, normalmente podemos cambiarle el valor de una propiedad las veces que nosotros queramos. Ahora bien, existe una instrucción que nos limita esta acción para que no podamos cambiar estas propiedades, la instrucción es `Object.freeze(myObj)`. 

Ejemplo: 

~~~
const carro = {
   marca: 'TOYOTA',
   modelo: '2021',
   precio: '34.000.000',
   km: 0
}

Object.freeze(carro);

carro.km = 10;
// Muestra en consola 0
console.log(carro.km); 
~~~
Si ejecutamos el ejemplo anterior nos vamos a dar cuenta que JS "nos deja cambiar el valor", pero al imprimir el valor de la propiedad `km` del objeto carro podemos notar que el valor no se ha cambiado a 10 y sigue en 0. 

**Nota:** Si ejecutamos el anterior código en modo estricto (use strict) JS nos lanzará un error.


## Abreviatura de propiedades de objetos
ES6 añade un buen soporte para definir fácilmente los literales de los objetos. Si tenemos el siguiente código
~~~
const obtenerPosicionRaton = (x, y) => ({
  x: x,
  y: y
});
~~~
`obtenerPosicionRaton` es una función simple que devuelve un objeto que contiene dos propiedades. ES6 proporciona el azúcar sintáctico para eliminar la redundancia de tener que escribir `x: x`. Usted puede simplemente escribir `x` una vez. Aquí está la misma función de arriba reescrita para utilizar esta nueva sintaxis:

~~~
const obtenerPosicionRaton = (x, y) => ({ x, y });
~~~

## Obtener todas las propiedades y valores de un objeto
Si quisieramos obtener cuales son todas las propiedades de un objeto, JS nos proporciona una función que nos realiza esto, se define así: `Object.keys(myObj)`, esta función nos devuelve un array con los nombres de las propiedades. 

Ejemplo: 
~~~
const producto = {
   nombre: 'Limpiavidrios 3000',
   tipo: 'Limpieza',
   precio: '15.000',
   bodega: 1
}

const propiedades = Object.keys(producto);

//Muestra en consola ['nombre','tipo','precio','bodega']
console.log(propiedades);
~~~

También podemos obtener todos los valores de un objeto, para eso JS nos proporciona la función `Object.values(myObj)`. Esta función nos devuelve un array con los valores de las propiedades del objeto pasado como parámetro.

Ejemplo:
~~~
const producto = {
   nombre: 'Limpiavidrios 3000',
   tipo: 'Limpieza',
   precio: '15.000',
   bodega: 1,
   proveedor: {
        nombre: 'LIMPIEZA S.A',
        direccion: 'CALLE 10, medellín',
        NIT: 239723793
   }
}

const valores = Object.values(producto);

//Muestra en consola ['Limpiavidrios 3000', 'Limpieza', '15.000', 1, {nombre: 'LIMPIEZA S.A', direccion: 'CALLE 10, medellín', NIT: 239723793 }] 
console.log(valores);
~~~

## For ... in
Es una alternativa al bucle for para recorridos a propiedades de objetos en JavaScript. Ese recorrido es "genérico", es decir, es independiente del número de propiedades que se encuentre en el objeto que estamos recorriendo y es independiente también de sus nombres de propiedad o sus valores.  Su sintaxis es la siguiente:

~~~
for (let propiedad in objeto){
	// código a repetir por el bucle.
	// dentro de este código la variable "propiedad" contiene la propiedad actual
   	// en cada uno de los pasos de la iteración.
}
~~~
De esta manera puedes acceder a los nombres de las propiedades del objeto. Gracias al bucle, el código que se incluye dentro del for se ejecutará una vez por cada una de las propiedades del objeto.

Habrás notado que hemos dicho que así podrás acceder a las propiedades, para acceder a sus valores tendrás que usar algo adicional. Veamos el siguiente ejemplo: 

~~~
const diasMes: {
   enero: 31, 
   febrero: 28, 
   marzo: 31, 
   abril: 30, 
   mayo: 31
}

for (const mes in diasMes){
    console.log(mes);
}
~~~
Con esto conseguirás en la consola que aparezcan todos los nombres de los meses del año que tenemos en ese objeto diasMes.
En caso tal de que no quieras acceder a los nombres de las propiedades sino a sus valores puedes hacerlo así: 
~~~
for (const mes in diasMes){
    console.log(diasMes[mes]);
}
~~~
Según lo visto anteriormente podemos deducir como se acceder a los nombres de las propiedades y a los valores a la misma vez, sin embargo veamos la forma en la que se hace: 
~~~
for (const mes in diasMes){
    console.log(`${mes}: ${diasMes[mes]}`);
}
~~~

### Referencias
- Para elaborar el conténido anterior de objetos se utilizó apoyo del curso [JavaScript Algorithms and Data Structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) de [freeCodeCamp](https://www.freecodecamp.org/learn)
- Para elaborar el conténido de for ... in se utilizó apoyo de este [enlace](https://desarrolloweb.com/articulos/recorridos-propiedades-objetos-javascript-forin.html)
 
## Contenido adicional 
Puedes revisar la siguiente [lección](https://es.javascript.info/object) completa de objetos para ver este tema explicado de una forma diferente y con algunas cosas adicionales que te podrían ser de ayuda más adelante. 

# Objetos JSON

Como lo dice [MDN Web Docs](https://developer.mozilla.org/es/), JSON es un formato de datos basado en texto que sigue la sintaxis de objeto de JavaScript. Aunque es muy parecido a la sintaxis de objeto literal de JavaScript, puede ser utilizado independientemente de JavaScript, y muchos entornos de programación poseen la capacidad de leer (convertir; parsear) y generar JSON, JavaScript no es JSON, y algo JSON no es JavaScript. Los JSON son cadenas útiles cuando se quiere transmitir datos a través de una red. Debe ser convertido a un objeto nativo de JavaScript cuando se requiera acceder a sus datos. Ésto no es un problema, dado que JavaScript posee un objeto global JSON que tiene los métodos disponibles para convertir entre ellos.
Ejemplo:
~~~
{
   "Nombre": "Carla",
   "Apellido": "Gómez",
   "Edad": 29
}
~~~


Documentación técnica: 
- https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON
- https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON

 ## LocalStorage y SessionStorage
 
LocalStorage y SessionStorage son propiedades que acceden al objeto `Storage` y tienen la función de almacenar datos de manera local. En pocas palabras son lugares donde podemos guardar información. El almacenamiento funciona parecido a un objeto ya que la estructura es clave-valor. 
 
### Diferencias
El localStorage se caracteriza por que los datos almacenados no tienen fecha de expiración o hasta que se decida limpiar los datos del navegador, en cambio sessionStorage almacena información mientras la pestaña donde se esté utilizando siga abierta, una vez cerrada, la información se elimina. Para manejar estas funcionalidades desde JS podemos utilizar las siguientes funciones 

#### Añadir item o propiedad
~~~
//LocalStorage
localStorage.setItem('propiedad', 'valor');
//SessionStorage
sessionStorage.setItem('propiedad', 'valor');
~~~

#### Obtener el valor de un item o propiedad
~~~
//LocalStorage
let valorLocal = localStorage.getItem('propiedad');
//SessionStorage
let valorSession = sessionStorage.getItem('propiedad');
~~~
                                             
#### Eliminar item o propiedad
~~~
//LocalStorage
localStorage.removeItem('propiedad');
//SessionStorage
sessionStorage.removeItem('propiedad');
~~~                    

#### Eliminar todos los ítems o propiedades almacenados.
~~~
//LocalStorage
localStorage.clear();
//SessionStorage
sessionStorage.clear();
~~~