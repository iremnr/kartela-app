import "../App.css";
import logo from "../logoKartela.svg";
import {Col, Container, Row } from "react-bootstrap";
import { BsArrowLeftCircle } from "react-icons/bs";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const events = [
    {
      id: 1,
      title: 'event 1',
      start: '2023-01-14T10:00:00',
      end: '2023-01-16T12:00:00',
    },
     ];


function Sessions(){
    return(
        <Container fluid>
            <Row className="page-header"> 
            <Col sm ={{ order: 'last' }} md={{ order: 'last' }} lg={{ order: 'last' }}><img src={logo} className="kartela-logo" alt="logo" /></Col>
            <Col className="prev-page"> <BsArrowLeftCircle size={50} color="#369CC0"/></Col>
            </Row>
            <Row>
            <Col className="sessions-body">       
            <Row className="calendar-view">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              headerToolbar={{
                center: 'dayGridMonth,timeGridWeek,timeGridDay new',
              }}
              customButtons={{
                new: {
                  text: 'new',
                  click: () => console.log('new event'),
                },
              }}
              events={events}
              eventColor="lightpink"
              nowIndicator
              dateClick={(e) => console.log(e.dateStr)}
              eventClick={(e) => console.log(e.event.id)} />
              </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default Sessions