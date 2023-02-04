import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import login_img from '../assets/login_page.png';
import kartela_logo from '../assets/logo_kartela.png';
import Form from 'react-bootstrap/Form';
import "@fontsource/roboto";
import "@fontsource/rubik";


function Login() {

    document.title = "GİRİŞ";

    return (
        
        <div className='container-fluid bg-kartela p-4'>
            <div className="conteiner bg-white rounded-2xl  px-2">           
                <div className="row px-1">
                    <div className="col-md-6 conteiner login-left">
                        <div className="">

                            <h2 className="giris-control">GİRİŞ</h2>

                            <label className="login-user-name"></label>
                            <input type="text" className="login-user-name-text mb-3" placeholder="Kullanıcı Adı"/>

                            <label className="login-password"></label>
                            <input type="password" className="login-password-text mb-3" placeholder="Şifre"/>

                            <label class="checkbox-container mb-5">Beni Hatırla
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                            </label>

                            <button class="button-login">GİRİŞ</button><br></br>

                            <img className="kartela-logo-login" src={kartela_logo} alt="" />

                        </div>

                    </div>

                    <div className="col-md-6 p-0">
                        <img className="login-img p-0" src={login_img} alt="" />
                    </div>
                    
                </div>
            </div>
        </div>

    )
}

export default Login