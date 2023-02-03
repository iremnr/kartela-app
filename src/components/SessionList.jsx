
import React, { isValidElement } from "react";
import { Col, Container, Row } from "react-bootstrap";
import kartela_logo from '../assets/logo_kartela.png';
import { FiTrash } from "react-icons/fi";
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { BsArrowLeftCircle } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { BiPlusCircle } from "react-icons/bi";




function SessionList() {

    document.title = "Seans Liste";

    return (

        <div className='container-fluid bg-kartela p-4'>
            <div className="conteiner bg-white rounded-2xl h-screen p-10">
                                
                <div className="row">
                    <div className="col-sm-4 vector" >
                        <BsArrowLeftCircle size={50} color="#369CC0"/>
                    </div>
                    <div className="col-sm-4 flex justify-center">
                        <h2 className="seans-list-title">GENEL SEANS LİSTESİ</h2>
                    </div>
                    <div className="col-sm-4 p-0" >
                        <img className="seanslist-logo" src={kartela_logo} alt="" />
                    </div>
                </div>

                <div className="row px-14 mb-3">
                    <div className="col-sm-2">
                        <select className="dropdavn">
                            <option selected disabled>PSİKOLOG</option>
                            <option>Psikolog 1</option>
                            <option>Psikolog 2</option>
                            <option>Psikolog 3</option>
                        </select>
                    </div>

                    <div className="col-sm-2">
                        <select className="dropdavn">
                            <option selected disabled>GÜN</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                    <div className="col-sm-2">
                        <select className="dropdavn">
                            <option selected disabled>AY</option>
                            <option>OCAK</option>
                            <option>ŞUBAT</option>
                            <option>MART</option>
                        </select>
                    </div>
                    <div className="col-sm-2">
                        <select className="dropdavn">
                            <option selected disabled>YIL</option>
                            <option>2023</option>
                            <option>2022</option>
                            <option>2021</option>
                        </select>
                    </div>
                </div>
                
                <div className="row px-10">
                <table>
                    <tr>
                        <th className="th-items-first">Firstname</th>
                        <th className="th-items">Lastname</th>
                        <th className="th-items">Savings</th>
                        <th className="th-items">Firstname</th>
                        <th className="th-items">Lastname</th>
                        <th className="th-items">Lastname</th>
                        <th className="th-items">Savings</th>
                        <th className="th-items">Firstname</th>
                        <th className="th-items">Lastname</th>
                        <th className="th-items">Lastname</th>
                        <th className="th-items">Savings</th>
                        <th className="th-items">Firstname</th>
                        <th className="th-items-end"><BiPlusCircle size={40} color="#369CC0"/></th>
                    </tr>
                    <tr>
                        <td className="tr-items-first">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items"><input type="checkbox"/></td>
                        <td className="tr-items"><input type="checkbox"/></td>
                        <td className="tr-items-end">
                            <div className="row">
                                <div className="col">
                                    <FiEdit2 size={18} color="#6A6A65"/>
                                </div>
                                <div className="col">
                                    <FiTrash size={18} color="#6A6A65"/>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="tr-items-first">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items"><input type="checkbox"/></td>
                        <td className="tr-items"><input type="checkbox"/></td>
                        <td className="tr-items-end">
                            <div className="row">
                                <div className="col">
                                    <FiEdit2 size={18} color="#6A6A65"/>
                                </div>
                                <div className="col">
                                    <FiTrash size={18} color="#6A6A65"/>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="tr-items-first">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items"><input type="checkbox"/></td>
                        <td className="tr-items"><input type="checkbox"/></td>
                        <td className="tr-items-end">
                            <div className="row">
                                <div className="col">
                                    <FiEdit2 size={18} color="#6A6A65"/>
                                </div>
                                <div className="col">
                                    <FiTrash size={18} color="#6A6A65"/>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="tr-items-first">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items">Folder 1</td>
                        <td className="tr-items"><input type="checkbox"/></td>
                        <td className="tr-items"><input type="checkbox"/></td>
                        <td className="tr-items-end">
                            <div className="row">
                                <div className="col">
                                    <FiEdit2 size={18} color="#6A6A65"/>
                                </div>
                                <div className="col">
                                    <FiTrash size={18} color="#6A6A65"/>
                                </div>
                            </div>
                        </td>
                    </tr>
                    </table>

                </div>
            

            </div>
        </div>
    )
}

export default SessionList