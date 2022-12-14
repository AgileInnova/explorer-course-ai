---
sidebar_position: 6
---

# Eventos

<div style={{ position: "relative" }}>
  <div className="card-demo cardDemo">
    <div className="card" style={{ backgroundColor: "#242526" }}>
      <div className="card__header">
        <h3 style={{ color: "#FFF", textAlign: "center" }}>Tareas</h3>
      </div>
      <div className="card__body">
        <a href="https://github.com/Agile-Innova-Academy/explorer-course/tree/main/2.%20Javascript/06-Eventos/Tarea-01" target="_blank">
          <button
            className="button button--primary button--block"
            style={{ marginBottom: "10px" }}
          >
            Tarea 1
          </button>
        </a>
         <a href="https://github.com/Agile-Innova-Academy/explorer-course/tree/main/2.%20Javascript/06-Eventos/Tarea-02" target="_blank">
          <button
            className="button button--primary button--block"
            style={{ marginBottom: "10px" }}
          >
            Tarea 2
          </button>
        </a>
         <a href="https://github.com/Agile-Innova-Academy/explorer-course/tree/main/2.%20Javascript/06-Eventos/Tarea-03" target="_blank">
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

¿Qué son los **Eventos**?

<iframe className="videos" src="https://www.youtube.com/embed/xVZjsrtOPGg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


Los eventos se envían para notificar al código de cosas interesantes que han ocurrido. 
Los eventos pueden representar cualquier cosa desde las interacciones básicas del usuario para notificaciones automatizadas de las cosas que suceden en el modelo de representación.

Podemos identificar como eventos, cuando el usuario mueve el mouse, clic sobre algún elemento, etc.

### Documentación técnica eventos:

https://developer.mozilla.org/es/docs/Web/Events

### addEventListener()

El método addEventListener() nos sirve para registra un evento a un objeto en específico. El objeto especifico puede ser un simple elemento en un archivo, el mismo documento, una ventana o un XMLHttpRequest.

addEventListener() es una función o método incorporado en JavaScript que toma el evento y lo pone a escuchar, y un segundo argumento para llamar cada vez que se desencadena el evento descrito. Se puede agregar cualquier número de controladores de eventos a un solo elemento sin sobrescribir los controladores de eventos existentes.

Parámetros:

- evento: Evento puede ser cualquier evento de JavaScript válido. Los eventos se utilizan sin el prefijo "on", como "clic" en lugar de "onclick" o "mousedown" en lugar de "onmousedown", a continuación veremos varios eventos que podemos utilizar. 
- listener (función de controlador): Puede ser una función de JavaScript que responde al evento que se produce.
```javascript
element.addEventListener (event, listener);
```
## Eventos

### click
Se dispara cuando se presiona el botón de un dispositivo de entrada sobre un elemento.

### mouseover
Se dispara en un elemento cuando el cursor esta sobre el elemento o uno de sus elementos hijos.

### mouseout
Se dispara cuando el cursor deja de estar sobre el elemento. 

### focus
Se dispara cuando un elemento ha recibido el foco. Generalmente se activa cuando el usuario hace clic, toca un elemento o lo selecciona con la tecla "Tab" del teclado.

### blur
Es lo contrario a focus, se dispara cuando salimos del foco de un elemento. 

### keypress
Se dispara luego de presionada la tecla.

### keyup
Se dispara cuando levanto el dedo de la tecla. 

### DOMContentLoaded
Se dispara cuando el documento HTML ha sido completamente cargado y parseado, sin esperar hojas de estilo, images y subframes para  finalizar la carga
    
### load
Se dispara cuando se ha cargado toda la página, incluidos todos los recursos dependientes, como hojas de estilo e imágenes. 

### beforeunload/unload
Se dispara cuando el usuario sale de la pagina.
