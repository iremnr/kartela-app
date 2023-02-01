import "@fontsource/roboto";
import "@fontsource/montserrat";
import "../App.css";
import logo from "../logoKartela.svg";
import figure from "../back-page.svg";
import { useState } from "react";
import classNames from 'classnames';
import { Button, Col, Container, Row } from "react-bootstrap";
import { BsArrowLeftCircle } from "react-icons/bs";


const rooms = [
    { key: "1", value: "Work" },
    { key: "2", value: "Work2" },
    { key: "3", value: "Work3" },
  ];
  
function AddRoom(){
 const [room, setRoom] = useState(); 
 const recClasses = classNames({
    'rec-green': true,
    'rec-red': true,
    'red-orange': true,
    'rec-yellow': true,
    'rec-purple': true,
    'rec-pink': true
  });  

 return (
    <Container fluid>
        <Row className="page-header"> 
        <Col sm ={{ order: 'last' }} md={{ order: 'last' }} lg={{ order: 'last' }}><img src={logo} className="kartela-logo" alt="logo" /></Col>
        <Col className="prev-page"> <BsArrowLeftCircle size={50} color="#369CC0"/></Col>
      </Row>
      <Col className="room-body">
        <Row className="add-session-title">ODA EKLE</Row>
        <Row className="room-name">ODA İSMİ
        <select value={room} onChange={(e) => setRoom(e.target.value)} placeholder="Oda seçiniz">
                {rooms.map((room) => (
                  <option value={room.key} key={room.key}>
                    {room.value}
                  </option>
                ))}
              </select>
        </Row>
        <Row className="color-box"></Row>
        <Row className="form-title">RENK</Row>
        <Row className="colors">
          <Col><Button className="green-button" onClick={() => alert('Renk Kaydedildi')}></Button></Col>
          <Col><Button className="red-button" onClick={() => alert('Renk Kaydedildi')}></Button></Col>
          <Col><Button className="orange-button" onClick={() => alert('Renk Kaydedildi')}></Button></Col>
          <Col><Button className="yellow-button" onClick={() => alert('Renk Kaydedildi')}></Button></Col>
          <Col><Button className="purple-button" onClick={() => alert('Renk Kaydedildi')}></Button></Col>
          <Col><Button className="pink-button" onClick={() => alert('Renk Kaydedildi')}></Button></Col>
        </Row>
        <Row><Button className="session-submit" onClick={() => alert('Oda Kaydedildi')}>KAYDET</Button></Row>
      </Col>
    </Container>
 )
}

export default AddRoom;