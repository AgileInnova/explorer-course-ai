"use strict";(self.webpackChunkexplorer_course=self.webpackChunkexplorer_course||[]).push([[8449],{3905:(e,r,a)=>{a.d(r,{Zo:()=>p,kt:()=>m});var o=a(7294);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function n(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?n(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,o,t=function(e,r){if(null==e)return{};var a,o,t={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var l=o.createContext({}),c=function(e){var r=o.useContext(l),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},p=function(e){var r=c(e.components);return o.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var a=e.components,t=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=t,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||n;return a?o.createElement(b,i(i({ref:r},p),{},{components:a})):o.createElement(b,i({ref:r},p))}));function m(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var n=a.length,i=new Array(n);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1284:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var o=a(7462),t=(a(7294),a(3905));const n={sidebar_position:2},i="Comandos b\xe1sicos de Linux",s={unversionedId:"primeros-pasos/primeros-pasos",id:"primeros-pasos/primeros-pasos",title:"Comandos b\xe1sicos de Linux",description:"\xbfQu\xe9 es un terminal?",source:"@site/docs/primeros-pasos/primeros-pasos.md",sourceDirName:"primeros-pasos",slug:"/primeros-pasos/",permalink:"/explorer-course-ai/docs/primeros-pasos/",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Instalaciones Necesarias",permalink:"/explorer-course-ai/docs/primeros-pasos/instalaciones"},next:{title:"Introducci\xf3n de GIT",permalink:"/explorer-course-ai/docs/primeros-pasos/instrucciones-basicas-git"}},l={},c=[{value:"\xbfQu\xe9 es un terminal?",id:"qu\xe9-es-un-terminal",level:2},{value:"Comandos",id:"comandos",level:2},{value:"\xbfEn qu\xe9 carpeta estoy? (pwd)",id:"en-qu\xe9-carpeta-estoy-pwd",level:3},{value:"Listar ficheros (ls)",id:"listar-ficheros-ls",level:3},{value:"Cambiar de carpetas (cd)",id:"cambiar-de-carpetas-cd",level:3},{value:"Resumen de comandos:",id:"resumen-de-comandos",level:2}],p={toc:c};function u(e){let{components:r,...a}=e;return(0,t.kt)("wrapper",(0,o.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"comandos-b\xe1sicos-de-linux"},"Comandos b\xe1sicos de Linux"),(0,t.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/bwvyhMRBMnQ",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,t.kt)("h2",{id:"qu\xe9-es-un-terminal"},"\xbfQu\xe9 es un terminal?"),(0,t.kt)("p",null,"La terminal (tambi\xe9n conocida como consola, terminal o s\xedmbolo del sistema) es una forma generalizada de llamar a la interfaz de usuario de l\xednea de comandos: una pantalla (generalmente, de color de fondo negro sobre letras blancas) donde escribiendo comandos (secuencias de palabras especiales) ordenamos al sistema realizar acciones concretas."),(0,t.kt)("p",null,"La l\xednea de comandos es una aplicaci\xf3n en la que puedes escribir y ejecutar comandos para realizar tareas como:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Navegar por las carpetas de tu computador."),(0,t.kt)("li",{parentName:"ul"},"Manipular archivos (crear, editar, copiar, mover y eliminar)."),(0,t.kt)("li",{parentName:"ul"},"Conectarte a servidores remotos."),(0,t.kt)("li",{parentName:"ul"},"Crear scripts que te ayuden con tus tareas diarias.")),(0,t.kt)("h2",{id:"comandos"},"Comandos"),(0,t.kt)("h3",{id:"en-qu\xe9-carpeta-estoy-pwd"},"\xbfEn qu\xe9 carpeta estoy? (pwd)"),(0,t.kt)("p",null,"En la l\xednea de comandos siempre vas a estar ubicado(a) sobre una ruta (carpeta) de tu sistema. Para conocer la ruta actual podemos utilizar el comando ",(0,t.kt)("inlineCode",{parentName:"p"},"pwd")," (print work directory)"),(0,t.kt)("p",null,"Nota: \xa1No olvides el Enter al final de cada comando para ejecutarlo!"),(0,t.kt)("h3",{id:"listar-ficheros-ls"},"Listar ficheros (ls)"),(0,t.kt)("p",null,"Para ver los ficheros y carpetas del directorio actual, basta con utilizar el comando ",(0,t.kt)("inlineCode",{parentName:"p"},"ls")," (LiSt files). Esto mostrar\xe1 una lista en horizontal con todos los ficheros y carpetas encontradas."),(0,t.kt)("h3",{id:"cambiar-de-carpetas-cd"},"Cambiar de carpetas (cd)"),(0,t.kt)("p",null,"Para movernos entre carpetas, utilizaremos el comando cd (change directory) seguido del nombre de la carpeta (movimiento relativo) o ruta completa (movimiento absoluto) a la que queremos acceder. Ten en cuenta que, al escribir el nombre de la carpeta o ruta, puedes pulsar TAB y el sistema te sugiere las opciones que encajen con lo que has escrito (o autocompleta si solo hay una opci\xf3n), de modo que no tendr\xe1s que escribirlo por completo.\nPor ejemplo, si quieres ir a la carpeta ra\xedz de tu sistema debes escribir:\n",(0,t.kt)("inlineCode",{parentName:"p"},"cd /")),(0,t.kt)("h2",{id:"resumen-de-comandos"},"Resumen de comandos:"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"pwd"),": Me permite conocer la ruta actual (Donde estoy ubicado)."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"ls"),": Ver los elementos de la carpeta donde estoy ubicado. "),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"clear"),": Limpiar la pantalla. "),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"ls -la"),": Ver detalle de la informaci\xf3n con los permisos que tienen esos recursos. "),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"mkdir"),": Crear un directorio. "),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"rm \u2013 rf")," ","[nombre directorio]",": Borrar de forma forzosa el recurso. "),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"cd")," ","[carpeta]",": Dirigirme a una carpeta deseada. "),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"cd .."),":  Devolverme a una ruta o carpeta anterior."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"touch")," ","[NombreNuevoArchivo]"," : Crear un archivo de cualquier tipo distinto a una carpeta."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"nano")," ","[NombreNuevoArchivo]"," : Crear un archivo."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"cat")," ","[NombreNuevoArchivo]"," : Mostrar los datos de un archivo."))}u.isMDXComponent=!0}}]);