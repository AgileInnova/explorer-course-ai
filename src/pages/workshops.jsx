import React, { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import Layout from "@theme/Layout";

import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import moment from "moment";
import "moment-timezone";

moment.locale("es");

const localizer = momentLocalizer(moment);
moment.tz.setDefault("America/Bogota");

// This funticon return layout for event
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

// Formats of events on calendar
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
    id: 0,
    title: "JS Meeting",
    start: new Date(2022, 8, 28, 14),
    end: new Date(2022, 8, 28, 17),
    resourceId: 1,
    url: "https://github.com/AgileInnova",
    desc: "Clase de JavaScript",
  },
];

export default function Hello() {
  const { components } = useMemo(
    () => ({
      components: {
        event: Event,
      },
    }),
    []
  );

  // Funtion handleClick on event
  const handleSelectEvent = useCallback((event) => {
    console.log(event);
  }, []);

  return (
    <Layout title="Live Workshops" description="workshop React Page">
      <div>
        <Calendar
          culture="es"
          onSelectEvent={handleSelectEvent}
          components={components}
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
          localizer={localizer}
          defaultView="month"
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    </Layout>
  );
}
