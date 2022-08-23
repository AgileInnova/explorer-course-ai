import React from "react";

import Admonition from "@theme/Admonition";

export default function Git() {
  return (
    <>
      <h2>
        Git Bash es una aplicación para entornos Microsoft Windows que
        proporciona una bash emulación utilizada para ejecutar Git desde la
        línea de comandos. Esto no es un simple bash compilado para Windows,
        pero un paquete que contiene Bash, SSH, SCP y algunas otras utilidades
        de Unix compiladas para Windows.
      </h2>
      <Admonition type="tip" title="Tarea 0.2" icon="💻">
        <h3>Instalar y configurar Git</h3>
      </Admonition>
      <ol>
        <li>
          <h3>
            <a href="https://git-scm.com/download/win" target={"_blank"}>
              Descargar Git
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
            src="https://res.cloudinary.com/dpkaiokho/image/upload/v1661278983/Agile%20Innova/explorer-course/Git/1-descargar-git_rao3tn.png"
            alt="..."
            style={{ marginBottom: "20px" }}
          />
        </div>
        <h4>1.1 Ejecutar el instalador de Git</h4>
        <li>
          <h3>Configurar ruta de instalación</h3>
        </li>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://static.codepre.com/uploads/1647000968.png"
            alt="..."
            style={{ marginBottom: "20px" }}
          />
        </div>
        <li>
          <h3>Configurar instalación de Git</h3>
        </li>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://static.codepre.com/uploads/1647001040.gif"
            alt="..."
            style={{ marginBottom: "20px" }}
          />
        </div>
        <li>
          <h3>Comprobar la instalación Git</h3>
        </li>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://static.codepre.com/uploads/1647001058.png"
            alt="..."
            style={{ marginBottom: "20px" }}
          />
        </div>
      </ol>
    </>
  );
}
