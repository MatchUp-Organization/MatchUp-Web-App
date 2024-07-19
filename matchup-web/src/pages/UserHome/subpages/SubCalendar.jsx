import React from 'react';
import './SubCalendar.css';
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'

export default function SubCalendar() {
  return (
    <div className="subcalendar-container">
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        headerToolbar={
          {
            left: 'prev,next today',
            center: 'title',
            right: 'timeGridWeek timeGridDay'
          }
        }
        height="700px"
        events={[
          { title: 'BIG TOURNEY', start: '2024-07-20T12:00:00', end: '2024-07-20T14:00:00' },
          { title: 'Foot avec les bros', start: '2024-07-18T10:00:00', end: '2024-07-18T11:00:00' },
        ]}
      />
    </div>
  );
}