"use strict";(self.webpackChunkexplorer_course=self.webpackChunkexplorer_course||[]).push([[7637],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>m});var o=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,o,r=function(e,a){if(null==e)return{};var n,o,r={},t=Object.keys(e);for(o=0;o<t.length;o++)n=t[o],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)n=t[o],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var a=o.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},u=function(e){var a=l(e.components);return o.createElement(c.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},d=o.forwardRef((function(e,a){var n=e.components,r=e.mdxType,t=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||t;return n?o.createElement(k,i(i({ref:a},u),{},{components:n})):o.createElement(k,i({ref:a},u))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var t=n.length,i=new Array(t);i[0]=d;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<t;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3413:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const t={sidebar_position:3},i="Estructuras Condicionales",s={unversionedId:"tutorial-js/estructuras-condicionales",id:"tutorial-js/estructuras-condicionales",title:"Estructuras Condicionales",description:"Tareas",source:"@site/docs/tutorial-js/estructuras-condicionales.md",sourceDirName:"tutorial-js",slug:"/tutorial-js/estructuras-condicionales",permalink:"/explorer-course-ai/docs/tutorial-js/estructuras-condicionales",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Estructuras Secuenciales",permalink:"/explorer-course-ai/docs/tutorial-js/estructuras-secuenciales"},next:{title:"Estructuras Ciclicas",permalink:"/explorer-course-ai/docs/tutorial-js/estructuras-ciclicas"}},c={},l=[{value:"\xbfPara qu\xe9 sirve?",id:"para-qu\xe9-sirve",level:2},{value:"\xbfEn qu\xe9 casos se utiliza?",id:"en-qu\xe9-casos-se-utiliza",level:3},{value:"Clasificaci\xf3n",id:"clasificaci\xf3n",level:3},{value:"Estructura de control Switch Case",id:"estructura-de-control-switch-case",level:2}],u={toc:l};function p(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"estructuras-condicionales"},"Estructuras Condicionales"),(0,r.kt)("div",{style:{position:"relative"}},(0,r.kt)("div",{className:"card-demo cardDemo"},(0,r.kt)("div",{className:"card",style:{backgroundColor:"#242526"}},(0,r.kt)("div",{className:"card__header"},(0,r.kt)("h3",{style:{color:"#FFF",textAlign:"center"}},"Tareas")),(0,r.kt)("div",{className:"card__body"},(0,r.kt)("a",{href:"https://github.com/Agile-Innova-Academy/explorer-course/blob/main/2.%20Javascript/03-Estructuras-Condicionales/Ejercicios-para-Practicar.md",target:"_blank"},(0,r.kt)("button",{className:"button button--primary button--block",style:{marginBottom:"10px"}},"Tarea 1")),(0,r.kt)("a",{href:"https://github.com/Agile-Innova-Academy/explorer-course/tree/main/2.%20Javascript/03-Estructuras-Condicionales/Tarea-01",target:"_blank"},(0,r.kt)("button",{className:"button button--primary button--block",style:{marginBottom:"10px"}},"Tarea 2")),(0,r.kt)("a",{href:"https://github.com/Agile-Innova-Academy/explorer-course/tree/main/2.%20Javascript/03-Estructuras-Condicionales/Tarea-02",target:"_blank"},(0,r.kt)("button",{className:"button button--primary button--block",style:{marginBottom:"10px"}},"Tarea 3")),(0,r.kt)("a",{href:"https://github.com/Agile-Innova-Academy/explorer-course/tree/main/2.%20Javascript/03-Estructuras-Condicionales/Tarea-03",target:"_blank"},(0,r.kt)("button",{className:"button button--primary button--block",style:{marginBottom:"10px"}},"Tarea 4")))))),(0,r.kt)("p",null,"\xbfQu\xe9 son ",(0,r.kt)("strong",{parentName:"p"},"Estructuras Condicionales"),"?"),(0,r.kt)("iframe",{className:"videos",src:"https://www.youtube.com/embed/8EctAdlxg0E",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,r.kt)("iframe",{className:"videos",src:"https://www.youtube.com/embed/P53i_aRZeh8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,r.kt)("p",null,"Las estructuras condicionales comparan una variable contra otro(s) valor(es), para que con base al resultado de esta comparaci\xf3n, se siga un curso de acci\xf3n dentro del programa. Cabe mencionar, que la comparaci\xf3n se puede hacer contra una variable o contra una constante, seg\xfan se necesite."),(0,r.kt)("p",null,"Existen 3 tipos de condiciones:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Simples"),(0,r.kt)("li",{parentName:"ul"},"Dobles"),(0,r.kt)("li",{parentName:"ul"},"M\xfaltiples")),(0,r.kt)("p",null,"El resultado de la comparaci\xf3n en una estructura condicional tiene como resultado un valor l\xf3gico(true, false)"),(0,r.kt)("h2",{id:"para-qu\xe9-sirve"},"\xbfPara qu\xe9 sirve?"),(0,r.kt)("p",null,"Los booleanos sirven para tener datos que representen verdadero o falso, como por ejemplo saber si una condici\xf3n se cumple o no. Los condicionales se basan en condiciones, es decir, la base fundamental para que funcionen correctamente son los booleanos y sin ellos no ser\xedan viables.\nLa mejor forma de explicar para qu\xe9 sirven las condicionales es explicar c\xf3mo ser\xeda la programaci\xf3n sin ellas. En un mundo sin estos tendr\xedamos que escribir en nuestro c\xf3digo todos los pasos a llevar a cabo, uno a uno y no podr\xedamos ejecutar un c\xf3digo u otro en funci\xf3n de una serie de datos. Por ejemplo, no podr\xedamos comprobar si un formulario tiene todos los campos rellenos para enviarlo, ni comprobar si hemos hecho scroll hasta una secci\xf3n concreta de nuestra p\xe1gina para mostrar un elemento o activar una animaci\xf3n. Es decir, no habr\xeda distintas v\xedas, s\xf3lo un posible camino, cosa que har\xeda pr\xe1cticamente imposible ejecutar un c\xf3digo realmente \xfatil."),(0,r.kt)("h3",{id:"en-qu\xe9-casos-se-utiliza"},"\xbfEn qu\xe9 casos se utiliza?"),(0,r.kt)("p",null,"Veamos algunos ejemplos donde se utiliza lo que vamos a ver durante esta sesi\xf3n."),(0,r.kt)("p",null,"Los booleanos se utilizan para almacenar datos verdaderos o falsos o convertir comparaciones a verdadero o falso:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Guardar informaci\xf3n del estilo el usuario est\xe1 registrado o no, el campo se ha rellenado o no, etc."),(0,r.kt)("li",{parentName:"ul"},"Guardar info sobre si un n\xfamero es mayor o menor, si dos strings son iguales o no, si una variable existe, si una cadena de texto est\xe1 vac\xeda, etc.")),(0,r.kt)("p",null,"Los condicionales se usan para realizar o no un c\xf3digo en funci\xf3n de una condici\xf3n:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mostrar un mensaje de error si falta un campo obligatorio por rellenar en un formulario"),(0,r.kt)("li",{parentName:"ul"},"Mostrar el s\xedmbolo de usuario verificado en Twitter si la cuenta est\xe1 verificada"),(0,r.kt)("li",{parentName:"ul"},"Mostrar una pel\xedcula en favoritos si est\xe1 marcada como favorita")),(0,r.kt)("h3",{id:"clasificaci\xf3n"},"Clasificaci\xf3n"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Simples"))),(0,r.kt)("p",null,'Se les conoce como "Toma de decisi\xf3n". Tienen la siguiente forma:'),(0,r.kt)("p",null,"Pseudoc\xf3digo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Si <condicion> entonces\n    Acci\xf3n(es)\nFin si\n")),(0,r.kt)("p",null,"Javascript"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"if (condicion) {\n    //Acci\xf3n(es)\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Dobles"))," "),(0,r.kt)("p",null,"Permiten elegir entre dos opciones o alternativas posibles en funci\xf3n del cumplimiento o no de una determinada condici\xf3n.\nTiene la siguiente forma:"),(0,r.kt)("p",null,"Pseudoc\xf3digo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Si <condicion> entonces\n    Acci\xf3n(es)\nSino\n    Acci\xf3n(es)\nFin si\n")),(0,r.kt)("p",null,"Javascript"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"if (condicion) {\n    //Acci\xf3n(es)\n} else {\n    //Acci\xf3n(es)\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"M\xfaltiples o anidadas"))),(0,r.kt)("p",null,"Decimos que una estructura condicional es anidada cuando por la rama del verdadero o el falso de una estructura condicional hay otra estructura condicional. Tienen la siguiente forma:"),(0,r.kt)("p",null,"Pseudoc\xf3digo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Si <condicion> entonces\n    Acci\xf3n(es)\nSino Si <condicion> entonces\n    Si <condicion> entonces\n        Acci\xf3n(es)\n    Fin si\n    Acci\xf3n(es)\nFin si\n")),(0,r.kt)("p",null,"Javascript"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"if (condicion) {\n    //Acci\xf3n(es)\n} else if (condicion){\n    if (condici\xf3n) {\n        //Acci\xf3n(es)\n    }\n    //Acci\xf3n(es)\n}\n")),(0,r.kt)("p",null,"Es com\xfan que se presenten estructuras condicionales anidadas a\xfan m\xe1s complejas."),(0,r.kt)("h2",{id:"estructura-de-control-switch-case"},"Estructura de control Switch Case"),(0,r.kt)("p",null,"Es muy \xfatil cuando la condici\xf3n que evaluamos puede tomar muchos valores. Si utilizamos una sentencia if...else, tendr\xedamos que repetir la condici\xf3n para los distintos valores. En esta estructura podemos comparar cadenas de texto o n\xfameros, para el caso de querer comparar cadenas de texto se debe poner los posibles valores entre comillas. Tiene la siguiente forma: "),(0,r.kt)("p",null,"Pseudoc\xf3digo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Segun variable Hacer\n    opcion_1:\n        Acci\xf3n(es)\n    opcion_2:\n        Acci\xf3n(es)\n    opcion_3:\n        Acci\xf3n(es)\n    opcion_4:\n        Acci\xf3n(es)\n    De otro modo:\n        Acci\xf3n(es)\nFin segun\n")),(0,r.kt)("p",null,"Javascript"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"switch (expresion) {\n    case opcion_1:\n        //Acci\xf3n(es)\n    break;\n    case opcion_2:\n        //Acci\xf3n(es)\n    break;\n    case opcion_3:\n        //Acci\xf3n(es)\n    break;\n    case opcion_4:\n        //Acci\xf3n(es)\n    break;\n    default: \n        //Acci\xf3n(es)\n}\n")),(0,r.kt)("h1",{id:"condicionales-ternarios"},"Condicionales Ternarios"),(0,r.kt)("p",null,"Es el \xfanico operador en JavaScript que tiene tres operandos. Este operador se usa con frecuencia como atajo para la instrucci\xf3n if. Tiene la siguiente forma: condici\xf3n ? expr1 : expr2 "),(0,r.kt)("p",null,"Ejemplo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    let num = -2;\n    num > 0 ? console.log(`El n\xfamero ${num} es positivo`) : console.log(`El n\xfamero ${num} es negativo`)\n")),(0,r.kt)("p",null,"Documentaci\xf3n t\xe9cnica ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator"},"https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator")))}p.isMDXComponent=!0}}]);