import React from "react";

import Admonition from "@theme/Admonition";

export default function Vscode() {
  return (
    <>
      <h2>
        Visual Studio Code es un editor de código fuente desarrollado por
        Microsoft para Windows, Linux, macOS y Web.
      </h2>
      <Admonition type="tip" title="Tarea 0.1" icon="💻">
        <h3>Instalar Visual Studio Code</h3>
      </Admonition>
      <ol>
        <li>
          <h3>
            Descargar{" "}
            <a href="https://code.visualstudio.com/" target="_blank">
              Visual Studio Code
            </a>
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
            src="https://res.cloudinary.com/dpkaiokho/image/upload/v1661199974/Agile%20Innova/explorer-course/1-descargar-vscode_fu2wrh.png"
            alt="..."
            style={{ marginBottom: "20px" }}
          />
        </div>
        <h4>
          1.1 Una vez descargado el fichero de instalación,{" "}
          <b>lo ejecutamos.</b>
        </h4>
        <h4>1.2 Nos abrirá un asistente para empezar a instalar.</h4>
        <li>
          <h3>Aceptamos el acuerdo de licencia y siguiente.</h3>
        </li>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://res.cloudinary.com/dpkaiokho/image/upload/v1661200776/Agile%20Innova/explorer-course/2-aceptar-acuerdo_uvi0gv.png"
            alt="..."
            style={{ marginBottom: "20px" }}
          />
        </div>
        <li>
          <h3>
            Indicamos la ruta donde queremos instalarlo. Por defecto lo instala
            en Program Files. Después clickamos sobre Siguiente.
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
            src="https://res.cloudinary.com/dpkaiokho/image/upload/v1661202903/Agile%20Innova/explorer-course/3-indicar-ruta_clafal.png"
            alt="..."
            style={{ marginBottom: "20px" }}
          />
        </div>
        <li>
          <h3>
            En la siguiente pantalla dejaremos todo por defecto y siguiente
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
            src="https://res.cloudinary.com/dpkaiokho/image/upload/v1661202903/Agile%20Innova/explorer-course/4-siguiente_kzfvob.png"
            alt="..."
            style={{ marginBottom: "20px" }}
          />
        </div>
        <li>
          <h3>
            En la siguiente pantalla marcaremos las opciones que creamos
            convenientes para nuestro entorno de trabajo y clickaremos sobre
            siguiente.
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
            src="https://res.cloudinary.com/dpkaiokho/image/upload/v1661202903/Agile%20Innova/explorer-course/5-marcar-y-siguiente_s9h8oq.png"
            alt="..."
            style={{ marginBottom: "20px" }}
          />
        </div>
        <li>
          <h3>
            Y ya pasaremos a la instalación del software clickando sobre
            Instalar.
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
            src="https://res.cloudinary.com/dpkaiokho/image/upload/v1661202903/Agile%20Innova/explorer-course/6-instalar_uyu0fx.png"
            alt="..."
          />
          <img
            src="https://www.alexmilla.net/wp-content/uploads/2019/10/VSC_08.png"
            alt="..."
            style={{ marginBottom: "20px" }}
          />
        </div>
        <li>
          <h3>
            Una vez finalizada la instalación clickaremos sobre el botón
            Finalizar.
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
            src="https://res.cloudinary.com/dpkaiokho/image/upload/v1661202903/Agile%20Innova/explorer-course/7-finalizar_z9b3gc.png"
            alt="..."
            style={{ marginBottom: "20px" }}
          />
        </div>
        <li>
          <h3>
            Ya solo tendremos que clickar sobre el icono que ha creado Visual
            Studio Code para iniciarlo y tunear nuestro editor a nuestro gusto.
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
            src="https://www.alexmilla.net/wp-content/uploads/2019/10/VSC_010-1024x771.png"
            alt="..."
            style={{ marginBottom: "20px" }}
          />
        </div>
      </ol>

      <h3>Extensiones de Visual Studio Code ( opcionales )</h3>
      <ul>
        <li>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag"
            target={"_blank"}
          >
            Auto Close tag
          </a>
        </li>
        <li>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"
            target={"_blank"}
          >
            Live Server
          </a>
        </li>
        <li>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme"
            target={"_blank"}
          >
            Material Icon
          </a>
        </li>
      </ul>
    </>
  );
}
