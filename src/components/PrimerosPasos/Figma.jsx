import React from "react";

import Admonition from "@theme/Admonition";

export default function Figma() {
  return (
    <>
      <h2>
        Figma es un editor de gráficos vectoriales y una herramienta de
        prototipado. Es una aplicación web que puedes usar en el navegador
        Google Chrome y también te puedes descargar la aplicación para tu
        ordenador, porque Figma es multiplataforma: funciona tanto en Windows
        como en Mac o Linux.
      </h2>
      <Admonition type="tip" title="Tarea 0.6" icon="💻">
        <h3>Instalar Figma</h3>
      </Admonition>
      <ol>
        <li>
          <h3>
            Registrate en{" "}
            <a href="https://www.figma.com/signup?locale=en" target={"_blank"}>
              Figma
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
            src="https://res.cloudinary.com/dpkaiokho/image/upload/v1661448650/Agile%20Innova/explorer-course/Figma/1-registrarse-figma_ddwgii.gif"
            alt="..."
            style={{ marginBottom: "20px" }}
          />
        </div>
        <li>
          <h3>Descargar Figma</h3>
        </li>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://res.cloudinary.com/dpkaiokho/image/upload/v1661448763/Agile%20Innova/explorer-course/Figma/2-descargar-figma_mqbsz9.gif"
            alt="..."
            style={{ marginBottom: "20px" }}
          />
        </div>
        <li>
          <h3>Ejecutar el instalador de Figma</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="https://res.cloudinary.com/dpkaiokho/image/upload/v1661449319/Agile%20Innova/explorer-course/Figma/3-instalar-figma_qoma4d.gif"
              alt="..."
              style={{ marginBottom: "20px" }}
            />
          </div>
        </li>
        <li>
          <h3>Iniciar sesion en Figma y ya queda listo para usar</h3>
        </li>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://res.cloudinary.com/dpkaiokho/image/upload/v1661449359/Agile%20Innova/explorer-course/Figma/4-iniciar-sesion-figma_ply9rm.gif"
            alt="..."
            style={{ marginBottom: "20px" }}
          />
        </div>
      </ol>
    </>
  );
}
