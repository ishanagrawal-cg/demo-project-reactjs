import React, { useState } from 'react'
import { format, getDay, parse, startOfWeek } from 'date-fns'
import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar'
import DatePicker from 'react-datepicker'
import "react-big-calendar/lib/css/react-big-calendar.css"
import "react-datepicker/dist/react-datepicker.css"
import '../App.css'

export const Calendar = () => {

  const locales = {
    "en-IN": require("date-fns/locale/en-IN")
  }

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  })

  const events = [
    {
      title: "ReactJS Meeting",
      allDay: true,
      start: new Date(2022, 8, 6),
      end: new Date(2022, 8, 11),
    },
    {
      title: "Vacation",
      start: new Date(2022, 9, 24),
      end: new Date(2022, 9, 29),
    },
    {
      title: "Workshop",
      start: new Date(2022, 8, 24),
      end: new Date(2022, 8, 26),
    },
  ];

  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" })
  const [allEvents, setAllEvents] = useState(events)

  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent])
  }

  return (
    <div className='cal'>
      <h1>Calendar📅</h1>
      <h2 style={{ textAlign: 'center' }}>Add new event</h2>
      <div style={{ textAlign: 'center'}}>
        <input type="text" placeholder="Add title" style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          placeholderText='Start Date'
          style={{ marginRight: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <DatePicker
          placeholderText='End Date'
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <button stlye={{ marginTop: "10px" }} onClick={() => { handleAddEvent() }}>
          Add Event
        </button>
      </div>
      <BigCalendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }} />
    </div>
  )
}
