"use strict";(self.webpackChunkexplorer_course=self.webpackChunkexplorer_course||[]).push([[6146],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>d});var r=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var p=r.createContext({}),s=function(e){var a=r.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},u=function(e){var a=s(e.components);return r.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=t,b=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(b,l(l({ref:a},u),{},{components:n})):r.createElement(b,l({ref:a},u))}));function d(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8703:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),t=(n(7294),n(3905));const o={sidebar_position:5},l="Formularios",i={unversionedId:"tutorial-html/formularios",id:"tutorial-html/formularios",title:"Formularios",description:"Etiquetas b\xe1sicas",source:"@site/docs/tutorial-html/formularios.md",sourceDirName:"tutorial-html",slug:"/tutorial-html/formularios",permalink:"/explorer-course-ai/docs/tutorial-html/formularios",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"HTML - CSS Intermedio",permalink:"/explorer-course-ai/docs/tutorial-html/html-css-intermedio"},next:{title:"Unidades y posicionamiento",permalink:"/explorer-course-ai/docs/tutorial-html/unidades-posicionamiento"}},p={},s=[{value:"\xbfPara qu\xe9 sirven los Formularios?",id:"para-qu\xe9-sirven-los-formularios",level:2}],u={toc:s};function c(e){let{components:a,...n}=e;return(0,t.kt)("wrapper",(0,r.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"formularios"},"Formularios"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("em",{parentName:"strong"},"Etiquetas b\xe1sicas"))),(0,t.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/KBi9FiS9Bmc",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("em",{parentName:"strong"},"Etiquetas de respuesta"))),(0,t.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/s1lRXozGcQI",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,t.kt)("h2",{id:"para-qu\xe9-sirven-los-formularios"},"\xbfPara qu\xe9 sirven los Formularios?"),(0,t.kt)("p",null," Los formularios sirven para enviar informaci\xf3n al servidor, ya sea para actualizar datos de alguna cuenta, realizar una b\xfasqueda en alg\xfan sitio web, cambiar los datos de nuestro perfil. Cualquier gesti\xf3n de este tipo se hace a trav\xe9s de formularios y pr\xe1cticamente cualquier web que no sea de consulta de informaci\xf3n contiene uno como m\xednimo."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("em",{parentName:"strong"},"\xbfC\xf3mo funcionan los formularios?"))),(0,t.kt)("p",null,"Los formularios funcionan de la siguiente manera:\nEl usuario ingresa la informaci\xf3n y pulsa el bot\xf3n enviar, esa informaci\xf3n se env\xeda al servidor que ser\xe1 el que se encargue de procesarla. La env\xeda de la misma manera que enviamos una petici\xf3n para ver una p\xe1gina, pero en este caso junto con la petici\xf3n env\xeda todos los datos que el usuario ha introducido."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("em",{parentName:"strong"},"Nuestro primer formulario en HTML")),"\nAhora que ya sabemos un poco qu\xe9 es y para qu\xe9 sirven los formularios vamos a ver c\xf3mo escribir el HTML necesario para generarlos."),(0,t.kt)("p",null,"En HTML antes de escribir un campo de formulario, por norma general (aunque no es estrictamente necesario), se escribe previamente la etiqueta ",(0,t.kt)("inlineCode",{parentName:"p"},"<form>")," que ser\xe1 la que utilicemos para envolver los campos. Esta etiqueta suele ir siempre acompa\xf1ada de dos atributos ",(0,t.kt)("inlineCode",{parentName:"p"},"method")," y ",(0,t.kt)("inlineCode",{parentName:"p"},"action"),"."),(0,t.kt)("p",null,"El atributo ",(0,t.kt)("inlineCode",{parentName:"p"},"method")," sirve para especificar el m\xe9todo que utilizaremos para enviar nuestra informaci\xf3n. Los metodos usado para el env\xedo de la informaci\xf3n son:\nget: para enviar informaci\xf3n datos generales.\npost: Para enviar informaci\xf3n confidencial (contrase\xf1as, dni, cuentas bancarias, n\xfamero de tarjeta, etc)."),(0,t.kt)("p",null,"El atributo ",(0,t.kt)("inlineCode",{parentName:"p"},"action")," se usa para indicar la direcci\xf3n del servidor donde se env\xedan los datos del formulario."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("em",{parentName:"strong"},"Tipos de formatos en una etiqueta input:"))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"hidden"),": un control oculto utilizado para enviar informaci\xf3n al servidor, t\xedpicamente manejado por programas."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"text"),": un control usado para la entrada de una sola l\xednea de texto."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"search"),": igaul a text pero con fines de b\xfasqueda."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"tel"),": un control usado para proveer un n\xfamero de tel\xe9fono."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"url"),": una caja de texto usada para el ingreso de un \xfanico URL absoluto."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"email"),": un control dise\xf1ado para editar una o m\xe1s direcciones de e-mail."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"password"),": una caja de texto para la edici\xf3n de contrase\xf1as, donde los caracteres son representados por puntos."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"date"),": un control para ingresar una fecha espec\xedfica."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"month"),": un control para ingresar un mes espec\xedfico."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"week"),": un control para ingresar una semana espec\xedfica."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"time"),": un control para ingresar una hora espec\xedfica."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"datetime-local"),": un control para ingresar una fecha y hora local espec\xedfica."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"number"),": un control para ingresar un n\xfamero."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"range"),": un control para ingresar uno o dos n\xfameros dentro de un rango."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"color"),": un control para ingresar un color."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"checkbox"),": un control para ingresar un valor booleano (verdadero/falso)."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"radio"),": un control para elegir una \xfanica opci\xf3n entre varias."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"file"),": un control usado para subir archivos al servidor."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"submit"),": un bot\xf3n usado para enviar el formulario."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"image"),": igual a submit pero con la habilidad de verse como una imagen en lugar de usar la apariencia predeterminada de los botones."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"reset"),": un bot\xf3n usado para reiniciar los controles del formulario a sus valores iniciales."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"button"),": un bot\xf3n sin una acci\xf3n predeterminada asociada."),(0,t.kt)("p",null,"Ejemplo de un formulario en HTML:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-html"},' <form action="">\n            \x3c!-- Campo para solitar texto--\x3e\n            <label for="nombre">Nombre</label> \n            <input type="text" id="nombre" placeholder="Nombre">\n            <br>\n\n            \x3c!-- Campo para solitar cantrase\xf1as--\x3e\n            <label for="contrasena">Contrase\xf1a</label>\n            <input type="password" id="contresena">\n            <br>\n\n            \x3c!-- Campo para solitar correos--\x3e\n            <label for="email">Email:</label>\n            <input type="email" id="email">\n            <br>\n\n            \x3c!-- Campo para lista desplegable--\x3e\n            <label for="pais">Pa\xeds</label>\n            <select name="pais" id="pais">\n                <option value="colombia" selected="true">Colombia</option>\n                <option value="mexico">M\xe9xico</option>\n            </select>\n            <br>\n\n            \x3c!-- Campo para una unica respuesta--\x3e\n            <label for="genero">Genero:</label>\n            <label for="femenino">Femenino</label>\n            <input type="radio" id="femenino" name="genero">\n            <label for="masculino">Masculino</label>\n            <input type="radio" id="masculino" name="genero">\n            <br>\n\n            \x3c!-- Campo para respuesta multiple--\x3e\n            <label for="gusto">Gustos</label>\n            <br>\n            <label for="pollo">Pollo</label>\n            <input type="checkbox" id="pollo">\n            <label for="helado">Helado</label>\n            <input type="checkbox" id="helado">\n            <br>\n\n            \x3c!-- Campo para agregar parrafos--\x3e\n            <label for="mensaje">Mensaje</label>\n            <br>\n            <textarea name="mensaje" id="mensaje" cols="30" rows="10"></textarea>\n            <br>\n\n            \x3c!-- Campo para cargar archivo--\x3e\n            <label for="hoja">Hoja de vida</label>\n            <input type="file" id="hoja">\n            <br>\n\n            \x3c!-- Campo para insertar fechas--\x3e\n            <label for="fecha">Fecha inscripci\xf3n</label>\n            <input type="date">\n            <br>\n            \n            \x3c!-- Campo oculto--\x3e\n            <label for="">hidden</label>\n            <input type="hidden">\n        </form>\n')),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://replit.com/@SilviaGarcia1/Formulario#index.html"},"Ver formulario en Replit")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("em",{parentName:"strong"},"Atributos b\xe1sicos"))),(0,t.kt)("p",null,(0,t.kt)("em",{parentName:"p"},"name:")),(0,t.kt)("p",null,"El atributo nombre es el identificador del campo(control). Este nombre ser\xe1 enviado por el navegador al agente procesador, emparejado con el contenido del atributo value. Ambos atributos juntos conformar\xe1n un par nombre-valor que ser\xe1 utilizado para procesar la informaci\xf3n del formulario."),(0,t.kt)("p",null,(0,t.kt)("em",{parentName:"p"},"type:")," "),(0,t.kt)("p",null,"El atributo type es un valor que indica el tipo de campo que representa este elemento,"),(0,t.kt)("p",null,(0,t.kt)("em",{parentName:"p"},"Required:")),(0,t.kt)("p",null,"El atributo required sirve para establecer que un campo es obligatorio y debe ser rellenado antes de enviarse el formulario. "),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Campo obligatorio --\x3e\n<input type="text" id="firstName" name="firstName" required>\n\n\x3c!-- Campo no obligatorio --\x3e\n<input type="text" id="firstName" name="firstName">\n')),(0,t.kt)("p",null,(0,t.kt)("em",{parentName:"p"},"value:")),(0,t.kt)("p",null,"El atributo value sirve para definir el valor inicial de un campo, su contenido. De esta forma, si creamos un ",(0,t.kt)("inlineCode",{parentName:"p"},"input")," de texto con un atributo ",(0,t.kt)("inlineCode",{parentName:"p"},'value="Calle M\xe9ndez \xc1lvaro"'),', por defecto dentro del campo se ver\xe1 escrito "Calle M\xe9ndez \xc1lvaro".'),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-html"},'<label for="address">Direcci\xf3n:</label>\n<input  type="text" id="address" name="address" value="Calle M\xe9ndez \xc1lvaro">\n')),(0,t.kt)("p",null,(0,t.kt)("em",{parentName:"p"},"Disabled:")),(0,t.kt)("p",null,"El atributo disabled sirve para desactivar un campo de un formulario."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-html"},'<input type="text" id="address" name="address" value="Calle M\xe9ndez \xc1lvaro" disabled>\n')),(0,t.kt)("p",null,(0,t.kt)("em",{parentName:"p"},"placeholder:")),(0,t.kt)("p",null,"El atributo placeholder nos permite dar una pista acerca de la informaci\xf3n que se espera sea provista en el control."))}c.isMDXComponent=!0}}]);