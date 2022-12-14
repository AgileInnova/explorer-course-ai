---
sidebar_position: 5
---

# Formularios

<div style={{ position: "relative" }}>
  <div className="card-demo cardDemo">
    <div className="card" style={{ backgroundColor: "#242526" }}>
      <div className="card__header">
        <h3 style={{ color: "#FFF", textAlign: "center" }}>Tareas</h3>
      </div>
      <div className="card__body">
        <a href="https://github.com/Agile-Innova-Academy/explorer-course/tree/main/3.%20HTML%20y%20CSS/05-Formularios/Tarea-01" target="_blank">
          <button
            className="button button--primary button--block"
            style={{ marginBottom: "10px" }}
          >
            Tarea 1
          </button>
        </a>
        <a href="https://github.com/Agile-Innova-Academy/explorer-course/tree/main/3.%20HTML%20y%20CSS/05-Formularios/Tarea-02" target="_blank">
          <button
            className="button button--primary button--block"
            style={{ marginBottom: "10px" }}
          >
            Tarea 2
          </button>
        </a>
        <a href="https://github.com/Agile-Innova-Academy/explorer-course/tree/main/3.%20HTML%20y%20CSS/05-Formularios/Tarea-03" target="_blank">
          <button
            className="button button--primary button--block"
            style={{ marginBottom: "10px" }}
          >
            Tarea 3
          </button>
        </a>
      </div>
    </div>
  </div>
</div>

***Etiquetas básicas***
<iframe className="videos" src="https://www.youtube.com/embed/KBi9FiS9Bmc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

***Etiquetas de respuesta***
<iframe className="videos" src="https://www.youtube.com/embed/s1lRXozGcQI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


## ¿Para qué sirven los Formularios?

 Los formularios sirven para enviar información al servidor, ya sea para actualizar datos de alguna cuenta, realizar una búsqueda en algún sitio web, cambiar los datos de nuestro perfil. Cualquier gestión de este tipo se hace a través de formularios y prácticamente cualquier web que no sea de consulta de información contiene uno como mínimo.

***¿Cómo funcionan los formularios?***

Los formularios funcionan de la siguiente manera:
El usuario ingresa la información y pulsa el botón enviar, esa información se envía al servidor que será el que se encargue de procesarla. La envía de la misma manera que enviamos una petición para ver una página, pero en este caso junto con la petición envía todos los datos que el usuario ha introducido.

***Nuestro primer formulario en HTML***
Ahora que ya sabemos un poco qué es y para qué sirven los formularios vamos a ver cómo escribir el HTML necesario para generarlos.

En HTML antes de escribir un campo de formulario, por norma general (aunque no es estrictamente necesario), se escribe previamente la etiqueta `<form>` que será la que utilicemos para envolver los campos. Esta etiqueta suele ir siempre acompañada de dos atributos `method` y `action`.

El atributo `method` sirve para especificar el método que utilizaremos para enviar nuestra información. Los metodos usado para el envío de la información son:
get: para enviar información datos generales.
post: Para enviar información confidencial (contraseñas, dni, cuentas bancarias, número de tarjeta, etc).

El atributo `action` se usa para indicar la dirección del servidor donde se envían los datos del formulario.

***Tipos de formatos en una etiqueta input:***

`hidden`: un control oculto utilizado para enviar información al servidor, típicamente manejado por programas.

`text`: un control usado para la entrada de una sola línea de texto.

`search`: igaul a text pero con fines de búsqueda.

`tel`: un control usado para proveer un número de teléfono.

`url`: una caja de texto usada para el ingreso de un único URL absoluto.

`email`: un control diseñado para editar una o más direcciones de e-mail.

`password`: una caja de texto para la edición de contraseñas, donde los caracteres son representados por puntos.

`date`: un control para ingresar una fecha específica.

`month`: un control para ingresar un mes específico.

`week`: un control para ingresar una semana específica.

`time`: un control para ingresar una hora específica.

`datetime-local`: un control para ingresar una fecha y hora local específica.

`number`: un control para ingresar un número.

`range`: un control para ingresar uno o dos números dentro de un rango.

`color`: un control para ingresar un color.

`checkbox`: un control para ingresar un valor booleano (verdadero/falso).

`radio`: un control para elegir una única opción entre varias.

`file`: un control usado para subir archivos al servidor.

`submit`: un botón usado para enviar el formulario.

`image`: igual a submit pero con la habilidad de verse como una imagen en lugar de usar la apariencia predeterminada de los botones.

`reset`: un botón usado para reiniciar los controles del formulario a sus valores iniciales.

`button`: un botón sin una acción predeterminada asociada.


Ejemplo de un formulario en HTML:

```html
 <form action="">
            <!-- Campo para solitar texto-->
            <label for="nombre">Nombre</label> 
            <input type="text" id="nombre" placeholder="Nombre">
            <br>

            <!-- Campo para solitar cantraseñas-->
            <label for="contrasena">Contraseña</label>
            <input type="password" id="contresena">
            <br>

            <!-- Campo para solitar correos-->
            <label for="email">Email:</label>
            <input type="email" id="email">
            <br>

            <!-- Campo para lista desplegable-->
            <label for="pais">País</label>
            <select name="pais" id="pais">
                <option value="colombia" selected="true">Colombia</option>
                <option value="mexico">México</option>
            </select>
            <br>

            <!-- Campo para una unica respuesta-->
            <label for="genero">Genero:</label>
            <label for="femenino">Femenino</label>
            <input type="radio" id="femenino" name="genero">
            <label for="masculino">Masculino</label>
            <input type="radio" id="masculino" name="genero">
            <br>

            <!-- Campo para respuesta multiple-->
            <label for="gusto">Gustos</label>
            <br>
            <label for="pollo">Pollo</label>
            <input type="checkbox" id="pollo">
            <label for="helado">Helado</label>
            <input type="checkbox" id="helado">
            <br>

            <!-- Campo para agregar parrafos-->
            <label for="mensaje">Mensaje</label>
            <br>
            <textarea name="mensaje" id="mensaje" cols="30" rows="10"></textarea>
            <br>

            <!-- Campo para cargar archivo-->
            <label for="hoja">Hoja de vida</label>
            <input type="file" id="hoja">
            <br>

            <!-- Campo para insertar fechas-->
            <label for="fecha">Fecha inscripción</label>
            <input type="date">
            <br>
            
            <!-- Campo oculto-->
            <label for="">hidden</label>
            <input type="hidden">
        </form>
```
[Ver formulario en Replit](https://replit.com/@SilviaGarcia1/Formulario#index.html)


***Atributos básicos***

_name:_

El atributo nombre es el identificador del campo(control). Este nombre será enviado por el navegador al agente procesador, emparejado con el contenido del atributo value. Ambos atributos juntos conformarán un par nombre-valor que será utilizado para procesar la información del formulario.

_type:_ 

El atributo type es un valor que indica el tipo de campo que representa este elemento,

_Required:_

El atributo required sirve para establecer que un campo es obligatorio y debe ser rellenado antes de enviarse el formulario. 
```html
<!-- Campo obligatorio -->
<input type="text" id="firstName" name="firstName" required>

<!-- Campo no obligatorio -->
<input type="text" id="firstName" name="firstName">
```

_value:_

El atributo value sirve para definir el valor inicial de un campo, su contenido. De esta forma, si creamos un `input` de texto con un atributo `value="Calle Méndez Álvaro"`, por defecto dentro del campo se verá escrito "Calle Méndez Álvaro".

```html
<label for="address">Dirección:</label>
<input  type="text" id="address" name="address" value="Calle Méndez Álvaro">
```

_Disabled:_

El atributo disabled sirve para desactivar un campo de un formulario.
```html
<input type="text" id="address" name="address" value="Calle Méndez Álvaro" disabled>
```

_placeholder:_

El atributo placeholder nos permite dar una pista acerca de la información que se espera sea provista en el control.

