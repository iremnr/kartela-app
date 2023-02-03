import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import login_img from '../assets/login_page.png';
import kartela_logo from '../assets/logo_kartela.png';
import Form from 'react-bootstrap/Form';




function Login() {

    document.title = "GİRİŞ";

    return (
        
        <Container fluid className="app">
            <Row className="row-out">
                <Row className="row-body">
                    <Col sm={6} className="login-part">

                        <div className="row-1">
                            <h2 className="giris-control">GİRİŞ</h2>
                        </div>
                        
                        <div className="row-1">
                            <form className="form">
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Control type="email" placeholder="Kullanıcı Adı" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Control type="password" placeholder="Şifre" />
                                </Form.Group>
                          
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Beni Hatırla" />
                                </Form.Group>

                                <div className="row">
                                    <button type="submit" className="button">GİRİŞ</button>
                                </div> 
                            </form>
                        </div>



                        <div className="kartela-logo">
                            <img className="kartela-logo" src={kartela_logo} alt="" />
                        </div> 

                    </Col>

                    <Col sm={6} className="login-img" >
                        <img className="login-img" src={login_img} alt="" />
                    </Col>
                </Row>
            </Row>

        </Container>



    
    )
}

export default Login