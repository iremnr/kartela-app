import vector from '../assets/Vector.png';
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import kartela_logo from '../assets/logo_kartela.png';
import { BsArrowLeftCircle } from "react-icons/bs";

function User_menu() {
    return (
        <Container fluid className="app">
            <Row className="row-out">
                <Row className="row-body">

                    <Row>
                        <Col sm={4} className="vector" >
                            <BsArrowLeftCircle size={50} color="#369CC0"/>
                        </Col>
                        <Col sm={8} className="" >
                            <img className="" src={kartela_logo} alt="" />
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            
                            <div className="Card-1 mb-8">
                                <h1 className='card-yazi-1'>TAKVİM</h1>
                            </div>

                            <div className="Card-1 mb-8">
                                <h1 className='card-yazi-1'>ETKİNLİK OLUŞTUR</h1>
                            </div>
                        </Col>

                        <Col md={6}>
                            <div className="Card-1 mb-8" >
                                <h1 className='card-yazi-1'>SEANS OLUŞTUR</h1>
                            </div>

                            <div className='Card-2 mb-8'>
                                <h1 className='card-yazi-2'>SEANSLARIM</h1>
                            </div>
                            <div className='Card-2 mb-8'>
                                <h1 className='card-yazi-2'>DANIŞANLARIM</h1>
                            </div>
                            
                        </Col>
                    </Row>
                </Row>
            </Row>
        </Container>
    )
}

export default User_menu