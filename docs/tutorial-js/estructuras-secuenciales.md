---
sidebar_position: 2
---

# Estructuras Secuenciales

<div style={{ position: "relative" }}>
  <div className="card-demo cardDemo">
    <div className="card" style={{ backgroundColor: "#242526" }}>
      <div className="card__header">
        <h3 style={{ color: "#FFF", textAlign: "center" }}>Tareas</h3>
      </div>
      <div className="card__body">
        <a href="https://github.com/Agile-Innova-Academy/explorer-course/tree/main/2.%20Javascript/02-Estructuras-Secuenciales/Tarea-01" target="_blank">
          <button
            className="button button--primary button--block"
            style={{ marginBottom: "10px" }}
          >
            Tarea 1
          </button>
        </a>
        <a href="https://github.com/Agile-Innova-Academy/explorer-course/tree/main/2.%20Javascript/02-Estructuras-Secuenciales/Tarea-02" target="_blank">
          <button
            className="button button--primary button--block"
            style={{ marginBottom: "10px" }}
          >
            Tarea 2
          </button>
        </a>
        <a href="https://github.com/Agile-Innova-Academy/explorer-course/tree/main/2.%20Javascript/02-Estructuras-Secuenciales/Tarea-03" target="_blank">
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

¿Que son las **Estructuras Secuenciales**?

<iframe className="videos" src="https://www.youtube.com/embed/hWGMaQf1pLU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

## Estructuras Algorítmicas

Las estructuras de operación de programas son un grupo de forma de trabajo, que permiten, mediante la manipulación de variables, realizar ciertos procesos específicos que nos lleven a la solución de problemas. Debemos de recordar que una vez entendido lo que se desea obtener del computador, se procede a determinar la estructura EPS (Entrada, Proceso, Salida) y si se considera necesario el diseño del algoritmo  (diagrama de flujo y/o pseudocódigo) y prueba de escritorio. 

Estas estructuras se clasifican de acuerdo a su complejidad en:

### Secuenciales
    Asignación
    Entrada
    Salida
### Condicionales
    Simples
    Dobles
    Múltiples o anidadas
### Cíclicas
    Hacer para
    Hacer mientras
    Repetir hasta

## Estructuras secuenciales

Las estructuras secuenciales son aquellas en las que una acción (instrucción) sigue a otra en secuencia. Las tareas se suceden de tal modo que la salida de una es la entrada de la siguiente y así sucesivamente hasta el fin del proceso.

Una estructura secuencial se representa de la siguiente forma:

  ~~~
  Inicio
    Acción 1
    Acción 2
    .
    .
    .
    Acción N
  Fin
  ~~~
### Asignación
Consiste en el paso de valores o resultados a una zona de la memoria, dicha zona será reconocida con el nombre de la variable que recibe el valor. La asignación se puede clasificar de la siguiente forma:

- Simples: Consiste en pasar un valor constante a una variable (a=15)
- Contador: Consiste en usar la variable como un verificador del número de veces que se realiza un proceso (a=a+1)
- Acumulador: Consiste en usar la variable como un sumador en un proceso (a=a+b)
- De trabajo: Variable que puede recibir el resultado de una operación matemática que involucre muchas variables (a=c+b*2/4)

### Lectura (Entrada)
Consiste en recibir desde un dispositivo de entrada (p.ej. el teclado) un valor. Esta operación se representa en un pseudocódigo de la siguiente manera:

Leer a,b

Donde "a" y "b" son las variables que recibirán los valores

### Escritura (Salida)
 Consiste en mandar por un dispositivo de salida (p.ej monitor o impresora) un resultado o mensaje. Este proceso se representa en un pseudocódigo de la siguiente manera:
 
 Escriba "El resultado es " , R
 
 Donde "El resultado es: " es un mensaje que se desea aparezca y R es una variable que contiene un valor.