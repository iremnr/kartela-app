
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
import "@fontsource/roboto";
import { VscSearch } from "react-icons/vsc";
import "@fontsource/montserrat";



function AddTherapist() {

    document.title = "Terapist Ekle";

    return (

        <div className='container-fluid bg-kartela p-4'>
            <div className="conteiner bg-white rounded-2xl h-auto p-10">
                                
                <div className="row">
                    <div className="col-sm-2 vector" >
                        <BsArrowLeftCircle size={50} color="#369CC0"/>
                    </div>
                    <div className="col-sm-8 flex justify-center">
                        <h2 className="seans-list-title">TERAPİST EKLE</h2>
                    </div>
                    <div className="col-sm-2 p-0" >
                        <img className="seanslist-logo" src={kartela_logo} alt="" />
                    </div>
                </div>

                <div className="terapist-responsive">
                    <div className="row px-14 mb-3">
                        <div className="col-sm-3 p-0"></div>
                        <div className="col-sm-2 p-0">
                            <select className="dropdavn">
                                <option selected disabled>PSİKOLOG</option>
                                <option>Psikolog 1</option>
                                <option>Psikolog 2</option>
                                <option>Psikolog 3</option>
                            </select>
                        </div>

                        <div className="col-sm-1 p-0">
                            <select className="dropdavn">
                                <option selected disabled>GÜN</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                        <div className="col-sm-1 p-0">
                            <select className="dropdavn">
                                <option selected disabled>AY</option>
                                <option>OCAK</option>
                                <option>ŞUBAT</option>
                                <option>MART</option>
                            </select>
                        </div>
                        <div className="col-sm-1 p-0">
                            <select className="dropdavn">
                                <option selected disabled>YIL</option>
                                <option>2023</option>
                                <option>2022</option>
                                <option>2021</option>
                            </select>
                        </div>
                        <div className="col-sm-2 p-0">
                            <select className="dropdavn">
                                <option selected disabled>FİLTRE</option>
                                <option>2023</option>
                                <option>2022</option>
                                <option>2021</option>
                            </select>
                        </div>
                        <div className="col-sm-2 p-0 search-bar">
                            <div className="px-2"><VscSearch size={16} color="#000000"/></div>
                            <input type="text" className="search-bar-text p-0" placeholder="ARA.."/>
                        </div>
                    </div>
                    
                    <div className="row px-10">
                        <table>
                            <tr>
                                <th className="th-items-first">TC</th>
                                <th className="th-items">DANIŞAN<br></br>İSİM/SOYİSİM</th>
                                <th className="th-items">PSİKOLOG</th>
                                <th className="th-items">ALAN</th>
                                <th className="th-items">YAŞ</th>
                                <th className="th-items">CİNSİYET</th>
                                <th className="th-items">ODA</th>
                                <th className="th-items">TARİH</th>
                                <th className="th-items">SAAT</th>
                                <th className="th-items">ÜCRET</th>
                                <th className="th-items">ÖDENDİ/<br></br>ÖDENMEDİ</th>
                                <th className="th-items">SEANS<br></br>YAPILDI</th>
                                <th className="th-items-end"><BiPlusCircle size={40} color="#369CC0"/></th>
                            </tr>
                            <tr>
                                <td className="tr-items-first">00000000000</td>
                                <td className="tr-items">Folder 1</td>
                                <td className="tr-items">Folder 1</td>
                                <td className="tr-items">Folder 1</td>
                                <td className="tr-items">Folder 1</td>
                                <td className="tr-items">Folder 1</td>
                                <td className="tr-items">Folder 1</td>
                                <td className="tr-items">05/01/2023</td>
                                <td className="tr-items">15 : 00</td>
                                <td className="tr-items">100</td>
                                <td className="tr-items">                                
                                    <label class="checkbox-container flex justif-center">
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>
                                </td>
                                <td className="tr-items">                                
                                    <label class="checkbox-container flex justif-center">
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>
                                </td>
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
                                <td className="tr-items-first">00000000000</td>
                                <td className="tr-items">Folder 1</td>
                                <td className="tr-items">Folder 1</td>
                                <td className="tr-items">Folder 1</td>
                                <td className="tr-items">Folder 1</td>
                                <td className="tr-items">Folder 1</td>
                                <td className="tr-items">Folder 1</td>
                                <td className="tr-items">05/01/2023</td>
                                <td className="tr-items">15 : 00</td>
                                <td className="tr-items">100</td>
                                <td className="tr-items">                                
                                    <label class="checkbox-container flex justif-center">
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>
                                </td>
                                <td className="tr-items">                                
                                    <label class="checkbox-container flex justif-center">
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>
                                </td>
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
                                <td className="tr-items-first">00000000000</td>
                                <td className="tr-items">Folder 1</td>
                                <td className="tr-items">Folder 1</td>
                                <td className="tr-items">Folder 1</td>
                                <td className="tr-items">Folder 1</td>
                                <td className="tr-items">Folder 1</td>
                                <td className="tr-items">Folder 1</td>
                                <td className="tr-items">05/01/2023</td>
                                <td className="tr-items">15 : 00</td>
                                <td className="tr-items">100</td>
                                <td className="tr-items">                                
                                    <label class="checkbox-container flex justif-center">
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>
                                </td>
                                <td className="tr-items">                                
                                    <label class="checkbox-container flex justif-center p-0 items-center">
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>
                                </td>
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
                                <td className="tr-items-first">00000000000</td>
                                <td className="tr-items">Folder 1</td>
                                <td className="tr-items">Folder 1</td>
                                <td className="tr-items">Folder 1</td>
                                <td className="tr-items">Folder 1</td>
                                <td className="tr-items">Folder 1</td>
                                <td className="tr-items">Folder 1</td>
                                <td className="tr-items">05/01/2023</td>
                                <td className="tr-items">15 : 00</td>
                                <td className="tr-items">100</td>
                                <td className="tr-items">                                
                                    <label class="checkbox-container flex justif-center">
                                        <input className="" type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>
                                </td>
                                <td className="tr-items">                                
                                    <label class="checkbox-container flex justif-center">
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>
                                </td>
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
                

                <div className="row p-10">
                    <div className="col-lg-6">
                        <form action="/terapist-ekle">
                            <label className="terapist-form-title mb-3">İSİM/SOYİSİM</label>
                            <input className="terapist-form mb-3 px-2" type="text" placeholder="..."/>

                            <label className="terapist-form-title mb-3">ALANLAR</label>
                            <select className="terapist-form mb-3 px-2">
                                <option selected disabled>Work</option>
                                <option>WORK 1</option>
                                <option>WORK 2</option>
                                <option>WORK 3</option>
                            </select>
                            <button type="submit" className="terapist-button">KAYDET</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTherapist