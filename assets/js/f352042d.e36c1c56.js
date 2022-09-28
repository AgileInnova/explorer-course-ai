"use strict";(self.webpackChunkexplorer_course=self.webpackChunkexplorer_course||[]).push([[9007],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>d});var i=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,i,o=function(e,a){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),p=function(e){var a=i.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},c=function(e){var a=p(e.components);return i.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},u=i.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return t?i.createElement(g,n(n({ref:a},c),{},{components:t})):i.createElement(g,n({ref:a},c))}));function d(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,n=new Array(r);n[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,n[1]=l;for(var p=2;p<r;p++)n[p]=t[p];return i.createElement.apply(null,n)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1484:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>n,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=t(7462),o=(t(7294),t(3905));const r={sidebar_position:3},n="Introducci\xf3n de GIT",l={unversionedId:"primeros-pasos/instrucciones-basicas-git",id:"primeros-pasos/instrucciones-basicas-git",title:"Introducci\xf3n de GIT",description:"GitHub Page",source:"@site/docs/primeros-pasos/instrucciones-basicas-git.md",sourceDirName:"primeros-pasos",slug:"/primeros-pasos/instrucciones-basicas-git",permalink:"/explorer-course-ai/docs/primeros-pasos/instrucciones-basicas-git",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Comandos b\xe1sicos de Linux",permalink:"/explorer-course-ai/docs/primeros-pasos/"},next:{title:"Instrucciones b\xe1sicas MarkDown",permalink:"/explorer-course-ai/docs/primeros-pasos/instrucciones-basicas-markdown"}},s={},p=[{value:"\xbfQu\xe9 es Git?",id:"qu\xe9-es-git",level:2},{value:"\xbfQu\xe9 es GitHub?",id:"qu\xe9-es-github",level:2},{value:"Primeros pasos:",id:"primeros-pasos",level:3},{value:"Trabajando en un proyecto",id:"trabajando-en-un-proyecto",level:2},{value:"Resumen de los comandos m\xe1s importantes",id:"resumen-de-los-comandos-m\xe1s-importantes",level:2}],c={toc:p};function m(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introducci\xf3n-de-git"},"Introducci\xf3n de GIT"),(0,o.kt)("iframe",{className:"videos",src:"https://www.youtube.com/embed/EhPeURxzF9E",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"GitHub Page"))),(0,o.kt)("iframe",{className:"videos",src:"https://www.youtube.com/embed/XHCLfAfnlyM",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,o.kt)("p",null,"Un Sistema de Control de Versiones (SCV) es una aplicaci\xf3n que permite gestionar los cambios que se realizan sobre los elementos de un proyecto o repositorio, guardando as\xed versiones del mismo en todas sus fases de desarrollo."),(0,o.kt)("h2",{id:"qu\xe9-es-git"},"\xbfQu\xe9 es Git?"),(0,o.kt)("p",null,"Git es un sistema de control de versiones de c\xf3digo abierto ideado por Linus Torvalds (el padre del sistema operativo Linux) y actualmente es el sistema de control de versiones m\xe1s extendido. A diferencia de otros SCV Git tiene una arquitectura distribuida lo que significa que en lugar de guardar todos los cambios de un proyecto en un \xfanico sitio, cada usuario contiene una copia del repositorio con el historial de cambios completo del proyecto, esto aumenta significativamente su rendimiento."),(0,o.kt)("h2",{id:"qu\xe9-es-github"},"\xbfQu\xe9 es ",(0,o.kt)("a",{parentName:"h2",href:"https://github.com/"},"GitHub"),"?"),(0,o.kt)("p",null,"GitHub es una plataforma que permite a los usuarios socializar con personas de ideas afines, puedes seguir a las personas y ver qu\xe9 hacen o con qui\xe9n se conectan. "),(0,o.kt)("h3",{id:"primeros-pasos"},"Primeros pasos:"),(0,o.kt)("p",null,"Lo primero que debes hacer despu\xe9s de que has instalado git es configurar el nombre y correo que se va a utilizar para firmar cada commit que hagas. Utiliza los comandos"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},'git config --global user.name "Nombre Completo" ')," "),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},'git config --global user.email "email@example.com" ')),(0,o.kt)("p",null,"  validar la informaci\xf3n de configuracion "),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},'git config --global -e "email@example.com" ')),(0,o.kt)("p",null,' Por ejemplo, si tu nombre fuera "Simon Cano" utilizar\xedas el siguiente comando:'),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},'git config --global user.name "Simon Cano"')," "),(0,o.kt)("p",null,' Y asumiendo que el correo es "',(0,o.kt)("a",{parentName:"p",href:"mailto:simon@gmail.com"},"simon@gmail.com"),'" utilizar\xedas el siguiente comando: '),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},'git config --global user.email "simon@gmail.com"')," ",(0,o.kt)("strong",{parentName:"p"},"Correo de la cuenta de git")),(0,o.kt)("h2",{id:"trabajando-en-un-proyecto"},"Trabajando en un proyecto"),(0,o.kt)("p",null,"El flujo de trabajo m\xe1s simple con git es el siguiente:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Inicializa el repositorio (esto va a crear una carpeta oculta .git dentro del proyecto):"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"git init")," ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Trabaja en el c\xf3digo: crea, modifica y elimina archivos.\nPor ejemplo, vamos a construir una p\xe1gina web en donde necesitamos un archivo index.html, un archivo index.js  y un archivo style.css")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Prepara los cambios que vas a incluir en el siguiente commit. Para incluir todos los cambios utiliza:\n",(0,o.kt)("inlineCode",{parentName:"p"},'git add ." ')," ",(0,o.kt)("em",{parentName:"p"},"Para agregar todos los archivos")," "),(0,o.kt)("p",{parentName:"li"}," ",(0,o.kt)("inlineCode",{parentName:"p"},"git add -A ")," ",(0,o.kt)("em",{parentName:"p"},"Para agregar todos los archivos, esta es otra de incluir los archivos")," "),(0,o.kt)("p",{parentName:"li"}," ",(0,o.kt)("inlineCode",{parentName:"p"},"git add <nombreArchivo> ")," ",(0,o.kt)("em",{parentName:"p"},"Para agregar solo un archivo")," ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Crea el commit:\n",(0,o.kt)("inlineCode",{parentName:"p"},"git commit -m 'El mensaje que describe los cambios'"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Repite los pasos 2, 3 y 4 cada vez que realices un cambio en tu proyecto.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Vincular con un repositorio"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"En ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/"},"GitHub")," crear un repositorio con el nombre de tu proyecto."),(0,o.kt)("li",{parentName:"ul"},"El repositorio debe ir vacio para este ejemplo (Sin Readme, sin licencias, entro otros). "))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Agregar la URL del repositorio por medio del siguiente comando, la URL del repositorio se ubica en la parte superior de la plataforma de GitHub despu\xe9s de crear el repositorio (por ejemplo, ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/AcademiaGeek/Prueba.git"},"https://github.com/AcademiaGeek/Prueba.git")),") :"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"git remote add origin <URL repositorio> ")," ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Obtener informaci\xf3n nueva que se encuentre en el repositorio de GitHub, que haya sido subida por otro colaborador y sea necesaria tenerla de forma local, en este caso no lo vamos a ejecutar ya que no hay cambios porque acabamos de crear el repositorio. "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"git pull origin <Raman main> ")," ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Entregar los cambios desde local al repositorio remoto, esto significa que cuando ejecutes este comando tus datos se van a poder visualizar desde la plataforma de GitHub."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"git push origin <Raman main> ")))),(0,o.kt)("h2",{id:"resumen-de-los-comandos-m\xe1s-importantes"},"Resumen de los comandos m\xe1s importantes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"git config --global user.name <name> ")," : Define el nombre que se va a utilizar en los commits de forma global (para el usuario actual)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"git config --global user.email <email>")," : Define el correo electr\xf3nico que se va a utilizar en los commits de forma global (para el usuario actual)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"git config --global -e")," : Comando para verificar la informaci\xf3n de la configuraci\xf3n"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"git init")," : este comando se encarga de iniciar el repositorio (esto va a crear una carpeta oculta .git en la carpeta donde ejecutes este comando)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"git add .")," : Prepara los archivos para el commit ."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"git commit -m <descripci\xf3n de los cambios>")," : Crea un commit a partir de los cambios que est\xe1n en el index con el mensaje que se le pase a la opci\xf3n -m ."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"git status")," : Muestra la lista de archivos con cambios desde el \xfaltimo commit y los que van a ser inclu\xeddos en el siguiente commit."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"git remote add origin <URL repositorio> "),": Indicar la direcci\xf3n del repositorio"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"git push origin <Raman main> "),": Entregar los cambios"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"git pull origin <Raman main> "),": Bajar los cambios")))}m.isMDXComponent=!0}}]);