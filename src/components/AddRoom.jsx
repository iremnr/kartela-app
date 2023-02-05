import "@fontsource/roboto";
import "@fontsource/montserrat";
import "../App.css";
import logo from "../logoKartela.svg";
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
      <Container fluid className="page-container">
      <Container fluid className="inner-container">
      <Row className="page-header" xs={12} sm={12} md={12} lg={12} xl={12}>
        <Col className="prev-page"> <BsArrowLeftCircle size={50} color="#369CC0"/></Col>
      <Col className="kartela-logo" lg={3}><img src={logo}  alt="logo" /></Col>
    </Row>
      <Row className="add-session-title">ODA EKLE</Row>
     <Row className="deneme">
     <Row className="room-form-box">
            <select  className="form-box-input" value={room} onChange={(e) => setRoom(e.target.value)}>
              {rooms.map((room) => (
                <option value={room.key} key={room.key}>
                  {room.value}
                </option>
              ))}
            </select>
        </Row></Row>
     <Row className="deneme">
        <Row className="colors">
          <Button className="green-button" onClick={() => alert('Renk Kaydedildi')}></Button>
          <Button className="red-button" onClick={() => alert('Renk Kaydedildi')}></Button>
          <Button className="orange-button" onClick={() => alert('Renk Kaydedildi')}></Button>
          <Button className="yellow-button" onClick={() => alert('Renk Kaydedildi')}></Button>
          <Button className="purple-button" onClick={() => alert('Renk Kaydedildi')}></Button>
          <Button className="pink-button" onClick={() => alert('Renk Kaydedildi')}></Button>
        </Row>
       </Row>
       <Row className="deneme">
      <Button className="room-submit" onClick={() => alert('Oda Kaydedildi')}>KAYDET</Button>
    
    </Row>
   
       </Container>
       </Container>
 )
}

export default AddRoom;