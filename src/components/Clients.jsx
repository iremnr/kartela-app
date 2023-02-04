
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
import { VscSearch } from "react-icons/vsc";
import "@fontsource/montserrat";



function Clients() {

    document.title = "Danışanlarım";

    return (

        <div className='container-fluid bg-kartela p-4'>
            <div className="bg-white rounded-2xl h-screen p-10">
                                
                <div className="row">
                    <div className="col-sm-2 vector" >
                        <BsArrowLeftCircle size={50} color="#369CC0"/>
                    </div>
                    <div className="col-sm-8 flex justify-center">
                        <h2 className="seans-list-title">DANIŞANLARIM</h2>
                    </div>
                    <div className="col-sm-2 p-0" >
                        <img className="seanslist-logo" src={kartela_logo} alt="" />
                    </div>
                </div>

                <div className="row px-10 mb-3 flex justify-end">
                    
                    <div className="col-sm-2 p-0 mx-1">
                        <select className="dropdavn">
                            <option selected disabled>PSİKOLOG</option>
                            <option>Psikolog 1</option>
                            <option>Psikolog 2</option>
                            <option>Psikolog 3</option>
                        </select>
                    </div>

                    <div className="col-sm-1 p-0 mx-1">
                        <select className="dropdavn">
                            <option selected disabled>GÜN</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                    <div className="col-sm-1 p-0 mx-1">
                        <select className="dropdavn">
                            <option selected disabled>AY</option>
                            <option>OCAK</option>
                            <option>ŞUBAT</option>
                            <option>MART</option>
                        </select>
                    </div>
                    <div className="col-sm-1 p-0 mx-1">
                        <select className="dropdavn">
                            <option selected disabled>YIL</option>
                            <option>2023</option>
                            <option>2022</option>
                            <option>2021</option>
                        </select>
                    </div>
                    <div className="col-sm-2 p-0 mx-1">
                        <select className="dropdavn">
                            <option selected disabled>FİLTRE</option>
                            <option>2023</option>
                            <option>2022</option>
                            <option>2021</option>
                        </select>
                    </div>
                    <div className="col-sm-2 search-bar p-0">
                        <div className="px-3"><VscSearch size={20} color="#000000"/></div>
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
                                <div className="container flex justify-center items-center">
                                    <label class="checkbox-container">
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </td>
                            <td className="tr-items">                                
                                <div className="container flex justify-center items-center">
                                    <label class="checkbox-container">
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
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
                                <div className="container flex justify-center items-center">
                                    <label class="checkbox-container">
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </td>
                            <td className="tr-items">                                
                                <div className="container flex justify-center items-center">
                                    <label class="checkbox-container">
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
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
                                <div className="container flex justify-center items-center">
                                    <label class="checkbox-container">
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </td>
                            <td className="tr-items">                                
                                <div className="container flex justify-center items-center">
                                    <label class="checkbox-container">
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
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
                                <div className="container flex justify-center items-center">
                                    <label class="checkbox-container">
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </td>
                            <td className="tr-items">                                
                                <div className="container flex justify-center items-center">
                                    <label class="checkbox-container">
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
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
        </div>
    )
}

export default Clients