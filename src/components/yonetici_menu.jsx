import vector from '../assets/Vector.png';
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import kartela_logo from '../assets/logo_kartela.png';
import { BsArrowLeftCircle } from "react-icons/bs";

function Yonetici_menu() {
    return (
        <Container>
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
                    <div className="y-card-1 mb-8">
                        <h1 className='y-card-yazi-1'>TAKVİM</h1>
                    </div>
                    <div className="y-card-2 mb-8">
                        <h1 className='y-card-yazi-2'>SEANS LİSTESİ</h1>
                    </div>
                    <div className="y-card-2 mb-8">
                        <h1 className='y-card-yazi-2'>ETKİNLİK LİSTE</h1>
                    </div>
                    <div className="y-card-2 mb-8">
                        <h1 className='y-card-yazi-2'>MUHASEBE</h1>
                    </div>
                </Col>

                <Col md={6}>
                    <div className="y-card-1 mb-8">
                        <h1 className='y-card-yazi-1'>SEANS OLUŞTUR</h1>
                    </div>
                    <div className="y-card-1 mb-8">
                        <h1 className='y-card-yazi-1'>ETKİNLİK OLUŞTUR</h1>
                    </div>
                    <div className="y-card-2 mb-8">
                        <h1 className='y-card-yazi-2'>DANIŞMANLAR</h1>
                    </div>
                    <div className="y-card-2 mb-8">
                        <h1 className='y-card-yazi-2'>ODA EKLE</h1>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Yonetici_menu