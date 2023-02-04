import vector from '../assets/Vector.png';
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import kartela_logo from '../assets/logo_kartela.png';
import { BsArrowLeftCircle } from "react-icons/bs";



function User_menu() {
    return (
        <div className='container-fluid bg-kartela p-4'>
            <div className="conteiner bg-white rounded-2xl p-10">
                                
                <div className="row">
                    <div className="col-sm-4 vector" >
                        <BsArrowLeftCircle size={50} color="#369CC0"/>
                    </div>
                    <div className="col-sm-8 p-0" >
                        <img className="menu-kartela-logo" src={kartela_logo} alt="" />
                    </div>
                </div>

                <div className='row px-20'>
                    <div className='col-lg-6'>
                        <div className='row px-6'>
                            <div className='card-1 mb-3'>
                                <h1 className='card-yazi-1'>TAKVİM</h1>
                            </div>
                            <div className='card-1 mb-3'>
                                <h1 className='card-yazi-1'>ETKİNLİK OLUŞTUR</h1>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-6'>
                        <div className='row px-6'>
                            <div className='card-1 mb-3'>
                                <h1 className='card-yazi-1'>SEANS OLUŞTUR</h1>
                            </div>
                            <div className='card-2 mb-2'>
                                    <h1 className='card-yazi-2'>SEANSLARIM</h1>
                            </div>
                            <div className='card-2'>
                                    <h1 className='card-yazi-2'>DANIŞANLARIM</h1>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default User_menu