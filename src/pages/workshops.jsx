import React, { useCallback } from "react";
import Layout from "@theme/Layout";

import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import moment from "moment";
import "moment-timezone";

moment.locale("es");

const localizer = momentLocalizer(moment);
moment.tz.setDefault("America/Bogota");

export default function Hello() {
  const handleSelectEvent = useCallback((event) => {
    console.log(event);
    // window.alert(event.title)
  }, []);
  return (
    <Layout title="Live Workshops" description="workshop React Page">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "20px",
        }}
      >
        <p>Component Live Workshops</p>
      </div>
      {/* <div
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   height: "50vh",
      //   fontSize: "20px",
      // }}
      >
        <Calendar
          culture="es"
          onSelectEvent={handleSelectEvent}
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
          // view="week"
          events={[
            {
              id: 0,
              title: "JS Meeting",
              start: new Date(2022, 7, 29, 14),
              end: new Date(2022, 7, 29, 17),
              resourceId: 1,
              url: "www.google.com",
              desc: "Clase de JavaScript",
            },
            {
              id: 0,
              title: "JS Meeting",
              start: new Date(2022, 7, 30, 14),
              end: new Date(2022, 7, 30, 17),
              resourceId: 1,
              url: "www.google.com",
              desc: "Clase de JavaScript",
            },
          ]}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div> */}
    </Layout>
  );
}
