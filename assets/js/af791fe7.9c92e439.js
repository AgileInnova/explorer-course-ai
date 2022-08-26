"use strict";(self.webpackChunkexplorer_course=self.webpackChunkexplorer_course||[]).push([[5969],{3905:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>m});var o=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function t(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,o,r=function(e,n){if(null==e)return{};var a,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),c=function(e){var n=o.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):t(t({},n),e)),a},u=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return a?o.createElement(k,t(t({ref:n},u),{},{components:a})):o.createElement(k,t({ref:n},u))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,t=new Array(l);t[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,t[1]=i;for(var c=2;c<l;c++)t[c]=a[c];return o.createElement.apply(null,t)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},525:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>t,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var o=a(7462),r=(a(7294),a(3905));const l={sidebar_position:8},t="Arreglos",i={unversionedId:"tutorial-js/arreglos",id:"tutorial-js/arreglos",title:"Arreglos",description:"Conceptos b\xe1sicos de los Arreglos",source:"@site/docs/tutorial-js/arreglos.md",sourceDirName:"tutorial-js",slug:"/tutorial-js/arreglos",permalink:"/explorer-course-ai/docs/tutorial-js/arreglos",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Funciones",permalink:"/explorer-course-ai/docs/tutorial-js/funciones"},next:{title:"Objetos",permalink:"/explorer-course-ai/docs/tutorial-js/objetos"}},s={},c=[{value:"\xbfEn qu\xe9 casos se utilizan?",id:"en-qu\xe9-casos-se-utilizan",level:2},{value:"Operaciones habituales con los array",id:"operaciones-habituales-con-los-array",level:2},{value:"Crear un array",id:"crear-un-array",level:3},{value:"Array vac\xedo o sin elementos",id:"array-vac\xedo-o-sin-elementos",level:4},{value:"Array con elementos",id:"array-con-elementos",level:4},{value:"Array como resultado de alguna funci\xf3n",id:"array-como-resultado-de-alguna-funci\xf3n",level:4},{value:"Acceder a un elemento mediante su \xedndice",id:"acceder-a-un-elemento-mediante-su-\xedndice",level:3},{value:"Modificar un elemento seg\xfan su indice",id:"modificar-un-elemento-seg\xfan-su-indice",level:3},{value:"A\xf1adir un elemento al final de un Array",id:"a\xf1adir-un-elemento-al-final-de-un-array",level:3},{value:"Eliminar el \xfaltimo elemento de un Array",id:"eliminar-el-\xfaltimo-elemento-de-un-array",level:3},{value:"A\xf1adir un elemento al principio de un Array",id:"a\xf1adir-un-elemento-al-principio-de-un-array",level:3},{value:"Eliminar el primer elemento de un Array",id:"eliminar-el-primer-elemento-de-un-array",level:3},{value:"Encontrar el \xedndice de un elemento del Array",id:"encontrar-el-\xedndice-de-un-elemento-del-array",level:3},{value:"Eliminar un \xfanico elemento mediante su posici\xf3n",id:"eliminar-un-\xfanico-elemento-mediante-su-posici\xf3n",level:3},{value:"M\xe9todo find()",id:"m\xe9todo-find",level:3},{value:"Recorrer un Array",id:"recorrer-un-array",level:3},{value:"Con un for",id:"con-un-for",level:4},{value:"Funci\xf3n foreach",id:"funci\xf3n-foreach",level:4},{value:"Funci\xf3n map()",id:"funci\xf3n-map",level:4},{value:"Desestructuraci\xf3n",id:"desestructuraci\xf3n",level:2},{value:"Arreglos",id:"arreglos-1",level:3},{value:"Objetos",id:"objetos",level:3},{value:"spread and Rest operators",id:"spread-and-rest-operators",level:2},{value:"Arreglos",id:"arreglos-2",level:3},{value:"Objetos",id:"objetos-1",level:3},{value:"Referencias",id:"referencias",level:3}],u={toc:c};function d(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"arreglos"},"Arreglos"),(0,r.kt)("p",null,"Conceptos b\xe1sicos de los ",(0,r.kt)("strong",{parentName:"p"},"Arreglos")),(0,r.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/_uSSabzX4M8",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,r.kt)("p",null,"Los arrays, tambi\xe9n llamados arreglos o listas, nos permiten guardar una lista ordenada de datos en JavaScript, es decir, podemos almacenar varios datos en un solo lugar. Algunos ejemplos: una lista de espera de un hospital, los objetos de una cesta de la compra, los usuarios que han dado like a nuestra foto, etc."),(0,r.kt)("p",null,"Array con la lista de espera de los pacientes de un hospital"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"                [\n                  'Manuela Eufemia',\n                  'Benigna Imelda',\n                  'Isa\xedas Paquito',\n                  'Ximena Ad\xe1n',\n                  'Nicol\xe1s Emiliana'\n                ];\n    \n")),(0,r.kt)("h2",{id:"en-qu\xe9-casos-se-utilizan"},"\xbfEn qu\xe9 casos se utilizan?"),(0,r.kt)("p",null,"Si pensamos en una web, la mayor\xeda de los datos vienen en una lista. Algunas de las aplicaciones m\xe1s t\xedpicas de los arrays son:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"              - los resultados de b\xfasqueda\n              - la lista de coordenadas de un mapa\n              - los art\xedculos de un carrito de la compra\n              - las tareas de una lista de tareas\n              - los contactos de una lista de contactos.\n            \n")),(0,r.kt)("p",null,"Todos estos ejemplos anteriores se suelen almacenar en arrays para poderlos modificar (por ejemplo ordenar por orden alfab\xe9tico o a\xf1adir un nuevo elemento), trabajar con ellos de forma sencilla y mostrarlos en nuestra web. Un array es la estructura que utilizamos en JavaScript para almacenar listas de datos ordenados.\nUn array puede contener cualquier tipo de dato (string, number, boolean, object incluso otros arrays). De hecho, un mismo array puede contener datos de distinto tipo mezclados, aunque es algo poco recomendable."),(0,r.kt)("p",null,"Cada elemento dentro de un array ir\xe1 asociado a un \xedndice, ese \xedndice nos permitir\xe1 obtener el dato de una determinada posici\xf3n del array o modificarlo. Un dato importante a tener en cuenta es que el \xedndice de los arrays empieza por el n\xfamero 0, por lo que el primer elemento tendr\xe1 \xedndice 0, el segundo tendr\xe1 1, el tercero 2 y as\xed sucesivamente."),(0,r.kt)("p",null,"Array donde el orden es importante"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"            const weekdays = [\n              'Lunes',\n              'Martes',\n              'Mi\xe9rcoles',\n              'Jueves',\n              'Viernes',\n              'S\xe1bado',\n              'Domingo'\n            ];\n            \n")),(0,r.kt)("p",null,"En este ejemplo, 'Lunes' est\xe1 en la posici\xf3n 0 del array, y 'Domingo' en la posici\xf3n 6. Tambi\xe9n los arrays cuentan con una longitud, que es el n\xfamero de elementos que tiene. En el ejemplo anterior el array weekdays tiene 7 elementos, es decir, una longitud de 7. Para obtener la longitud de un arreglo podemos utilizar la funci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"array.length()"),". "),(0,r.kt)("p",null,"NOTA: Por lo general es poco recomendable mezclar varios datos diferentes en un array, en esos casos es mejor usar un objeto."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array"},"Documentaci\xf3n t\xe9cnica Array")),(0,r.kt)("h2",{id:"operaciones-habituales-con-los-array"},"Operaciones habituales con los array"),(0,r.kt)("h3",{id:"crear-un-array"},"Crear un array"),(0,r.kt)("p",null,"Para crear un array tenemos varias maneras, las cuales son:"),(0,r.kt)("h4",{id:"array-vac\xedo-o-sin-elementos"},"Array vac\xedo o sin elementos"),(0,r.kt)("p",null,"Ejemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"let array = [];\n//Muestra en consola 0\nconsole.log(array.length) \n")),(0,r.kt)("h4",{id:"array-con-elementos"},"Array con elementos"),(0,r.kt)("p",null,"Ejemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'let animal = ["Perro", "Gato"]\n//Muestra en consola 2\nconsole.log(animal.length)\n')),(0,r.kt)("h4",{id:"array-como-resultado-de-alguna-funci\xf3n"},"Array como resultado de alguna funci\xf3n"),(0,r.kt)("p",null,"En ocasiones tenemos funciones de Javascript que nos devuelve un array. "),(0,r.kt)("p",null,"Ejemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const computador = {\n  marca: 'hp',\n  fecha_creacion: '2022',\n  procesador: 'Intel !10 10gen'\n}\n\nconst propiedades_computador = Object.keys(computador);\n\n//Muestra en consola ['marca','fecha_creacion','procesador']\nconsole.log(propiedades_computador) \n")),(0,r.kt)("h3",{id:"acceder-a-un-elemento-mediante-su-\xedndice"},"Acceder a un elemento mediante su \xedndice"),(0,r.kt)("p",null,"Como se explico anteriormente los arrays cuentan con un indice el cual nos indica la posici\xf3n de los elementos, empezando desde 0 hasta n-1 siendo n la longitud del arreglo. Para acceder a un elemento espec\xedfico simplemente ponemos ",(0,r.kt)("inlineCode",{parentName:"p"},"[indice]")," luego del nombre del array ",(0,r.kt)("inlineCode",{parentName:"p"},"array[indice]")),(0,r.kt)("p",null,"Ejemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"let animal = ['Perro', 'Loro', 'Pez', 'Conejo', 'Gato'];\n\nlet primero = animal[0];\n// Muestra en consola 'Perro'\nconsole.log(primero);\n\nlet ultimo = animal[animal.length - 1]\n// Muestra en consola 'Gato'\nconsole.log(ultimo);\n\nlet tercero = animal[2]\n// Muestra en consola 'Pez'\nconsole.log(tercero);\n")),(0,r.kt)("h3",{id:"modificar-un-elemento-seg\xfan-su-indice"},"Modificar un elemento seg\xfan su indice"),(0,r.kt)("p",null,"Internamente los arrays son un conjunto de variables, es decir, que podemos modificar el valor de esas variables, incluso si el array fue declarado como const. Para realizar esto solo es acceder al valor por medio del indice y luego hacer la asignaci\xf3n as\xed: ",(0,r.kt)("inlineCode",{parentName:"p"},"array[indice] = nuevoValor")),(0,r.kt)("p",null,"Ejemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const array = [50, 40, 30];\narray[0] = 15;\n\n//Muestra en consola [15,40,30]\nconsole.log(array);\n")),(0,r.kt)("h3",{id:"a\xf1adir-un-elemento-al-final-de-un-array"},"A\xf1adir un elemento al final de un Array"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"let animal = ['Perro', 'Loro', 'Pez', 'Conejo', 'Gato'];\n\nanimal.push('Caballo') // A\xf1ade \"Caballo\" al final\n\n// Muestra en consola ['Perro', 'Loro', 'Pez', 'Conejo', 'Gato', 'Caballo']\nconsole.log(animal)\n")),(0,r.kt)("h3",{id:"eliminar-el-\xfaltimo-elemento-de-un-array"},"Eliminar el \xfaltimo elemento de un Array"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"let animal = ['Perro', 'Loro', 'Pez', 'Conejo', 'Gato'];\n\nanimal.pop() // Elimina \"Gato\" del final\n\n// Muestra en consola ['Perro', 'Loro', 'Pez', 'Conejo']\nconsole.log(animal)\n")),(0,r.kt)("h3",{id:"a\xf1adir-un-elemento-al-principio-de-un-array"},"A\xf1adir un elemento al principio de un Array"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"let animal = ['Perro', 'Loro', 'Pez', 'Conejo', 'Gato'];\n\nanimal.unshift('Caballo') // A\xf1ade \"Caballo\" al inicio\n\n// Muestra en consola ['Caballo', 'Perro', 'Loro', 'Pez', 'Conejo', 'Gato'];\nconsole.log(animal)\n")),(0,r.kt)("h3",{id:"eliminar-el-primer-elemento-de-un-array"},"Eliminar el primer elemento de un Array"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"let animal = ['Perro', 'Loro', 'Pez', 'Conejo', 'Gato'];\n\nanimal.shift() // Elimina \"Perro\" del inicio\n\n// Muestra en consola ['Loro', 'Pez', 'Conejo', 'Gato'];\nconsole.log(animal)\n")),(0,r.kt)("h3",{id:"encontrar-el-\xedndice-de-un-elemento-del-array"},"Encontrar el \xedndice de un elemento del Array"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"let animal = ['Perro', 'Loro', 'Pez', 'Conejo', 'Gato'];\n\nlet pos = animal.indexOf('Pez');\n\n//Muestra en consola 2\nconsole.log(pos);\n")),(0,r.kt)("h3",{id:"eliminar-un-\xfanico-elemento-mediante-su-posici\xf3n"},"Eliminar un \xfanico elemento mediante su posici\xf3n"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"let animal = ['Perro', 'Loro', 'Pez', 'Conejo', 'Gato'];\n\nlet pos = animal.indexOf('Pez');\n\nlet elementoEliminado = animal.splice(pos, 1)\n\n// Muestra en consola ['Perro', 'Loro', 'Conejo', 'Gato'];\nconsole.log(animal)\n")),(0,r.kt)("h3",{id:"m\xe9todo-find"},"M\xe9todo find()"),(0,r.kt)("p",null,"El m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"find()")," devuelve el valor del primer elemento del array que cumple la funci\xf3n de prueba proporcionada."),(0,r.kt)("p",null,"Ejemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const array1 = [5, 12, 8, 130, 44];\n\nconst found = array1.find(element => element > 10);\n\n//Muestra en consola 12\nconsole.log(found);\n")),(0,r.kt)("h3",{id:"recorrer-un-array"},"Recorrer un Array"),(0,r.kt)("p",null,"Cuando manejamos arrays surge la necesidad de recorrer sus elementos. Para esto lo podemos realizar de muchas maneras, algunas de estas son:"),(0,r.kt)("h4",{id:"con-un-for"},"Con un for"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"let animal = ['Perro', 'Loro', 'Pez', 'Conejo', 'Gato'];\n\nfor(let i = 0; i < animal.length; i++){\n  console.log(`El elemento en la posici\xf3n ${i} es ${animal[i]}`);\n}\n/*\nMuestra en consola: \nEl elemento en la posici\xf3n 0 es Perro\nEl elemento en la posici\xf3n 1 es Loro\nEl elemento en la posici\xf3n 2 es Pez\nEl elemento en la posici\xf3n 3 es Conejo\nEl elemento en la posici\xf3n 4 es Gato\n*/\n")),(0,r.kt)("h4",{id:"funci\xf3n-foreach"},"Funci\xf3n foreach"),(0,r.kt)("p",null,"Ejecuta la funci\xf3n indicada una vez por cada elemento del array."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"let animal = ['Perro', 'Loro', 'Pez', 'Conejo', 'Gato'];\n\nanimal.forEach((elemento, indice) => {\n    console.log(`El elemento en la posici\xf3n ${indice} es ${elemento}`);\n})\n\n/*\nMuestra en consola: \nEl elemento en la posici\xf3n 0 es Perro\nEl elemento en la posici\xf3n 1 es Loro\nEl elemento en la posici\xf3n 2 es Pez\nEl elemento en la posici\xf3n 3 es Conejo\nEl elemento en la posici\xf3n 4 es Gato\n/*\n")),(0,r.kt)("h4",{id:"funci\xf3n-map"},"Funci\xf3n map()"),(0,r.kt)("p",null,"A diferencia de los anteriores esta funci\xf3n crea un nuevo array con los resultados de la llamada a la funci\xf3n indicada aplicados a cada uno de sus elementos, aunque tambi\xe9n lo podemos utilizar solo para recorrerlo"),(0,r.kt)("p",null,"Ejemplo recorrido"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"let animal = ['Perro', 'Loro', 'Pez', 'Conejo', 'Gato'];\n\nanimal.map((elemento, indice) => {\n    console.log(`El elemento en la posici\xf3n ${indice} es ${elemento}`);\n})\n\n/*\nMuestra en consola: \nEl elemento en la posici\xf3n 0 es Perro\nEl elemento en la posici\xf3n 1 es Loro\nEl elemento en la posici\xf3n 2 es Pez\nEl elemento en la posici\xf3n 3 es Conejo\nEl elemento en la posici\xf3n 4 es Gato\n/*\n\n")),(0,r.kt)("p",null,"Ejemplo creaci\xf3n de nuevo array"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"let animal = ['Perro', 'Loro', 'Pez', 'Conejo', 'Gato'];\n\nlet longitudes = animal.map((elemento, indice) => {\n    return elemento.length;\n})\n\n//Muestra en consola [5,4,3,6,4]\nconsole.log(longitudes)\n")),(0,r.kt)("h2",{id:"desestructuraci\xf3n"},"Desestructuraci\xf3n"),(0,r.kt)("p",null,"Es una expresi\xf3n de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables"),(0,r.kt)("h3",{id:"arreglos-1"},"Arreglos"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"let nombreCompleto = ['Carla','G\xf3mez'];\n\nlet [nombre,apellido] = nombreCompleto;\n\n// Muestra en consola 'Carla'\nconsole.log(nombre); \n// Muestra en consola 'G\xf3mez'\nconsole.log(apellido);\n")),(0,r.kt)("h3",{id:"objetos"},"Objetos"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"let producto = {\n  id: '3001CF47',\n  nombre: 'Caf\xe9',\n  precio: 8500\n};\n\nlet { id, nombre, precio } = producto;\n\n//Muestra en consola '3001CF47'\nconsole.log(id);  \n//Muestra en consola 'Caf\xe9'\nconsole.log(nombre); \n//Muestra en consola 8500\nconsole.log(precio); \n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"},"Documentaci\xf3n t\xe9cnica"))),(0,r.kt)("h2",{id:"spread-and-rest-operators"},"spread and Rest operators"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax"},"spread")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/rest_parameters"},"rest"))),(0,r.kt)("p",null,"Permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde cero o m\xe1s argumentos o elementos son esperados, o a un objeto ser expandido en lugares donde cero o m\xe1s pares de valores clave son esperados."),(0,r.kt)("h3",{id:"arreglos-2"},"Arreglos"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const numeros = [1,2,3,4,5,6,7];\n\nconst masNumeros = [...numeros,8,9,10];\n\n//Muestra en consola [1,2,3,4,5,6,7,8,9,10]\nconsole.log(masNumeros);\n")),(0,r.kt)("h3",{id:"objetos-1"},"Objetos"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const perro = {\n    nombre: 'Ner\xf3n',\n    edad: 7,\n }\n\nconst duenioPerro = {...perro, duenio: 'Carlos'};\n\n//Muestra en consola {nombre: 'Ner\xf3n', edad: 7, duenio: 'Carlos'}\nconsole.log(duenioPerro);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax"},"Documentaci\xf3n t\xe9cnica")," ")),(0,r.kt)("h3",{id:"referencias"},"Referencias"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Para elaborar el cont\xe9nido anterior de objetos se utiliz\xf3 apoyo del curso ",(0,r.kt)("a",{parentName:"li",href:"https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"},"JavaScript Algorithms and Data Structures")," de ",(0,r.kt)("a",{parentName:"li",href:"https://www.freecodecamp.org/learn"},"freeCodeCamp")," y de ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/es/"},"MDN Web Docs"))))}d.isMDXComponent=!0}}]);