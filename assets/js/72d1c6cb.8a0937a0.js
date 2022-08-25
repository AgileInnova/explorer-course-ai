"use strict";(self.webpackChunkexplorer_course=self.webpackChunkexplorer_course||[]).push([[742],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>u});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return a?t.createElement(k,i(i({ref:n},c),{},{components:a})):t.createElement(k,i({ref:n},c))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2018:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=a(7462),r=(a(7294),a(3905));const o={sidebar_position:8},i="Animaciones en CSS",l={unversionedId:"tutorial-html/animaciones",id:"tutorial-html/animaciones",title:"Animaciones en CSS",description:"\xbfQu\xe9 son las animaciones CSS?",source:"@site/docs/tutorial-html/animaciones.md",sourceDirName:"tutorial-html",slug:"/tutorial-html/animaciones",permalink:"/explorer-course-ai/docs/tutorial-html/animaciones",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Flex",permalink:"/explorer-course-ai/docs/tutorial-html/flex"},next:{title:"Grid",permalink:"/explorer-course-ai/docs/tutorial-html/grid"}},s={},p=[{value:"\xbfQu\xe9 son las animaciones CSS?",id:"qu\xe9-son-las-animaciones-css",level:2},{value:"Ejemplos de animaciones (m\xe1s o menos curradas)",id:"ejemplos-de-animaciones-m\xe1s-o-menos-curradas",level:3},{value:"Transforms en CSS",id:"transforms-en-css",level:2},{value:"\xbfC\xf3mo se construye una transici\xf3n?",id:"c\xf3mo-se-construye-una-transici\xf3n",level:3}],c={toc:p};function m(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"animaciones-en-css"},"Animaciones en CSS"),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/F5d_XyoER4s",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,r.kt)("h2",{id:"qu\xe9-son-las-animaciones-css"},"\xbfQu\xe9 son las animaciones CSS?"),(0,r.kt)("p",null,"Una animaci\xf3n permite que un elemento cambie gradualmente de un estilo a otro. Adicional permite cambiar las propiedades de CSS  tantas veces como desee"),(0,r.kt)("p",null,"B\xe1sicamente una animaci\xf3n CSS se define como el la transici\xf3n gradual de unos estilos a otros en los elementos del html. Es decir, en el CSS vas a poder definir una animaci\xf3n mediante los estilos de partida y los estilos que quieras al final de la animaci\xf3n, y el navegador se va a encargar de hacer el paso de unos estilos a otros de forma gradual."),(0,r.kt)("p",null,"Para empezar a crear las animaciones, simplemente crea en el CSS una regla especial llamada keyframes con la regla ",(0,r.kt)("inlineCode",{parentName:"p"},"@keyframes")," y dentro definiremos las distintas posiciones de nuestra animaci\xf3n. La primera ser\xe1 al 0% y la \xfaltima al 100% (en lugar de 0% y 100% podremos usar from y to):"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Ejemplo 1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"@keyframes intro \n{    \n    from { opacity: 0;        \n          transform: scale(10) rotate(-150deg);   \n          }    \n    to {  opacity: 1;        \n         transform: scale(1);    \n         }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".elemento {\n  width: 100px;\n  height: 100px;\n  background-color: red;\n  animation-name: Clase;\n  animation-duration: 4s;\n}\n")),(0,r.kt)("p",null,"\u200b",(0,r.kt)("a",{parentName:"p",href:"https://codepen.io/adalab/pen/qpbwwG"},"\u25b8 El resultado en Codepen")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Ejemplo 2")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"@keyframes Clase {\n    0%{\n        background-color: palegreen; \n    }\n    25%{\n        background-color:palevioletred;\n    }\n    50%{\n        background-color:#000;\n    }\n    75%{\n        background-color:rgb(136, 19, 19);\n    }\n    100%{\n        background-color: palegreen;\n    }\n}\n")),(0,r.kt)("p",null,"En este ejemplo hemos creado una animaci\xf3n llamada ejemplo con ",(0,r.kt)("inlineCode",{parentName:"p"},"Clase"),". En este ejercicio el elemento cambiara de color sugun el grado de ejecuci\xf3n que se encuentre la animaci\xf3n "),(0,r.kt)("p",null,"Para hacer uso de la animacion debemos invocar la animacion al interior de los estilos de un elemento"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".elemento {\n  width: 100px;\n  height: 100px;\n  background-color: red;\n  animation-name: Clase;\n  animation-duration: 4s;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"subpropiedades de las animaciones:"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"animation-delay:")," determina el tiempo hasta que empieza la animaci\xf3n "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"animation-direction:")," especifica si la animaci\xf3n mantendr\xe1 la direcci\xf3n, la alternar\xe1 en cada repetici\xf3n, o si la resetea al punto inicial. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"animation-duration:")," marca el tiempo que durar\xe1 la animaci\xf3n. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"animation-iteration-count:")," dice las veces que se va a repetir la animaci\xf3n. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"animation-name:")," especifica el identificador de la animaci\xf3n. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"animation-play-state:")," permite pausar una animaci\xf3n. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"animation-timing-function:")," funciona igual que con las transiciones. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"animation-fill-mode:")," especifica si los valores de la animaci\xf3n se aplicar\xe1n al elemento animado una vez termine o antes de empezar"),(0,r.kt)("p",null,"Vamos a probar una m\xe1s... ",(0,r.kt)("a",{parentName:"p",href:"https://codepen.io/adalab/pen/jYWjVj"},"powerpoint\u200b")),(0,r.kt)("p",null,"Documentaci\xf3n completa de las sub propiedades de animation en la MDN: ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations"},"CSS Animations")),(0,r.kt)("h3",{id:"ejemplos-de-animaciones-m\xe1s-o-menos-curradas"},"Ejemplos de animaciones (m\xe1s o menos curradas)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://codepen.io/north-of-rapture/pen/rWqega?limit=all&page=2&q=css+animation"},"\u200bPure CSS Animated Checkbox\u200b")),(0,r.kt)("p",null,"\u200b",(0,r.kt)("a",{parentName:"p",href:"https://codepen.io/mdd/pen/xEuyG"},"CSS Animate (y ha escrito un post sobre c\xf3mo se hace)")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://codepen.io/Moiety/pen/EBtga"},"\u200bCSS Animation Material Design\u200b")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://codepen.io/Guilh/pen/yldGp?limit=all&page=4&q=css+animation"},"\u200bCSS Animation with steps()\u200b")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://codepen.io/FabioG/pen/QjLreK"},"\u200bMr JeellyFish pure CSS animation\u200b")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://codepen.io/donovanh/pen/pvMeeB"},"\u200bWWDC 2015 CSS\u200b")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://codepen.io/hakimel/pen/aIhkf"},"\u200bCloudy Spiral CSS animation")),(0,r.kt)("h2",{id:"transforms-en-css"},"Transforms en CSS"),(0,r.kt)("p",null,"Las transformaciones CSS nos permiten rotar, torcer, escalar o desplazar los elementos de nuestra p\xe1gina web. Este tipo de propiedades de CSS3 son muy interesantes para convertir el lenguaje de hojas de estilo en un sistema capaz de realizar todo tipo de efectos visuales."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Tipos de transformaciones"))),(0,r.kt)("p",null,"Las transformaciones que podemos aplicar son las siguientes:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Scale"),": modifica el tama\xf1o de los elementos.\n",(0,r.kt)("inlineCode",{parentName:"p"},"Translate"),": cambia la posici\xf3n del elemento. Izquierda, derecha, arriba o abajo.\n",(0,r.kt)("inlineCode",{parentName:"p"},"Rotate"),": gira o rota los elementos en grados.\n",(0,r.kt)("inlineCode",{parentName:"p"},"Skew"),": distorsiona los elementos seg\xfan el \xe1ngulo en grados.\n",(0,r.kt)("inlineCode",{parentName:"p"},"Matrix"),": mueve o transforma los elementos con precisi\xf3n de p\xedxel."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://codepen.io/Eniun/pen/mddmVWX"},"\u25b8 Ver en Codepen")),(0,r.kt)("h3",{id:"c\xf3mo-se-construye-una-transici\xf3n"},"\xbfC\xf3mo se construye una transici\xf3n?"),(0,r.kt)("p",null,"Las transiciones de especifican con la propiedad transition que es un atajo (shortcut) de:\n",(0,r.kt)("inlineCode",{parentName:"p"},"transition-property")," la propiedad sobre la que queremos aplicar la transici\xf3n"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"transition-duration")," la duraci\xf3n de la transici\xf3n en segundos o milisegundos"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"transition-timing-function"),": una funci\xf3n de tiempo para determinar c\xf3mo aplicar la transici\xf3n, hay unas palabras clave para algunas funciones."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"transition-delay:")," un tiempo de retardo antes de empezar la transici\xf3n\nNo hace falta especificarlas todas y podemos usar el atajo o no. En los ejemplos lo usamos con la propiedad, la funci\xf3n de tiempo y la duraci\xf3n de la transici\xf3n:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".caja1{\n   background-color: #C0392B;\n   transition: 1s linear;\n }\n .caja1:hover{\n    background-color: #C0334B;\n   transform: scale(0.5);\n }\n")))}m.isMDXComponent=!0}}]);