---
sidebar_position: 4
---

# HTML - CSS Intermedio

<div style={{ position: "relative" }}>
  <div className="card-demo cardDemo">
    <div className="card" style={{ backgroundColor: "#242526" }}>
      <div className="card__header">
        <h3 style={{ color: "#FFF", textAlign: "center" }}>Tareas</h3>
      </div>
      <div className="card__body">
        <a href="https://github.com/Agile-Innova-Academy/explorer-course/tree/main/3.%20HTML%20y%20CSS/04-HTML-CSS-intermedio/Tarea-01" target="_blank">
          <button
            className="button button--primary button--block"
            style={{ marginBottom: "10px" }}
          >
            Tarea 1
          </button>
        </a>
        <a href="https://github.com/Agile-Innova-Academy/explorer-course/tree/main/3.%20HTML%20y%20CSS/04-HTML-CSS-intermedio/Tarea-02" target="_blank">
          <button
            className="button button--primary button--block"
            style={{ marginBottom: "10px" }}
          >
            Tarea 2
          </button>
        </a>
        <a href="https://github.com/Agile-Innova-Academy/explorer-course/tree/main/3.%20HTML%20y%20CSS/04-HTML-CSS-intermedio/Tarea-03" target="_blank">
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

***Ejercicio parte 1***
<iframe className="videos" src="https://www.youtube.com/embed/YRWDRJkjMgs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

***Ejercicio parte 2***
<iframe className="videos" src="https://www.youtube.com/embed/-jaanNW3jSo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

***Ejercicio parte 3***
<iframe className="videos" src="https://www.youtube.com/embed/HlZrhAUbKV8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

***Ejercicio parte 4***
<iframe className="videos" src="https://www.youtube.com/embed/EqyfhxFwhNA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

## Modelo de caja y herramientas

En HTML cada elemento se representa visualmente como una caja, lo podemos ver f??cilmente a??adiendo un borde a un elemento HTML y viendo c??mo lo pinta el navegador.

El modelo de caja es una especificaci??n que define las caracter??sticas espec??ficas de esa caja y como infieren en el resto de elementos de la p??gina; es el que le dice al navegador c??mo debe pintar cada caja (elemento).

Antes de entrar en profundidad con los modelos de caja tenemos que ver conceptos b??sicos (alto, ancho, borde, margen y padding) y las formas b??sicas de visualizaci??n de los elementos HTML.

***Height, width, border, padding y margin***
Cada elemento tiene una altura (height) y anchura (width). Adem??s, puede tener otros atributos relacionados que influyen en su tama??o y su posici??n, que son el padding, los m??rgenes y los bordes:
- el borde de un elemento es una l??nea que puede tener distinto grosor y que encuadra el contenido del elemento
- el padding es la distancia desde el contenido del elemento hasta el borde
- el margen es la distancia desde borde del elemento hasta los elementos que est??n a su alrededor.

![](https://storage.googleapis.com/academia-geek-general-bucket/modulo-1/modulo_1_img_13.png)

***Visualizaci??n (display)***

La propiedad CSS display, se encarga de definir c??mo se va a visualizar un elemento HTML, c??mo va a colocarse en la p??gina y c??mo se colocar??n el resto de elementos respecto a este. Seg??n el valor que tenga asignado display, un elemento puede ocupar el ancho entero de su contenedor, ocupar solo el espacio que necesite para mostrar su contenido, mostrarse como si fuese una casilla de una tabla o directamente ocultarse.
Los navegadores web aplican por defecto un valor display a todos los elementos HTML de nuestra web. Hay muchos valores distintos para display pero, por el momento, nosotros solo veremos cuatro:
1. block
2. inline
3. inline-block
4. none

***Block***

Los elementos en bloque se muestran ocupando el ancho completo de su contenedor
[Elementos en bloque](https://codepen.io/adalab/pen/WXQgrq)

Usando CSS podemos hacer que un elemento que no se muestra en bloque cambie y se muestre de esta manera. Para ello aplicaremos `display: block` en el elemento. De esta forma, si queremos hacer que un elemento con la clase block se muestre en bloque, utilizaremos el siguiente c??digo:
```css
.block {
  display: block;
}
```

***Inline***

Los elementos en l??nea o inline son aquellos que ocupan el ancho de su contenido. En estos, el tama??o ser?? exactamente el tama??o de su contenido y estos pueden colocarse uno al lado del otro hasta que no quede m??s espacio restante en la fila.

[Elementos en linea](https://codepen.io/adalab/pen/vWNzLj)

Una regla muy importante que se aplica sobre los elementos en l??nea es que estos no pueden cambiar su ancho ni su alto, no pueden tener m??rgenes horizontales y se puede aplicar margen y padding vertical, pero este no se tiene en cuenta a la hora de definir su altura y su posici??n vertical. Esto los diferencia de los elementos en bloque, que permiten tener un ancho y un alto espec??fico y m??rgenes y padding tanto vertical como horizontal. Veremos la importancia de esto en esta misma sesi??n, cuando hablemos del modelo de cajas.

~~~
Nota:
Las im??genes son un tipo especial de elemento en l??nea que por sus caracter??sticas act??a como una mezcla de elemento en l??nea y elemento en bloque, ya que pueden tener m??rgenes y padding verticales y se les pueden asignar un ancho y un alto.
~~~

Usando CSS podemos cambiar la visualizaci??n de un elemento para hacer que se muestre en l??nea
```css
.inline {
  display: inline;
}
```

***inline-block***

En este caso y como su nombre indica, el comportamiento de los elementos inline-block es una mezcla entre el comportamiento de los elementos en l??nea y los elementos en bloque.

Los elementos inline-block ocupan por defecto el ancho de su contenido y se comportan como si se tratase de una palabra m??s dentro de un texto, al igual que los elementos en l??nea, pero permiten tener un ancho, un alto, padding y m??rgenes verticales, como sucede con los elementos en bloque.

[Elementos inline-block](https://codepen.io/adalab/pen/vWNzLj)

```css
.inline {
  display: inline;
}
```
Usando CSS podemos cambiar la visualizaci??n del elemento 

```css
.inline {
  display: inline-block;
}
```

***Elementos ocultos***

A veces queremos que un elemento est?? oculto, por ejemplo, el t??pico mensaje de aviso de cookies que aparece cada vez que entramos en una p??gina. Con JavaScript, haremos que este mensaje se muestre o se oculte dependiendo si hemos visitado antes la p??gina o no, pero desde JavaScript lo que haremos ser?? a??adir o quitar una clase CSS, los estilos los gestionaremos siempre desde el CSS.

 ```css
.hidden {
    display: none;
}
```
Este c??digo lo que hace es ocultar por completo cualquier elemento al que le a??adamos la clase `hidden`. Ser?? como si ese elemento no existiese ya que no se mostrar??, y el resto de elementos de la p??gina lo ignorar??n.

Puedes ver un ejemplo en el siguiente Codepen:

[Elementos ocultos](https://codepen.io/adalab/pen/GOpXmw)

Resumen de los elementos del Display en Codepen:

[Elementos inline, inline-block y block en Codepen](https://codepen.io/adalab/pen/QOjVye)

***Ejercicio #1***
Displays

Prepara tres divs con un tama??o de 100x100, cambia sus displays (block, inline, inline-block, none) y observa c??mo se comportan.

[Ver en Replit](https://replit.com/@SilviaGarcia1/Displays#style.css)

***Dimensiones y box-sizing***
Una vez vistos los modos principales de visualizaci??n podemos entrar al modelo de caja. Recordemos que el modelo de caja es el que le dice al navegador c??mo debe pintar cada caja.

Si pensamos en el conjunto global, una p??gina ser??a como un conjunto de cajas una dentro de otra, por lo tanto, si pensamos en cada elemento a partir de ahora como un rect??ngulo nos ser?? mucho m??s f??cil visualizar c??mo se compone la estructura de una web y c??mo podemos pensar en ella combinando elementos que contienen otros elementos a su vez.

[Puedes leer una explicaci??n m??s completa sobre el modelo de caja en la documentaci??n de la MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)

[Ejemplo de modelo de caja en Codepen](https://codepen.io/adalab/pen/qoJNyN)

Si quisi??ramos cambiar el modelo de caja para todos los elementos podemos usar el selector *, que modifica todos los elementos de la p??gina, y por lo tanto debemos de usarlo con mucho tiento.

```css
* {
  box-sizing: border-box
 }
```

***Ejercicio #2 Ajustando im??genes***
Hacer un div de 100x100px usando las propiedades width y height, incluir dentro una imagen de 100x100px y probar:

- A??adir un padding de 10px
- A??adir un borde de 5px
- Cambiar el modelo de caja a border-box y explica qu?? ha pasado
- Centrar la caja utilizando el valor auto en los margenes horizontales.

[Ver en Replit](https://replit.com/@SilviaGarcia1/modelo-caja#style.css)


***Ejercicio #3 Equipo corch??ngulo*** 

Nos vamos de hackaton, y la p??gina con los detalles de nuestro equipo est?? sin terminar. La maquetadora la ha dejado preparada a falta de descomentar algunas l??neas. Mira el [Codepen](https://codepen.io/adalab/pen/LrPbmb?editors=1100) que ha preparado y descomenta y comenta las l??neas de CSS para ver c??mo se comportan los elementos.


## DevTools
El inspector es una de las muchas herramientas de desarrollo que incluye el navegador web Google Chrome. Este grupo de herramientas recibe el nombre de Chrome DevTools.

***??C??mo lo abrimos?***
Para abrir el inspector tenemos varias opciones:
Pulsando en el men?? de tres botones de la derecha superior de Chrome > m??s herramientas > herramientas para desarrolladores
Usar `Ctrl+Shift+I` en Ubuntu o Windows y `Cmd+Opci??n+I` en Mac.

Pulsar con el bot??n derecho sobre un elemento de nuestra p??gina y seleccionar la opci??n Inspeccionar

Si queremos cerrarlo...

Pulsamos en la cruz que aparece en la esquina superior derecha del panel
Usamos `Ctrl++ShiftI` en Ubuntu o Windows y `Cmd+Opci??n+I` en Mac de nuevo.

***??Para qu?? nos sirve?***

Dado que nos permite controlar qu?? est?? pasando con una web, podemos ver los recursos que se est??n cargando y cu??les fallan. Nos permite ver el c??digo tanto de nuestra p??gina, para ver si est?? funcionando correctamente, como de otras, para ver c??mo aplican ciertas t??cnicas o coger inspiraci??n.

Por otro lado, nos permite investigar qu?? cambios queremos hacer sin guarrear nuestro CSS o HTML y corregir de forma m??s r??pida y sencilla los errores de nuestro c??digo.
Por ejemplo, podemos ver informaci??n del modelo de caja.

## Colores
Para empezar, vamos a ver los distintos formatos que podemos usar para indicar colores, que podemos usar por ejemplo como valor de nuestro querida propiedad CSS color.

***Colores con palabras clave***
La primera forma de indicar un color es mediante la palabra clave que indica el nombre del color. Hay un mont??n de palabras clave para colores que podemos usar que pod??is ver en la tabla de este art??culo.
```css
p {
  color: fuchsia;
}
```
***Colores en hexadecimal***

De forma equivalente a las palabras clave, podemos expresar un color con formato hexadecimal. En este formato declaramos un color con una almohadilla # y sus 3 componentes RGB - R (rojo), G (verde), B (azul). Cada uno de los componentes se representa con 2 d??gitos en hexadecimal, es decir, cada d??gito puede tener 16 valores, entre 0 - 9 y A - F. Por ejemplo, el color fucsia se compone de una componente m??xima de rojo (ff), nada de verde (00) y m??xima de azul (ff).
```css
p {
  color: #ff00ff;
}
```

Suele ser habitual expresar algunos colores comunes de forma simplificada. Si los d??gitos de cada componente son iguales (por ejemplo, ff) puede escribirse el color de una forma simplificada escribiendo s??lo una vez el d??gito repetido. Por ejemplo, el fucsia puede simplificarse porque todos los componentes tienen el d??gito repetido.

```css
p {
  color: #f0f;
}
```
***rgb y rgba***

Como hemos visto en el caso anterior, los colores podemos expresarlos con sus componentes RGB (Red, Green, Blue)

En CSS existe la posibilidad de, en lugar de usar 2 d??gitos hexadecimales, expresar el color usando el valor decimal (n??mero normal) de cada componente RGB, que tendr?? un valor entre 0 y 255 (los mismos valores que pod??amos indicar con 2 d??gitos hexadecimales).

```css
p {
  color: rgb(255, 0, 255);
}
```

Existe adem??s la posibilidad de indicar un nivel de opacidad al color con el formato RGBA que a??ade el canal alpha o transparencia. Este ??ltimo componente tiene valores decimales entre 0 (totalmente transparente) y 1 (totalmente opaco).
```css
p {
  color: rgba(255, 0, 255, 0.7);
}
```

***hsl y hsla***
Igual que el RGB nos permite expresar colores a partir de sus componentes de color rojo/verde/azul, existe otro sistema, HSL, que nos permite expresarlos a trav??s de H (hue - matiz), S (saturation - saturaci??n), L (lightness - luminosidad). El matiz se expresa con un valor num??rico y tanto saturaci??n como luminosidad con un valor en %. En este caso, tambi??n existe la posibilidad de a??adir un canal alpha para indicar transparencia.
```css
p {
  color: hsl(300, 100%, 50%)
}
```
```css
p {
  color: hsl(300, 100%, 50%, 0.7)
}
```
Para m??s informaci??n, consultad la [gu??a de colores deMDN](https://devdocs.io/css/color_value).


## Background
Una vez entendido que cada elemento se puede ver como una caja, veamos c??mo a??adir un fondo a dicha "caja":

Gracias a la propiedad background podemos rellenar el fondo de nuestro contenedor con una imagen, con un color, o ambos:

![](https://storage.googleapis.com/academia-geek-general-bucket/modulo-1/modulo_1_img_14.png)

***Caracteristicas del Background:***

- background-color [Ver detalle](https://devdocs.io/css/background-color)
- background-image [Ver detalle](https://devdocs.io/css/background-image)
- background-position [Ver detalle](https://devdocs.io/css/background-position)
- background-size [Ver detalle](https://devdocs.io/css/background-size)
- background-repeat [Ver detalle](https://devdocs.io/css/background-repeat)
- background-origin [Ver detalle](https://devdocs.io/css/background-origin)
- background-attachment [Ver detalle](https://devdocs.io/css/background-attachment)

```css
.box {
    background-image: url('https://fillmurray.com/150/150');
    background-position: left top;
    background-repeat: no-repeat;
}
```

***Background-size***
existen dos valores especialmente interesantes que permiten definir c??mo se ajustar?? nuestra imagen de fondo al contenedor: contain y cover. 

**Contain:** Aumenta o reduce la imagen proporcionalmente todo lo que pueda sin deformarla para que quepa en nuestro contenedor.

**Cover:** Aumenta o reduce la imagen proporcionalmente para asegurarse que siempre cubre todo el ??rea de nuestro contenedor, aunque eso signifique que parte de la imagen pueda quedar oculta.

## Usando fuentes de Google Fonts

Para utilizar fuentes tipogr??ficas de un sitio externo como Google Fonts, tenemos que seguir 2 sencillos pasos: 

1. A??adir una etiqueta link a nuestro head con un enlace que cargue la fuente
``` html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Font+Name">
```
2. Usar esta fuente desde nuestro CSS al componente que queremos agregar el tipo de fuente
```css
p{
  font-family: 'Font Name', serif;
}
```
