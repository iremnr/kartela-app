import "../App.css";
import logo from "../logoKartela.svg";
import { Col, Container, Row, Form } from "react-bootstrap";
import { BsArrowLeftCircle } from "react-icons/bs";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const rowColors = ["color1", "color2", "color3", "color4"];


const MyRows = () => {
  const rows = [1, 2, 3, 4, 5, 6,7];

  return (
    <>
      {rows.map((row, index) => (
        <Col>
        <Row className={`session-one ${rowColors[index % rowColors.length]}`}
          key={index}>
          <Col className="patient-name col-9">name</Col>
          <Col className="session-hour col-3">12.00</Col>
        </Row>
        </Col>
      ))}
    </>
  );
};
const CheckBoxes = () => {
  const rows = [1, 2, 3, 4, 5, 6,7];

  return (
    <>
      {rows.map((row, index) => (
        <Col className={`check-one ${rowColors[index % rowColors.length]}`}
          key={index}>
         <Col className="check-one"><input type="checkbox"></input></Col>
        </Col>
      ))}
    </>
  );
};

const events = [
  {
    id: 1,
    title: "event 1",
    start: "2023-01-14T10:00:00",
    end: "2023-01-16T12:00:00",
  },
];

function Sessions() {
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
      <Row className="add-session-title">SEANSLARIM</Row>
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
          <Col className="session-col">
          <Row className="sessions-day">BUGÜN</Row>
         <Col>
         <Row>
         <Col className="checkbox-class col-2"><CheckBoxes></CheckBoxes></Col>
          <Col className="rows-class col-10"><MyRows></MyRows></Col>
         </Row>
         </Col>
          </Col>
      </Row>
    </Container>
  );
}
export default Sessions;
