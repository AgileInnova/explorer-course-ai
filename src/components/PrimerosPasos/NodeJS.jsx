import React from "react";

import Admonition from "@theme/Admonition";

export default function NodeJS() {
  return (
    <>
      <h2>
        Node.js es un entorno de programación basado en JavaScript, un lenguaje
        de programación que, desde que fue inventado hace ya 25 años, ha
        cambiado la web y se ha convertido en uno de los más populares.
      </h2>
      <Admonition type="tip" title="Tarea 0.5" icon="💻">
        <h3>Instalar NodeJS</h3>
      </Admonition>
      <ol>
        <li>
          <h3>
            Descargar{" "}
            <a href="https://nodejs.org/es/" target={"_blank"}>
              NodeJS
            </a>{" "}
            de la página oficial
          </h3>
        </li>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://res.cloudinary.com/dpkaiokho/image/upload/v1661346699/Agile%20Innova/explorer-course/NodeJS/1-instalar_pccw7j.png"
            alt="..."
            style={{ marginBottom: "20px" }}
          />
        </div>
        <li>
          <h3>Ejecuta el instalador descargado</h3>
        </li>
        <li>
          <h3>
            La primera pantalla nos dará una bienvenida, presionamos siguiente o
            next.
          </h3>
        </li>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://res.cloudinary.com/dpkaiokho/image/upload/v1661355390/Agile%20Innova/explorer-course/NodeJS/2-next_zz4rgw.png"
            alt="..."
            style={{ marginBottom: "20px" }}
          />
        </div>
        <li>
          <h3>
            La segunda pantalla exige aceptar la licencia de NodeJS para
            continuar la instalación
          </h3>
        </li>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://res.cloudinary.com/dpkaiokho/image/upload/v1661355390/Agile%20Innova/explorer-course/NodeJS/3-aceptar-licencia_f5g0r0.png"
            alt="..."
            style={{ marginBottom: "20px" }}
          />
        </div>
        <li>
          <h3>
            La tercera pantalla permite elegir el directorio de instalación.
          </h3>
        </li>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://res.cloudinary.com/dpkaiokho/image/upload/v1661355831/Agile%20Innova/explorer-course/NodeJS/4-cambiar-ruta_mlu0pw.png"
            alt="..."
            style={{ marginBottom: "20px" }}
          />
        </div>
        <li>
          <h3>
            La cuarta pantalla nos muestra que se va a instalar (Se recomienda
            dejar por defecto)
          </h3>
        </li>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://res.cloudinary.com/dpkaiokho/image/upload/v1661355831/Agile%20Innova/explorer-course/NodeJS/5-archivos-instalacion_yla9f0.png"
            alt="..."
            style={{ marginBottom: "20px" }}
          />
        </div>
        <li>
          <h3>
            La quinta pantalla nos dirá que algunos módulos necesitan estar
            compilados en C/C++ pero nosotros no nos preocuparemos por eso asi
            que damos siguiente o next.
          </h3>
        </li>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://res.cloudinary.com/dpkaiokho/image/upload/v1661355831/Agile%20Innova/explorer-course/NodeJS/6-modulos_ntenwf.png"
            alt="..."
            style={{ marginBottom: "20px" }}
          />
        </div>
        <li>
          <h3>
            La sexta pantalla debemos confirmar la instalación presionando en el
            boton instalar.
          </h3>
        </li>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://res.cloudinary.com/dpkaiokho/image/upload/v1661355831/Agile%20Innova/explorer-course/NodeJS/7-confirmar_wp30iw.png"
            alt="..."
            style={{ marginBottom: "20px" }}
          />
        </div>
        <li>
          <h3>
            Luego de la instalación presionamos el botón finalizar o finish y ya
            tendriamos instalados node.js.
          </h3>
        </li>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://res.cloudinary.com/dpkaiokho/image/upload/v1661357367/Agile%20Innova/explorer-course/NodeJS/8-finish_rjhxpk.png"
            alt="..."
            style={{ marginBottom: "20px" }}
          />
        </div>
        <li>
          <h3>
            Comprobamos abriendo un CMD y ejecutando (node --version y npm
            --version)
          </h3>
        </li>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://res.cloudinary.com/dpkaiokho/image/upload/v1661357368/Agile%20Innova/explorer-course/NodeJS/9-comprobar-version_ashsbf.gif"
            alt="..."
            style={{ marginBottom: "20px" }}
          />
        </div>
      </ol>
    </>
  );
}
