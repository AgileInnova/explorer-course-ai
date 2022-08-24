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
            La primera pantalla exige aceptar la licencia de NodeJS para
            continuar con la intalación
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
            src="https://res.cloudinary.com/dpkaiokho/image/upload/v1661346976/Agile%20Innova/explorer-course/NodeJS/2-aceptar-licencia_t4acfj.png"
            alt="..."
            style={{ marginBottom: "20px" }}
          />
        </div>
      </ol>
    </>
  );
}
