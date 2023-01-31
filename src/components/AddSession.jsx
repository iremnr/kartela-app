import "@fontsource/roboto";
import { useState } from "react";
import "../App.css";
import logo from "../logoKartela.svg";
import figure from "../back-page.svg";
import 'react-calendar/dist/Calendar.css'
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import FieldGroup from 'react-bootstrap/Form';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { BsArrowLeftCircle } from "react-icons/bs";

const rooms = [
    { key: "1", value: "Work" },
    { key: "2", value: "Work2" },
    { key: "3", value: "Work3" },
  ];
  const genders = [
    { key: "1", value: "Kadın" },
    { key: "2", value: "Erkek" },
    { key: "3", value: "Belirtmek İstemiyorum" },
  ];
  const categories = ['kategori 1' , 'kategori 2', 'kategori 3'];
  const hours = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'];

  const events = [
    {
      id: 1,
      title: 'event 1',
      start: '2023-01-14T10:00:00',
      end: '2023-01-16T12:00:00',
    },
     ];
  
 
function AddSession() {
  const [name, setName] = useState();
  const [room, setRoom] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [category, setCategory] = useState();
  
  document.title = "Seans Ekle";
  
  return (
    <Container fluid xs={6} sm={4} md={4} lg={4} xl={4} className="page-container">
      <Row className="page-header" xs={12} sm={12} md={12} lg={12} xl={12}>
        <Col className="prev-page"> <BsArrowLeftCircle size={50} color="#369CC0"/></Col>
      <Col><img src={logo} className="kartela-logo" alt="logo" /></Col>
    </Row>
    <Row className="add-session-title">SEANS EKLE</Row><Row className="session-page-body" xs={12} sm={12} md={8} lg={8} xl={8}>
        <Col className="session-left">
          <Row className="form-title">DANIŞAN İSİM/SOYİSİM</Row>
          <Row className="form-box">
            <Form>
              <FieldGroup
                value={name}
                id="formControlsText"
                type="text"
                label="Text"
                placeholder="İsim ve soyisim giriniz"
                onChange={e => setName(e.target.value)} />
            </Form>
          </Row>
          <Row className="form-title">ODA</Row>
          <Row className="form-box">
            <select value={room} onChange={(e) => setRoom(e.target.value)}>
              {rooms.map((room) => (
                <option value={room.key} key={room.key}>
                  {room.value}
                </option>
              ))}
            </select>
          </Row>
          <Row className="form-title">YAŞ</Row>
          <Row className="form-box">
            <input
              type="text"
              placeholder="Yaşınızı giriniz"
              value={age}
              onChange={(e) => setAge(e.target.value)} />
          </Row>
          <Row className="form-title">CİNSİYET</Row>
          <Row className="form-box">
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              {genders.map((gender) => (
                <option value={gender.key} key={gender.key}>
                  {gender.value}
                </option>
              ))}
            </select>

          </Row>
          <Row className="form-title">TARİH</Row>
          <Row className="form-box">
            <form>
              <input type="date" value={date} onChange={e => setDate(e.target.value)} />
            </form>
          </Row>
          <Row className="form-title">SAAT</Row>
          <Row className="form-box">
            <form>
              <select value={time} onChange={e => setTime(e.target.value)}>
                {hours.map(hour => (
                  <option value={hour} key={hour}>{hour}</option>
                ))}
              </select>
            </form>

          </Row>
          <Row className="form-title">KATEGORİ</Row>
          <Row className="form-box">
            <form>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="" disabled>Kategori seçiniz</option>
                {categories.map(category => (
                  <option value={category} key={category}>{category}</option>
                ))}
              </select>
            </form>

          </Row>
          <Row>
            <Button className="session-submit" onClick={() => alert('Form Kaydedildi')}>KAYDET</Button>
          </Row>
        </Col>
        <Col className="session-right" xs={12} sm={6} md={6}>
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
          <Row className="to-do-one">
            <Col className="to-do-hour">10.59 AM</Col>
            <Col className="to-do-line1"></Col>
            <Col className="to-do-message">Learn Design Pattern</Col>
          </Row>
          <Row className="to-do-two">
            <Col className="to-do-hour">10.59 AM</Col>
            <Col className="to-do-line2"></Col>
            <Col className="to-do-message">Learn Design Pattern</Col>
          </Row>
          <Row className="today-text">That's all for today!</Row>
        </Col>
      </Row>
    </Container>
  );
}
export default AddSession;
