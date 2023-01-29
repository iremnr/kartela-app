import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import login_img from '../assets/login_page.png';
import kartela_logo from '../assets/logo_kartela.png';


function Login() {
    return (
        
        /*<div className="app">
            <div className="row">
                <div className="column flex justify-center align-items-center">

                    <div className="flex flex-col justify-center">
                        <h2 className="giris-control">GİRİŞ</h2>
                    

                    
                        <form className="form">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Kullanıcı Adı"/>
                                <label for="floatingInput">Kullanıcı Adı</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="password" class="form-control" id="floatingInput" placeholder="Şifre"/>
                                <label for="floatingInput">Şifre</label>
                            </div>

                            <button className="button">GİRİŞ</button>

                        </form>
                    
                        <img className="kartela-logo" src={kartela_logo} alt="" />
                    </div>

                </div>


                <div className="column hidden sm:block img-fluid">
                    <img className="login-img" src={login_img} alt="" />
                </div>

            </div>
        </div>*/

        <Container className="app">
            <Row className="row-body">
                <Col sm={6}>

                    <div className="row-1">
                        <h2 className="giris-control">GİRİŞ</h2>
                    </div>
                    
                    <div className="row-1">
                        <form className="form">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Kullanıcı Adı"/>
                                <label for="floatingInput">Kullanıcı Adı</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="password" class="form-control" id="floatingInput" placeholder="Şifre"/>
                                <label for="floatingInput">Şifre</label>
                            </div>

                        </form>
                    </div>

                    <div className="">
                        <button className="button">GİRİŞ</button>
                    </div> 

                    <div className="kartela-logo">
                        <img className="kartela-logo" src={kartela_logo} alt="" />
                    </div> 

                </Col>

                <Col sm={6} className="login-img" >
                    <img className="login-img" src={login_img} alt="" />
                </Col>
            </Row>
        </Container>



    
    )
}

export default Login