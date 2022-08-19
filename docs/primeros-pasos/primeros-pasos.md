---
sidebar_position: 2
---

# Comandos básicos de Linux

<iframe width="560" height="315" src="https://www.youtube.com/embed/bwvyhMRBMnQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


## ¿Qué es un terminal?
La terminal (también conocida como consola, terminal o símbolo del sistema) es una forma generalizada de llamar a la interfaz de usuario de línea de comandos: una pantalla (generalmente, de color de fondo negro sobre letras blancas) donde escribiendo comandos (secuencias de palabras especiales) ordenamos al sistema realizar acciones concretas.

La línea de comandos es una aplicación en la que puedes escribir y ejecutar comandos para realizar tareas como:
- Navegar por las carpetas de tu computador.
- Manipular archivos (crear, editar, copiar, mover y eliminar).
- Conectarte a servidores remotos.
- Crear scripts que te ayuden con tus tareas diarias.

## Comandos
### ¿En qué carpeta estoy? (pwd)
En la línea de comandos siempre vas a estar ubicado(a) sobre una ruta (carpeta) de tu sistema. Para conocer la ruta actual podemos utilizar el comando `pwd` (print work directory)

Nota: ¡No olvides el Enter al final de cada comando para ejecutarlo!


### Listar ficheros (ls) 
Para ver los ficheros y carpetas del directorio actual, basta con utilizar el comando `ls` (LiSt files). Esto mostrará una lista en horizontal con todos los ficheros y carpetas encontradas.

### Cambiar de carpetas (cd)
Para movernos entre carpetas, utilizaremos el comando cd (change directory) seguido del nombre de la carpeta (movimiento relativo) o ruta completa (movimiento absoluto) a la que queremos acceder. Ten en cuenta que, al escribir el nombre de la carpeta o ruta, puedes pulsar TAB y el sistema te sugiere las opciones que encajen con lo que has escrito (o autocompleta si solo hay una opción), de modo que no tendrás que escribirlo por completo.
Por ejemplo, si quieres ir a la carpeta raíz de tu sistema debes escribir:
`cd /`

## Resumen de comandos:
`pwd`: Me permite conocer la ruta actual (Donde estoy ubicado).

`ls`: Ver los elementos de la carpeta donde estoy ubicado. 

`clear`: Limpiar la pantalla. 

`ls -la`: Ver detalle de la información con los permisos que tienen esos recursos. 

`mkdir`: Crear un directorio. 

`rm – rf` [nombre directorio]: Borrar de forma forzosa el recurso. 

`cd` [carpeta]: Dirigirme a una carpeta deseada. 

`cd ..`:  Devolverme a una ruta o carpeta anterior.

`touch` [NombreNuevoArchivo] : Crear un archivo de cualquier tipo distinto a una carpeta.

`nano` [NombreNuevoArchivo] : Crear un archivo.

`cat` [NombreNuevoArchivo] : Mostrar los datos de un archivo.
