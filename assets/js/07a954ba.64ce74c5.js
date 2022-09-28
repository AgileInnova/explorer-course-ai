"use strict";(self.webpackChunkexplorer_course=self.webpackChunkexplorer_course||[]).push([[7765],{3905:(e,a,r)=>{r.d(a,{Zo:()=>u,kt:()=>m});var t=r(7294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function s(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?s(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function c(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=t.createContext({}),o=function(e){var a=t.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},u=function(e){var a=o(e.components);return t.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=o(r),m=n,b=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return r?t.createElement(b,i(i({ref:a},u),{},{components:r})):t.createElement(b,i({ref:a},u))}));function m(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=p;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var o=2;o<s;o++)i[o]=r[o];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4456:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var t=r(7462),n=(r(7294),r(3905));const s={sidebar_position:2},i="Estructuras Secuenciales",c={unversionedId:"tutorial-js/estructuras-secuenciales",id:"tutorial-js/estructuras-secuenciales",title:"Estructuras Secuenciales",description:"\xbfQue son las Estructuras Secuenciales?",source:"@site/docs/tutorial-js/estructuras-secuenciales.md",sourceDirName:"tutorial-js",slug:"/tutorial-js/estructuras-secuenciales",permalink:"/explorer-course-ai/docs/tutorial-js/estructuras-secuenciales",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Conceptos Basicos",permalink:"/explorer-course-ai/docs/tutorial-js/conceptos-basicos"},next:{title:"Estructuras Condicionales",permalink:"/explorer-course-ai/docs/tutorial-js/estructuras-condicionales"}},l={},o=[{value:"Estructuras Algor\xedtmicas",id:"estructuras-algor\xedtmicas",level:2},{value:"Secuenciales",id:"secuenciales",level:3},{value:"Condicionales",id:"condicionales",level:3},{value:"C\xedclicas",id:"c\xedclicas",level:3},{value:"Estructuras secuenciales",id:"estructuras-secuenciales-1",level:2},{value:"Asignaci\xf3n",id:"asignaci\xf3n",level:3},{value:"Lectura (Entrada)",id:"lectura-entrada",level:3},{value:"Escritura (Salida)",id:"escritura-salida",level:3}],u={toc:o};function d(e){let{components:a,...r}=e;return(0,n.kt)("wrapper",(0,t.Z)({},u,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"estructuras-secuenciales"},"Estructuras Secuenciales"),(0,n.kt)("p",null,"\xbfQue son las ",(0,n.kt)("strong",{parentName:"p"},"Estructuras Secuenciales"),"?"),(0,n.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/hWGMaQf1pLU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,n.kt)("h2",{id:"estructuras-algor\xedtmicas"},"Estructuras Algor\xedtmicas"),(0,n.kt)("p",null,"Las estructuras de operaci\xf3n de programas son un grupo de forma de trabajo, que permiten, mediante la manipulaci\xf3n de variables, realizar ciertos procesos espec\xedficos que nos lleven a la soluci\xf3n de problemas. Debemos de recordar que una vez entendido lo que se desea obtener del computador, se procede a determinar la estructura EPS (Entrada, Proceso, Salida) y si se considera necesario el dise\xf1o del algoritmo  (diagrama de flujo y/o pseudoc\xf3digo) y prueba de escritorio. "),(0,n.kt)("p",null,"Estas estructuras se clasifican de acuerdo a su complejidad en:"),(0,n.kt)("h3",{id:"secuenciales"},"Secuenciales"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Asignaci\xf3n\nEntrada\nSalida\n")),(0,n.kt)("h3",{id:"condicionales"},"Condicionales"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Simples\nDobles\nM\xfaltiples o anidadas\n")),(0,n.kt)("h3",{id:"c\xedclicas"},"C\xedclicas"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Hacer para\nHacer mientras\nRepetir hasta\n")),(0,n.kt)("h2",{id:"estructuras-secuenciales-1"},"Estructuras secuenciales"),(0,n.kt)("p",null,"Las estructuras secuenciales son aquellas en las que una acci\xf3n (instrucci\xf3n) sigue a otra en secuencia. Las tareas se suceden de tal modo que la salida de una es la entrada de la siguiente y as\xed sucesivamente hasta el fin del proceso."),(0,n.kt)("p",null,"Una estructura secuencial se representa de la siguiente forma:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Inicio\n  Acci\xf3n 1\n  Acci\xf3n 2\n  .\n  .\n  .\n  Acci\xf3n N\nFin\n")),(0,n.kt)("h3",{id:"asignaci\xf3n"},"Asignaci\xf3n"),(0,n.kt)("p",null,"Consiste en el paso de valores o resultados a una zona de la memoria, dicha zona ser\xe1 reconocida con el nombre de la variable que recibe el valor. La asignaci\xf3n se puede clasificar de la siguiente forma:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Simples: Consiste en pasar un valor constante a una variable (a=15)"),(0,n.kt)("li",{parentName:"ul"},"Contador: Consiste en usar la variable como un verificador del n\xfamero de veces que se realiza un proceso (a=a+1)"),(0,n.kt)("li",{parentName:"ul"},"Acumulador: Consiste en usar la variable como un sumador en un proceso (a=a+b)"),(0,n.kt)("li",{parentName:"ul"},"De trabajo: Variable que puede recibir el resultado de una operaci\xf3n matem\xe1tica que involucre muchas variables (a=c+b*2/4)")),(0,n.kt)("h3",{id:"lectura-entrada"},"Lectura (Entrada)"),(0,n.kt)("p",null,"Consiste en recibir desde un dispositivo de entrada (p.ej. el teclado) un valor. Esta operaci\xf3n se representa en un pseudoc\xf3digo de la siguiente manera:"),(0,n.kt)("p",null,"Leer a,b"),(0,n.kt)("p",null,'Donde "a" y "b" son las variables que recibir\xe1n los valores'),(0,n.kt)("h3",{id:"escritura-salida"},"Escritura (Salida)"),(0,n.kt)("p",null," Consiste en mandar por un dispositivo de salida (p.ej monitor o impresora) un resultado o mensaje. Este proceso se representa en un pseudoc\xf3digo de la siguiente manera:"),(0,n.kt)("p",null,' Escriba "El resultado es " , R'),(0,n.kt)("p",null,' Donde "El resultado es: " es un mensaje que se desea aparezca y R es una variable que contiene un valor.'))}d.isMDXComponent=!0}}]);