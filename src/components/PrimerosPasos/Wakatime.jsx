import React from "react";

import Admonition from "@theme/Admonition";

export default function Wakatime() {
  return (
    <>
      <h2>
        Wakatime, es un servicio hecho para programadores, para ayudarles a
        medir el tiempo invertido en desarrollo. Es decir, saber cuanto tiempo
        al día (horas) le metemos duro al código (Y para lograr medirlo, brindan
        una serie de plugins para los IDES mas populares).
      </h2>
      <Admonition type="tip" title="Tarea 0.4" icon="💻">
        <h3>Configurar Wakatime</h3>
      </Admonition>
      <ol>
        <li>
          <h2>
            Crea una cuenta en{" "}
            <a href="https://wakatime.com/signup" target={"_blank"}>
              Wakatime
            </a>
          </h2>
        </li>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://res.cloudinary.com/dpkaiokho/image/upload/v1661288167/Agile%20Innova/explorer-course/Wakatime/1-wakatime-signup_uxlgyr.png"
            alt="..."
            style={{ marginBottom: "20px" }}
          />
        </div>
        <li>
          <h2>
            {" "}
            Intala la extensión de{" "}
            <a
              href="https://marketplace.visualstudio.com/items?itemName=WakaTime.vscode-wakatime"
              target={"_blank"}
            >
              {" "}
              Wakatime{" "}
            </a>{" "}
            en Visual Studio Code
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="https://wakatime.com/static/img/plugins/installing/vs-code.gif"
              alt="..."
              style={{ marginBottom: "20px" }}
            />
          </div>
        </li>
        <li>
          <h4>
            Copiar{" "}
            <a href="https://wakatime.com/settings/account" target={"_blank"}>
              API Key
            </a>{" "}
            de Wakatime
          </h4>
        </li>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://res.cloudinary.com/dpkaiokho/image/upload/v1661292159/Agile%20Innova/explorer-course/Wakatime/3-copiar-key_tuvofk.gif"
            alt="..."
            style={{ marginBottom: "20px" }}
          />
        </div>
        <li>
          <h4>Pegar API Key de Wakatime</h4>
        </li>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://res.cloudinary.com/dpkaiokho/image/upload/v1661291770/Agile%20Innova/explorer-course/Wakatime/4-pegar-key_n5idny.gif"
            alt="..."
            style={{ marginBottom: "20px" }}
          />
        </div>
      </ol>
    </>
  );
}
