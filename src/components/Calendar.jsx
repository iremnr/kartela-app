import "@fontsource/roboto";
import "../App.css";
import logo from "../logoKartela.svg";
import 'react-calendar/dist/Calendar.css'
import { Col, Container, Row } from "react-bootstrap";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { BsArrowLeftCircle } from "react-icons/bs";


  const events = [
    {
      id: 1,
      title: 'event 1',
      start: '2023-01-14T10:00:00',
      end: '2023-01-16T12:00:00',
    },
     ];
  
 
function Calendar() {
  
  document.title = "Takvim";
  
  return (
    <Container fluid>
    <Row className="page-header">
      <Col className="prev-page">
        {" "}
        <BsArrowLeftCircle size={50} color="#369CC0" />
      </Col>
      <Col sm={6} md={6} lg={3}>
        <img src={logo} className="kartela-logo" alt="logo" />
      </Col>
    </Row>
    <Row className="add-session-title">TAKVİM</Row>
    <Row className="deneme">
    <Row sm={12} md={12} lg={12} className="calendar-view">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            center: "dayGridMonth,timeGridWeek,timeGridDay new",
          }}
          customButtons={{
            new: {
              text: "new",
              click: () => console.log("new event"),
            },
          }}
          events={events}
          eventColor="lightpink"
          nowIndicator
          dateClick={(e) => console.log(e.dateStr)}
          eventClick={(e) => console.log(e.event.id)}
        />
      </Row>
      
    </Row>
  </Container>
  );
}
export default Calendar;
