/** Componente Live WorkShops
 * [date]     [author]      [task]      [description]
 * 28/09/22   Jose Garcia               Se definio la vista del componente y se documento el codigo
 */
import React, { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import Layout from "@theme/Layout";

import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

/**
 * Dependencias que se usan para establecer la zona horaria y el dia actual
 */
import moment from "moment";
import "moment-timezone";
moment.locale("es");
const localizer = momentLocalizer(moment);
moment.tz.setDefault("America/Bogota");

/**Funtion Event
 * Esta funcion se encarga de retornar el diseño con el que se vera la tarjetica del evento
 * desde aqui se pueden modificar colores, fuente, tamaños, etc... e incluso poder agregar
 * mas cosas a mostrar
 */
function Event({ event }) {
  return (
    <span style={{ textAlign: "center", width: "100%", display: "block" }}>
      <strong>{event.title}</strong>
      <br />
      <a style={{ color: "#FFF" }} href={event?.url} target="_blank" rel="">
        Ir a clase
      </a>
    </span>
  );
}
Event.propTypes = {
  event: PropTypes.object,
};

/** Const events
 * Marca el formato con el que deben estar cada uno de los eventos
 */
const events = [
  {
    id: 0,
    title: "HTML Meeting",
    start: new Date(2022, 8, 29, 14),
    end: new Date(2022, 8, 29, 17),
    resourceId: 1,
    url: "https://academy.agileinnova.org/signin",
    desc: "Clase de JavaScript",
  },
  {
    id: 1,
    title: "JS Meeting",
    start: new Date(2022, 8, 28, 14),
    end: new Date(2022, 8, 28, 17),
    resourceId: 1,
    url: "https://github.com/AgileInnova",
    desc: "Clase de JavaScript",
  },
];

/** Component Hello
 * Componente que renderiza toda la logica y vista para mostar el calendario con sus eventos
 */
export default function Hello() {

  // Permite alternar las vistas habilitadas segun el tamaño de la pantalla
  const view = (window.screen.availWidth > 700) ? {
    month: true,
    week: true,
    day: true,
    agenda: true
  } : {
    day: true,
    agenda: true
  }

  const { components, views } = useMemo(
    () => ({
      components: {
        event: Event,
      },
      views: view
    }),
    []
  );

  /**
   * Funcion handleSelectEvent
   * Al momento de hacer click en alguna tarjetica de un evento esta funcion se ejecuta
   * permitiendo realizar acciones adicionales si se requere
   */
  const handleSelectEvent = useCallback((event) => {
    console.log(event);
  }, []);

  return (
    <Layout title="Live Workshops" description="workshop React Page">
      <div
        style={{
          margin: "1rem 2rem"
        }}
      >
        <Calendar
          // Define el idioma del calendario 
          culture="es"
          // Llama a la funcion cuando se hace click en un evento
          onSelectEvent={handleSelectEvent}
          // Permite agregar nuestos propios componentes personalizados para mostrarlo en el calendario
          components={components}
          // Traducciones de idioma
          messages={{
            week: "Semana",
            work_week: "Semana de trabajo",
            day: "Día",
            month: "Mes",
            previous: "Anterior",
            next: "Proxima",
            today: "Hoy",
            agenda: "Agenda",
          }}
          // Establece la zona horaria y el dia actual
          localizer={localizer}
          // Permite definir una vista por defecto cuando se renderiza por primera vez el componente
          defaultView={window.screen.availWidth < 700 ? "day" : "month"}
          // Recibe un array con los eventos
          events={events}
          // Estilos adicionales para el calendario
          style={{ height: 500 }}

          views={views}
        />
      </div>
    </Layout>
  );
}
